# HANDOFF

No pending tasks from the 2026-09-07 cycle („Lehrplan-Werk SJ 2026/27 für INFI" — erfüllt,
siehe `HISTORY.md`; Ergebnis-Zustand: `STATE.md`, Abschluss-Report: GRG-INFI#1).
**2026-09-29:** Prepared Lesson `unterricht/KM5-01-nodejs-prisma/` angelegt (Node.js + Prisma 7,
SQLite) — Original für die UE „Rep & ORM-Einstieg"; ORM-Entscheid „Prisma bleibt, DB-Toolchain →
Node" als ADR dokumentiert (DECISIONS.md). Kohorten-Kopie `3ahwii/2026-09-29_rep-ohne-node/`
bleibt (noch) die alte Fassung → bei Übernahme durch die Node-Variante ersetzen.
Organisatorische Follow-ups (Kollegen-Absprache, PLF-Termine, PG-Docker-Demo,
Domänenwahl): `lehrplan/infi-hwii/3HWII/README.md` → Offene Punkte bzw. `STATE.md` → Pending.

**2026-10-05:** Lesson-Infrastruktur für GRG-INFI aufgebaut (repo-weites `assets/` aus PMM-Vorbild
+ `serve.sh`), **GitHub Pages** aktiviert (Lektions-Navigator `index.html`, Pages-Link oben in
`README.md`). Zwei **KM6-Prepared-Lessons** (SS 2027) angelegt: `unterricht/KM6-01-prisma-werkzeuge/`
(CLI/Migrations/Studio) und `unterricht/KM6-02-prisma-query-api/` (CRUD/Query API); Issue **#6** geschlossen.
**Kernbefunde:** Prisma 7 + SQLite ist mit **Deno inkompatibel** → **Node + TypeScript-Client**
(`prisma-client`) + `tsx`; Studio braucht für SQLite `file://./dev.db`. KM6-Lessons sind fürs SS 2027
vorbereitet (das WS bleibt KM5).

**2026-10-05 (2) — Beispielprojekte ausgelagert:** `unterricht/` ist jetzt **codefrei**; die drei
`praxis/`-Scaffolds liegen unter Root-`Beispielprojekte/` (KM5-01/KM6-01/KM6-02). Skill
`create-lesson` repo-übergreifend verschärft (opencode-helpers#101); Migration GRG-INFI#8, Tests
grün. **2026-10-05 (3):** KM5-01 auf **TypeScript-Client** (`prisma-client` + `tsx`) angeglichen
(Issue #9) — alle drei Beispielprojekte nutzen jetzt denselben Client. Künftige Lessons legen
**keinen** lauffähigen Code mehr unter `unterricht/` an (siehe `docs/ai/CONVENTIONS.md`).

**2026-10-05 (5) — GitHub Pages auf `unterricht/` begrenzt (Issue #10):** `pages.yml`
veröffentlicht nur noch `index.html`, `assets/` und `unterricht/`; die Kohorten-Ordner
`3ahwii/` sind **nicht** mehr im Deploy (werden manuell gepflegt). Der Lektions-Navigator
`index.html` verweist nur noch auf die Prepared Lessons; `KM5-01` nutzt jetzt die repo-weiten
`assets/` (`lesson.css`, `quiz.js`) statt `3ahwii/assets/`. Deploy grün, `/3ahwii/…` → **404**.

**2026-10-05 (4) — Issue #5 geschlossen (3AHWII X):** Beide UE-Materialien der Kohorte sind
vollständig und verifiziert — `3ahwii/2026-09-29_rep-ohne-node/` (Deno + `node:sqlite`,
dev.to-Leseauftrag; `deno task test` 3/3 mit geladenem Seed) und
`3ahwii/2026-10-06_normalisierung-3nf/` (Teach-HTML, 11 Quizze, `seed-3nf.sql`, `demo.ts`;
2/2 grün). Die **Kohorten-Ordner `3ahwii/`** werden manuell gepflegt und sind **nicht** Teil
des GitHub-Pages-Angebots (Pages liefert nur `unterricht/`).

---

## Tasks ab 2026-09-14 (Agentic Coding / Kohorten-Ordner) — **offen**

> **Erstellt:** 2026-09-14 (aus GRG-SWP heraus) · **Tracking:** Issues
> [#2](https://github.com/georgernstgraf/GRG-INFI/issues/2) (Move + Kohorten-Ordner) und
> [#3](https://github.com/georgernstgraf/GRG-INFI/issues/3) (lehrplan-Skill).

1. [ ] **Sondereinheit 2026-09-15 halten** (beide Gruppen, INFI-Unterricht) —
   `3ahwii/2026-09-15_agentic-coding-einstieg/README.md`; **Schulübung**, HÜ-Rest **nur Gruppe X**
   (opencode installiert, Provider verbunden, `AGENTS.md` committet). Optional:
   `3ahwii/windows-debloat.md` (privat, von opencode gesteuert).
2. [x] **lehrplan-Skill in INFI anwenden / Novellen-Check** — Issue **#3** (großer Chunk).
   **Erledigt 2026-09-29:** Aufgabe A (Konformitäts-Check) + Erläuterungs-Ebene (2026-09-14)
   + Novellen-Check live (NOR-Kopf: „zuletzt geändert durch 235/2019", ident mit 2026-09-07).
   Belegzeile in `lehrplan/METADATA.md` aktualisiert; keine Re-Extraktion nötig.

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
