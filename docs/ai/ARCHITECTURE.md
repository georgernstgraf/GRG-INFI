# Architecture

Living structural map of the system as of 2026-09-07.
Overwritten when structural changes occur during a session.

## Overview

GRG-INFI ist ein Unterrichts-Repo (HTL Spengergasse, WII–Betriebsinformatik, Fach INFI).
Kein Software-System — die „Architektur" ist die **Doku-Landschaft**: dreischichtige
Lehrplan-Doku (① offiziell / ② Schuladaption / ③ Unterricht) + PMM-Stil-Jahrgangsplanung
(KM-Steckbriefe + Klassenordner unter `lehrplan/`) + Session-Wissen (`docs/ai/`).

> **2026-09-07 — Standard-Layout-Migration:** Das Lehrplan-Werk liegt seit 2026-09-07 im
> Skill-Standard-Layout unter `lehrplan/` (zuvor: `docs/lehrplan/`, Root-`3HWII/`,
> Root-`kompetenzmodule/`). Alte Pfade nur noch in HISTORY/DECISIONS-Historie gültig.

## Repo-Struktur (Doku-relevant)

| Ort | Zweck | Bemerkung |
|-----|-------|-----------|
| `lehrplan/infi-hwii/LEHRPLAN.md` | **①** getreuer Extrakt Anlage 1.24 (alle Jg) | QUELLE, 2026-07-26 gegen RIS verifiziert |
| `lehrplan/infi-hwii/RIS.md` | Rechtsstand, Novellen, Stundentafel, Schichten-Vergleich | verweist auf GRG-SWP-RIS.md |
| `lehrplan/infi-hwii/HWII_INFI.pdf` | **②** Schuladaption (≡ ①) | `pdftotext -layout` |
| `lehrplan/METADATA.md` | Rechtsgrundlage, Stundentafel, Planungskonvention | — |
| `lehrplan/infi-hwit/` | Skelett (Anlage 1.28, HWIT) | Extraktion Task 2 ausstehend; primär im Fachgruppen-Repo |
| `lehrplan/infi-hwii/2HWII/` | **③** Ist SJ 2025/26: `2HWII.lehrplan.md` (①-Extrakt KM3/KM4) | nicht anfassen |
| `lehrplan/infi-hwii/4HWII/`, `lehrplan/infi-hwii/5HWII/` | Klassen-Extrakte (① KM7/KM8 bzw. KM9) | Befüll-Anleitung in LEHRPLAN.md |
| `lehrplan/infi-hwii/kompetenzmodule/` | KM-Steckbriefe (km5/km6 voll; km3/km4 Gerüst+; km7/8/9 Gerüst) + Matrix-README | PMM-Stil |
| `lehrplan/infi-hwii/3HWII/` | Klassen-Drehscheibe SJ 2026/27 | enthält SWP-Verbund-Doku |
| `unterricht/HWII-INFI/` | Unterrichts-Ebene (Retrofit 2026-09-10): `jg2/jg4/jg5-einheiten.md`, `jg3-semesterplan-{ws,ss}.md` (je 13 UE + 2 PLF) | am Repo-Root |
| `ARCHIV/2025-26-2ahwii/` | Unterrichtsmaterial SJ 2025/26 | archiviert |
| `Leetcodes/`, `sqlite-datenbanken/`, `Unterlagen/`, `_Experimente/` | Übungen, DBs, Material, Spielwiese | unverändert |

## Knowledge Files (`docs/ai/`)

| File | Purpose | Update mode |
|------|---------|------------|
| HANDOFF.md | Open tasks for next session | Overwrite |
| DECISIONS.md | Active decisions still in force | Append; prune superseded → HISTORY.md |
| ARCHITECTURE.md | Living structural map | Overwrite |
| CONVENTIONS.md | Ongoing rules to follow | Append |
| PITFALLS.md | Hard-won failure knowledge | Append |
| DOMAIN.md | Business/domain rules | Append |
| STATE.md | Current project status | Overwrite |
| HISTORY.md | Superseded entries archive | Append-only |

## Data Flows (Doku)

- RIS (NOR40217058) → `lehrplan/infi-hwii/LEHRPLAN.md` (①-Extrakt) → Klassen-Extrakte `<KLASSE>/<KLASSE>.lehrplan.md` → Steckbriefe/Semesterpläne (KM-Bezug ①).
- `HWII_INFI.pdf` (②) → Vergleich in `RIS.md` §6 (Befund: ≡ ①).
- `unterricht/HWII-INFI/jg2-einheiten.md` (③ Ist) → km3/km4 (rückgepflegt) → Vorwissen in km5 + `lehrplan/infi-hwii/3HWII/`.
- `unterricht/HWII-INFI/jg3-semesterplan-*.md` ↔ `GRG-SWP/unterricht/HWII-SWP/` (Sequenz-Sync des Verbunds; Cross-Repo-Links via GitHub-URL).
