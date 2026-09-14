# HANDOFF

No pending tasks from the 2026-09-07 cycle („Lehrplan-Werk SJ 2026/27 für INFI" — erfüllt,
siehe `HISTORY.md`; Ergebnis-Zustand: `STATE.md`, Abschluss-Report: GRG-INFI#1).
**2026-09-07:** Vollmigration auf Skill-Standard-Layout `lehrplan/` erledigt
(Klassen-Extrakte `<KLASSE>.lehrplan.md` neu, Links repariert, Skill verschärft).
Organisatorische Follow-ups (Kollegen-Absprache, PLF-Termine, PG-Docker-Demo,
Domänenwahl): `lehrplan/infi-hwii/3HWII/README.md` → Offene Punkte bzw. `STATE.md` → Pending.

---

## Tasks ab 2026-09-14 (Agentic Coding / Kohorten-Ordner) — **offen**

> **Erstellt:** 2026-09-14 (aus GRG-SWP heraus) · **Tracking:** Issues
> [#2](https://github.com/georgernstgraf/GRG-INFI/issues/2) (Move + Kohorten-Ordner) und
> [#3](https://github.com/georgernstgraf/GRG-INFI/issues/3) (lehrplan-Skill).

1. [ ] **Sondereinheit 2026-09-15 halten** (beide Gruppen, INFI-Unterricht) —
   `3ahwii/2026-09-15_agentic-coding-einstieg/README.md`; **Schulübung**, HÜ-Rest **nur Gruppe X**
   (opencode installiert, Provider verbunden, `AGENTS.md` committet). Optional:
   `3ahwii/windows-debloat.md` (privat, von opencode gesteuert).
2. [ ] **lehrplan-Skill in INFI anwenden / Novellen-Check** — Issue **#3** (großer Chunk).

---

## Task ab 2026-09-14 (optionale Erweiterung Server + Telegram-Bot) — **erledigt 2026-09-14**

> **Erstellt:** 2026-09-14 · **Tracking:** Issue
> [#4](https://github.com/georgernstgraf/GRG-INFI/issues/4).

Im UE-Ordner `3ahwii/2026-09-15_agentic-coding-einstieg/` ergänzt:

- `opencode-server-windows.md` — opencode als lokaler, passwortgeschützter Server
  (`127.0.0.1:4096`), Autostart via Task Scheduler bzw. NSSM, Shell-Aliase `oc`/`ocr`
  mit **`--dir`** (Pflicht beim Attach an einen geteilten Server).
- `opencode-telegram-bot.md` — Bot bei @BotFather, Wizard/`.env`, Autostart, Befehle, Security.
- UE-README: Abschnitt „Für Eifrige: eigener Server + Telegram-Bot (optional)" + Links.

---

## Tasks ab 2026-09-14 (aus GRG-SWP) — **erledigt 2026-09-14**

> **Erstellt:** 2026-09-14 (aus GRG-SWP heraus, Spiegel-Session-Auftrag gemäß
> `GRG-SWP/docs/ai/HANDOFF.md` Task 1) · **Tracking:** dieses File (Issues deaktiviert)
> **Abschluss:** 2026-09-14 — siehe Fortschritt unten und `STATE.md`.

### Aufgabe 1 (sofort): lehrplan-Skill ausführen — Aufgabe A + Konformitäts-Check

Führe als allererstes den **lehrplan-Skill** aus (Aufgabe A — Gegenstand & Ausbildungszweig
identifizieren + Konformitäts-Check). Erwarteter Hauptbefund nach dem Layout-Retrofit:
**Die Erläuterungs-Ebene fehlt repositoryweit** (0× `**Überblick:**`/`**Erläuterung:**`).
Das ist der Kern des neuen Auftrags (siehe Aufgabe 2).

### Aufgabe 2: Erläuterungs-Ebene ergänzen (Skill-Aufgabe 2)

In `lehrplan/infi-hwii/LEHRPLAN.md` (Jg I–V) und allen Klassenextrakten
(`2HWII/…lehrplan.md` usw.):

- `> **Überblick:**` direkt unter jeder `### <Semester> – Kompetenzmodul <N>`-Überschrift
- `> **Erläuterung:**` unter jedem Lernziel-Bullet (Bildungs- und Lehraufgabe) und je eine
  Erläuterung pro Lehrstoff-Bereich
- Substanz-Vorbild (Format + Tiefe): `GRG-SWP/lehrplan/swp-hwii/LEHRPLAN.md` (dort
  vollständig für alle Jahrgänge) · Qualitätskriterien: lehrplan-Skill,
  `ERLAEUTERUNGS-QUALITAET.md`

### Aufgabe 3: HWII_INFI.pdf — erledigt, Restklärung

Die Schuladaption ② liegt bereits korrekt unter `lehrplan/infi-hwii/HWII_INFI.pdf`
(duplikatfrei im Zweig-Ordner). **Restauftrag:** die zweite Kopie im Schwester-Repo
(`GRG-SWP/lehrplan/swp-hwii/HWII_INFI.pdf`) entfernen — Abstimmung mit Georg, danach dort
löschen (SWP-HANDOFF vermerkt das).

### Kontext aus GRG-SWP (gleiche Kohorte, gleiche Anlage 1.24)

- **Rechtsgrundlage identisch:** BGBl. II Nr. 262/2015 idF BGBl. II Nr. 235/2019, Anlage
  1.24; RIS-Recherche dort 2026-07-26 erledigt (aktuell, nicht obsolet) —
  `GRG-SWP/lehrplan/swp-hwii/RIS.md`; **Novellen-Check nicht doppelt fahren**, nur
  referenzieren. Konsolidierte Anlage 1.24: RIS-Dokument `NOR40217058`.
- **Erläuterungs-Ebene in SWP ist vollständig** (2026-09-14, Commit `bbd2f4b`).
- **Verbundprojekt** „eine App, zwei Noten" (SWP: Domäne/GUI/Repository-Vertrag; INFI:
  Prisma-Persistenz): `GRG-SWP/lehrplan/swp-hwii/3HWII/README.md`.
- **Vorwissen der Kohorte** (SWP, SJ 2025/26, KM3/KM4): HTML/CSS (Boxmodell, Flexbox,
  Grid), DOM/Events, Promises/async/await, fetch/HTTP, Hono+SQLite+REST (KM8-Vorgriff),
  Prisma-Berührung — `GRG-SWP/unterricht/HWII-SWP/jg2-einheiten.md` +
  `GRG-SWP/lehrplan/swp-hwii/kompetenzmodule/km3.md`/`km4.md`.

### Konventionen

- `AGENTS.md` (Root) gilt für Code: Deno/TypeScript, `deno test`, `deno fmt` — für die
  Lehrplan-Markdown-Arbeit relevant ist vor allem die Ausgabesprache **Deutsch mit
  korrekten Umlauten**.
- Issues sind deaktiviert → Fortschritt hier in diesem File vermerken (Checkboxen unten).

### Fortschritt

- [x] **lehrplan-Skill Aufgabe A ausgeführt** (2026-09-14): Konformitäts-Check — Layout
      konform; Hauptbefund **Erläuterungs-Ebene fehlte komplett** (0× `**Überblick:**`/
      `**Erläuterung:**`); Zusatzbefund **11 gebrochene Relativ-Links** aus dem Retrofit 2026-09-10
- [x] **Erläuterungs-Ebene in `lehrplan/infi-hwii/LEHRPLAN.md` (Jg I–V)** — 8 KM-Überblicke,
      46 Erläuterungen (25 Lernziel + 21 Lehrstoff), rein additiv; Kopf-Legende ergänzt
- [x] **Erläuterungs-Ebene in den Klassenextrakten** `2HWII` (2+10), `3HWII` (2+6),
      `4HWII` (2+7), `5HWII` (2+14); `infi-hwit` ist Skelett-README → nichts zu annotieren
- [x] **11 gebrochene Links repariert** (METADATA/LEHRPLAN/RIS/Klassenextrakte →
      `../METADATA.md`, `infi-hwii/RIS.md`, `unterricht/HWII-INFI/…`); Link-Check = 0 gebrochen
- [x] **`HWII_INFI.pdf`-Duplikat in GRG-SWP entfernt** (byte-identisch, `git rm`;
      SWP-`METADATA.md` „Duplikat bereinigt 2026-09-14")
- [x] **Rückmeldung an GRG-SWP** (dortiger HANDOFF Task 1 abgehakt)

> **Werkzeug:** Die Erläuterungs-Ebene wurde mit dem `lehrplan-annotator`-Subagent
> (`opencode-go/glm-5.3`, non-flash) erzeugt — vorab auf einer Kopiervorlage
> (`/tmp/opencode/annotator-test/`) getestet; `~/.config/opencode/agents`-Symlink neu
> angelegt. Verifikation je Datei: `git diff --numstat` = 0 gelöschte Zeilen, Umlaute
> UTF-8, keine kyrillischen Verwechsler.
