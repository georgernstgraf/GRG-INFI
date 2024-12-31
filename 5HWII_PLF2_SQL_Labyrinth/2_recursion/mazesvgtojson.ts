#!/usr/bin/env -S deno run -A
if (!Deno.args[0]) {
    console.error("Provide Filename");
    Deno.exit(1);
}
const decoder = new TextDecoder("utf-8");
const data = decoder.decode(Deno.readFileSync(Deno.args[0])).split("\n");
const re_title = new RegExp("<title>(\\d+) by (\\d+) orthogonal maze</title>");
const re_line = new RegExp(
    '<line x1="(\\d+)" y1="(\\d+)" x2="(\\d+)" y2="(\\d+)" />',
);

function convert(par: number) {
    return ((par + 2) / 16 - 0.25) * 2;
}
let zeilenSVG = 0;
let spaltenSVG = 0;
const walls = [];
for (let dataLine of data) {
    dataLine = dataLine.trim();
    const line = dataLine.match(re_line);
    if (line) {
        walls.push(Array.from(line).slice(1).map((_) => Number.parseInt(_)));
        continue;
    }
    const title = dataLine.match(re_title);
    if (title) {
        spaltenSVG = Number.parseInt(title[1]);
        zeilenSVG = Number.parseInt(title[2]);
        continue;
    }
}
const zeilenMy = zeilenSVG * 2 + 1;
const spaltenMy = spaltenSVG * 2 + 1;
const out = Array.from({ length: zeilenMy }, () => Array(spaltenMy).fill(1)); // walls come later
for (const item of walls) {
    const [a, b, c, d] = item;
    const x1 = convert(a);
    const y1 = convert(b);
    const x2 = convert(c);
    const y2 = convert(d);
    //  console.log(`${a}->${x1}, ${b}->${y1} , ${c}->${x2} , ${d}->${y2}`);
    if (x1 == x2) { // zeilen change
        for (let z = y1; z <= y2; z++) {
            out[z][x1] = 0;
        }
        continue;
    }
    if (y1 == y2) { // spalten change
        for (let s = x1; s <= x2; s++) {
            out[y1][s] = 0;
        }
        continue;
    }
    console.error("what?!");
}
console.error("Entrance:", 1, out[0].findIndex((v) => v == 1) + 1);
console.error(
    "Exit:",
    out.length,
    out[out.length - 1].findIndex((v) => v == 1) + 1,
);
const lines = out.map((z) => `  [${z.join(",")}]`);
console.log(`[\n${lines.join(",\n")}\n]`);
