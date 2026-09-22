# 3AHWII – INFI (SJ 2026/27)

Kohorten-Ordner der **3AHWII** für das Fach **INFI** (HTL Spengergasse,
WII–Betriebsinformatik), Schuljahr 2026/27.

**Stack:** SQLite (`sqlite3`, `node:sqlite`) · Deno/TypeScript (`"nodeModulesDir": "none"`,
kein Node, kein `npm:`) · PostgreSQL via Docker (nur DCL-Demo, UE 11).
ORM-Evaluierung: Prisma 6-Setup aus Jg II ist deprecated (Adapter-Pflicht ab
Prisma 7, RC auf npm-`latest`, kein Deno-nativer SQLite-Adapter) — Details siehe
UE 2026-10-06.

> **Konkrete Kohorten-Fassung.** Die **allgemeine Planung** liegt unter
> [`../unterricht/HWII-INFI/`](../unterricht/HWII-INFI/); die Klassen-Drehscheibe
> unter [`../lehrplan/infi-hwii/3HWII/`](../lehrplan/infi-hwii/3HWII/).
> Konkretisierungen und Abweichungen dieser Kohorte werden **hier** gepflegt –
> `unterricht/` bleibt unangetastet.

## Semesterplan

- **Wintersemester 2026/27:** [`semesterplan-ws.md`](semesterplan-ws.md) –
  Kohorten-Fassung, konkretisiert aus
  [`../unterricht/HWII-INFI/jg3-semesterplan-ws.md`](../unterricht/HWII-INFI/jg3-semesterplan-ws.md).

## Lessons (teach-Skill, UE 1–3)

- [Lesson 0001: Wiederholung Jg II & Diagnose (UE 1)](lessons/0001-wiederholung-diagnose.html)
- [Lesson 0002: Normalisierung 1NF–3NF (UE 2)](lessons/0002-normalformen-1nf-3nf.html)
- [Lesson 0003: Unterabfragen I (UE 3)](lessons/0003-unterabfragen-eins.html)
- Referenzen: [Glossar](reference/glossar.html) · [SQL-Spickzettel](reference/sql-spickzettel.html)
- [MISSION.md](MISSION.md) · [RESOURCES.md](RESOURCES.md)

## Unterrichtseinheiten

| Datum | UE | Thema |
|-------|----|-------|
| 2026-09-15 | S | [Agentic Coding – Einstieg (Sondereinheit, beide Gruppen; Schulübung, HÜ nur X)](2026-09-15_agentic-coding-einstieg/) |
| 2026-10-06 | 2 | [Normalisierung 3NF – Fehlersuche (X-Gruppe, Teach-HTML, ohne Node)](2026-10-06_normalisierung-3nf/) |

## Log SJ 2026/27

### 2026-10-06 – UE 2: Dritte Normalform (geplant, X-Gruppe)

UE 2 nach Kohorten-Semesterplan (KM3-Lückenschluss Normalformen 1NF–3NF).
Teach-Lesson im SWP-Stil mit 11 Quizzen (Fehlersuche transitiv, inkl.
Trickfälle wo 3NF hält, 2 SWP-Crossover-Beispiele Konto/Person):
[`2026-10-06_normalisierung-3nf/`](2026-10-06_normalisierung-3nf/).
HÜ bis 13.10. (siehe UE-README).

### 2026-09-15 – Sondereinheit: Agentic Coding (Einstieg)

### 2026-09-15 – Sondereinheit: Agentic Coding (Einstieg)

Auftakt des Semesters, beide Gruppen gemeinsam, im **INFI-Unterricht**. Einstieg
ins agentic coding mit opencode: Node-Setup (winget) + `opencode` + erster
Agent-Loop (Beispiel aus Jg II) — als **Schulübung**.
Details: [`2026-09-15_agentic-coding-einstieg/README.md`](2026-09-15_agentic-coding-einstieg/README.md).

- **HÜ nur Gruppe X:** nicht Fertiggestelltes bis nächste UE — `opencode` installiert
  (Nachweis `opencode --version`), freier Provider verbunden, `AGENTS.md` im eigenen
  Repo angepasst und committet.
- Optional: [`windows-debloat.md`](windows-debloat.md) (Semester-/Jahresstart, von
  opencode gesteuert).

## Schwester-Repo

Dieselbe Kohorte hat parallel **SWP** (OOP/GUI) — Klassen-Hub:
[`georgernstgraf/GRG-SWP/3ahwii/`](https://github.com/georgernstgraf/GRG-SWP/tree/main/3ahwii/).
