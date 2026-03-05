# AGENTS.md

This document contains operational guidelines for AI agents working in the `GRG-INFI` repository.
It defines build commands, code style, and project structure conventions.

---

## 1. Project Overview & Environment

This repository contains coursework and exercises for "GRG-INFI", a Computer Science class.
Key technologies:

- **Runtime:** Deno (TypeScript).
- **Database:** SQLite.
- **Languages:** TypeScript, SQL.

### Directory Structure

- `2ahwii/`: Class-specific projects, typically Deno + SQLite.
- `Leetcodes/`: Algorithmic and SQL problems. Each problem has its own folder.
- `sqlite-datenbanken/`: Common database files (`.db`, `.sqlite`) and seed scripts (`.sql`).
- `Little_Bobby_Tables/`: SQL security examples.

---

## 2. Build, Test, and Lint Commands

### Deno Projects (e.g., in `2ahwii/`)

Always check for a `deno.json` configuration file first.

**Running Code:**

- **Standard Task:** `deno task run` (Preferred if defined).
- **Manual Run:** `deno run --allow-read --allow-write main.ts`
  - Note: Many scripts require file system permissions (`--allow-read`, `--allow-write`).
  - Use `-A` (allow all) only during prototyping or if permissions are complex.

**Testing:**

- **Run All Tests:** `deno test`
- **Run Single Test File:**

  ```bash
  deno test tests/my_test.ts
  ```

- **Run Specific Test Case:**

  ```bash
  deno test --filter "name of test"
  ```

- **Watch Mode:** `deno test --watch`

**Linting & Formatting:**

- **Lint:** `deno lint` (Follows standard Deno rules).
- **Format:** `deno fmt` (Standard Deno formatting: 2 spaces, double quotes, semicolons).

### SQL / Database Tasks

- **Execution:** Use `sqlite3` CLI.

  ```bash
  sqlite3 database.db < script.sql
  ```

- **Makefile:** Some directories (e.g., `sqlite-datenbanken/`) use `make`.
  - `make`: Builds/resets the default database.
  - `make dump`: Dumps the database schema/data.

---

## 3. Code Style & Conventions

### TypeScript (Deno)

- **Imports:**
  - Use **Deno-native imports** (URL-based or JSR).
  - Use `node:` prefix for Node.js compatibility (e.g., `import { DatabaseSync } from "node:sqlite";`).
  - **Do not** use NPM requires or `package.json` unless explicitly present.
- **Formatting:**
  - Strictly adhere to `deno fmt`.
  - Use double quotes `"` for strings.
  - Use semicolons `;`.
- **Language & Comments:**
  - **German Comments:** Existing code uses German for comments (e.g., `// Sync Adapter für SQLite`).
  - **Action:** Continue using German for comments if the file already uses it. Use English for completely new modules unless context dictates otherwise.
  - **Docs:** Minimal JSDoc is acceptable, but code should be self-documenting.
- **Naming:**
  - Variables/Functions: `camelCase` (e.g., `rows`, `stmt`, `executeSql`).
  - Classes: `PascalCase`.
  - Files: `snake_case` or `camelCase` (consistency within directory wins).

### SQL

- **Keywords:** UPPERCASE (e.g., `SELECT`, `FROM`, `WHERE`, `INSERT`).
- **Indentation:** 2 or 4 spaces.
- **Filenames:**
  - `.sql`: Script files.
  - `.db` / `.sqlite`: Binary database files.

### Error Handling

- **TypeScript:** Use `try/catch` blocks for database operations or I/O.
- **SQL:** Ensure scripts are idempotent where possible (use `DROP TABLE IF EXISTS`).

---

## 4. Specific Rules for Agents

### 1. File Manipulation

- **Paths:** Always use absolute paths when reading/writing files.
- **Verification:** Read `deno.json` or `Makefile` before executing commands to confirm task names.

### 2. Dependency Management

- **Deno:** Add dependencies to `deno.json` imports map if valid, or use direct URL imports.
- **Std Lib:** Use JSR for standard library (e.g., `jsr:@std/assert`).

### 3. Testing New Code

- When writing new logic, create a companion test file (e.g., `main_test.ts`) if one doesn't exist.
- Use `@std/assert` for assertions:

  ```typescript
  import { assertEquals } from "jsr:@std/assert";

  Deno.test("example test", () => {
    assertEquals(1 + 2, 3);
  });
  ```

### 4. Existing Rule Files

- **Cursor/Copilot:** No specific `.cursorrules` or `.github/copilot-instructions.md` were found at the root. Follow the guidelines in this file.
- **General Rules:** See `RULES.md` for course grading information (context only).

---

## 5. Example Workflows

**Scenario: Adding a new Deno SQL script**

1. Create `script.ts`.
2. Import SQLite: `import { DatabaseSync } from "node:sqlite";`.
3. Add comments in German describing the query.
4. Run `deno fmt script.ts`.
5. Execute with `deno run -A script.ts`.

**Scenario: Solving a Leetcode SQL problem**

1. Navigate to `Leetcodes/<problem_folder>/`.
2. Create `sol.sql`.
3. Write the SQL query (UPPERCASE keywords).
4. Verify by running against a test DB if available: `sqlite3 test.db < sol.sql`.
