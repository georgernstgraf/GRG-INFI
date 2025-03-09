#!/usr/bin/env -S deno run -A --v8-flags=--stack_size=4096
const maxSolutions = 10;
class Matrix {
    // 0: wall # 
    // 1: free "  "
    // 2: my path ". "
    solutions: number[][][] = [];
    array: number[][] = [];
    lastPrintdate = new Date().valueOf();
    constructor(fileName: string) { // TODO implement}
        const data = Deno.readTextFileSync(fileName);
        this.array = JSON.parse(data);
    }
    getDoors() {
        const rv = [];
        // search first and last row zeile
        for (const z of [0, this.array.length - 1]) {
            for (let s = 0; s < this.array[z].length; s++) {
                if (this.isFree([z, s])) {
                    rv.push([z, s]);
                }
            }
        }
        // search first and last column spalte
        for (let z = 0; z < this.array.length; z++) {
            if (this.isFree([z, 0])) {
                rv.push([z, 0]);
            }
            if (this.isFree([z, this.array[z].length - 1])) {
                rv.push([z, this.array[z].length - 1]);
            }
        }
        return rv;
    }
    getPossibleMoves(point: [number, number]) {
        const rv = [];
        const [zp, sp] = point;
        const directions = [ // clockwise
            [zp - 1, sp],
            [zp, sp + 1],
            [zp + 1, sp],
            [zp, sp - 1],
        ];
        for (const d of directions) {
            const [z, s] = d;
            if (z < 0 || z >= this.array.length) continue;
            if (s < 0 || s >= this.array[z].length) continue;
            if (this.array[z][s] == 1) {
                rv.push([z, s]);
            }
        }
        return rv;
    }
    isFree(point: [number, number]): boolean {
        const [z, s] = point;
        return this.array[z][s] == 1; // TODO
    }
    solve(start: [number, number], goal: [number, number]): void {
        if (start[0] == goal[0] && start[1] == goal[1]) {
            const solution = this.array.map((row) => [...row]);
            const [z, s] = goal;
            solution[z][s] = 3;
            this.solutions.push(solution);
            return;
        }
        this.mark(start, 2);
        if ((new Date().valueOf() - this.lastPrintdate) > 700) {
            console.log(this.matrixToString(this.array));
            this.lastPrintdate = new Date().valueOf();
        }
        const possibleMoves = this.getPossibleMoves(start);
        for (const move of possibleMoves) {
            this.solve(move as [number, number], goal);
            if (this.solutions.length >= maxSolutions) return;
        }
        this.mark(start, 1);
    }
    mark(point: [number, number], code: number) {
        const [z, s] = point;
        this.array[z][s] = code;
    }
    matrixToString(matrix: number[][]): string {
        let rv = "  " + matrix[0].map((_v, i) => `${(i + 1) % 10} `).join("") + "\n";
        for (let z = 0; z < matrix.length; z++) {
            rv += `${(z + 1) % 10} `;
            for (let s = 0; s < matrix[z].length; s++) {
                let c;
                switch (matrix[z][s]) {
                    case 0: {
                        c = "# ";
                        break;
                    }
                    case 1: {
                        c = "  ";
                        break;
                    }
                    case 2: {
                        c = ". ";
                        break;
                    }
                    case 3: {  // ziel
                        c = ". ";
                        break;
                    }
                    default: {
                        c = `${matrix[z][s]} ?? `;
                    }
                }
                rv += c;
            }
            rv += "\n";
        }
        return rv;
    }
    toString() {
        const word = (this.solutions.length == 1) ? "Solution" : "Solutions";
        let rv = `${this.solutions.length} ${word} found\n`;
        for (const sol of this.solutions) {
            rv += this.matrixToString(sol);
        }
        return rv;
    }
}
function errorExit(msg: string) {
    console.error(msg);
    Deno.exit(1);
}

if (import.meta.main) {
    let matrix;
    try {
        matrix = new Matrix(Deno.args[0]); // "lab1.json"
    } catch (e) {
        let msg;
        if (e instanceof Error) msg = e.message;
        else msg = "unknown error";
        errorExit(msg);
        Deno.exit(1);
    }
    let start, goal;
    if (Deno.args.length == 3) {
        start = eval(`[${Deno.args[1]}]`); // "1,6" -> [1,6]
        if (start.length != 2) {
            errorExit(
                `Start must be in the form of "1,6", not "${Deno.args[1]}"`,
            );
            Deno.exit(1);
        }
        start[0]--;
        start[1]--;
        goal = eval(`[${Deno.args[2]}]`); // "11,6" -> [11,6]
        if (goal.length != 2) {
            errorExit(
                `goal must be in the form of "1,6", not "${Deno.args[2]}"`,
            );
            Deno.exit(1);
        }
        goal[0]--;
        goal[1]--;
        if (!matrix.isFree(start)) {
            errorExit(`Start is not free to step on`);
        }
        if (!matrix.isFree(goal)) {
            errorExit(`Goal is not free to step on`);
        }
    } else { // find myself
        const doors = matrix.getDoors();
        if (doors.length == 2) {
            [start, goal] = doors;
        } else {
            const displayDoors = doors.map((a) => [a[0] + 1, a[1] + 1]);
            errorExit(
                `Found ${doors.length} doors:\n${
                    JSON.stringify(displayDoors, null, 4)
                }`,
            );
        }
    }
    matrix.solve(start, goal);
    console.log(matrix.toString());
}
