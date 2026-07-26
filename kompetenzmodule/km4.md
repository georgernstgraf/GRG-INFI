# KM4 — SQL-Abfragen, DML/DCL, Formulare/Berichte — Gerüst+

**Klasse/Semester:** 2HWII → 2AHWII, 4. Semester (SS, rückgepflegt SJ 2025/26)
**Wochenstunden:** 2 (schulautonom; offiziell 3(3) — Georg allein)
**Bereich:** Datenbanken
**Konkrete Einheiten:** `docs/lehrplan/jg2-einheiten.md` · Archiv: `ARCHIV/2025-26-2ahwii/`

## Worum geht es?

Die **Abfragesprache** in der Tiefe: Projektion, Selektion, Gruppierung, Aggregatfunktionen,
Verbund (JOIN, Self-JOIN) und DML. Lehrplan-Kern (①): „Abfragen in SQL erstellen und
durchführen; eine einfache Datenbankanwendung erstellen."

## Inhalte (Ist, SJ 2025/26)

- W3Schools-SQL: WHERE, LIKE, ORDER BY, DISTINCT, boolesche Operatoren, Aliase
- Aggregatfunktionen (COUNT/SUM/AVG), GROUP BY, HAVING (Ausführungsreihenfolge,
  WHERE vs. HAVING)
- JOINs inkl. Self-JOIN (SQL-LeetCode: LC182, LC196 u. a., siehe `Leetcodes/`)
- PLF-Probe (Okt), schriftliche PLF (Dez, Open Book), praktische PLF (Mai)
- „Einfache Datenbankanwendung" via **Prisma** statt Formulare/Berichte:
  Schema, `prisma migrate dev`, `create`/`findMany`/`include`/`where`, Seed-Skripte

## Lücken / Übererfüllung

- ⚠ **Entwurf von Formularen und Berichten** (① KM4) entfiel zugunsten des ORM-Pfads —
  konzeptionell nachgeformt in KM5 (Views als Sichten) und KM6 (Reportgenerierung)
- ⚠ **DCL** (① KM4, in den Abfragesprachen) nicht explizit — wird in KM5 mit
  „Benutzerverwaltung" (① KM5) zusammengeführt unterrichtet
- ↑ Übererfüllung: Prisma/ORM (KM6-Vorgriff), Deno-Anbindung via `node:sqlite`

**Steckbrief-Ausbau:** erfolgt bei erneuter Unterrichtung (Struktur wie `km5.md`).
