# Architecture

Living structural map of the system as of 2026-07-26.
Overwritten when structural changes occur during a session.

## Overview

GRG-INFI ist ein Unterrichts-Repo (HTL Spengergasse, WII–Betriebsinformatik, Fach INFI).
Kein Software-System — die „Architektur" ist die **Doku-Landschaft**: dreischichtige
Lehrplan-Doku (① offiziell / ② Schuladaption / ③ Unterricht) + PMM-Stil-Jahrgangsplanung
(KM-Steckbriefe + Klassenordner) + Session-Wissen (`docs/ai/`).

## Repo-Struktur (Doku-relevant)

| Ort | Zweck | Bemerkung |
|-----|-------|-----------|
| `docs/lehrplan/LEHRPLAN.md` | **①** getreuer Extrakt Anlage 1.24 (alle Jg) | QUELLE, 2026-07-26 gegen RIS verifiziert |
| `docs/lehrplan/RIS.md` | Rechtsstand, Novellen, Stundentafel, Schichten-Vergleich | verweist auf GRG-SWP-RIS.md |
| `docs/lehrplan/HWII_INFI.pdf` | **②** Schuladaption (≡ ①) | `pdftotext -layout` |
| `docs/lehrplan/METADATA.md` | Rechtsgrundlage, Stundentafel, Planungskonvention | — |
| `docs/lehrplan/jg2-einheiten.md` | **③** Ist SJ 2025/26 (KM3/KM4, rückgepflegt) | historisch, nicht anfassen |
| `docs/lehrplan/jg4-`, `jg5-einheiten.md` | Gerüste Jg IV (ERP) / Jg V (IS) | Befüll-Anleitung in LEHRPLAN.md |
| `kompetenzmodule/` | KM-Steckbriefe (km5/km6 voll; km3/km4 Gerüst+; km7/8/9 Gerüst) + Matrix-README | PMM-Stil |
| `3HWII/` | Klassen-Drehscheibe SJ 2026/27 + Semesterpläne (je 13 UE + 2 PLF) | enthält SWP-Verbund-Doku |
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

- RIS (NOR40217058) → `LEHRPLAN.md` (①-Extrakt) → Steckbriefe/Semesterpläne (KM-Bezug ①).
- `HWII_INFI.pdf` (②) → Vergleich in `RIS.md` §6 (Befund: ≡ ①).
- `jg2-einheiten.md` (③ Ist) → km3/km4 (rückgepflegt) → Vorwissen in km5 + `3HWII/`.
- `3HWII/semesterplan-*.md` ↔ `GRG-SWP/3HWII/` (Sequenz-Sync des Verbunds; Cross-Repo-Links via GitHub-URL).
