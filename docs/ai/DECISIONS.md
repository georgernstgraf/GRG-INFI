# Decisions

Active architectural and technical decisions still in force.
Superseded decisions are relocated to HISTORY.md.

## 2026-07-26: PMM-Stil für die Lehrplan-Doku (kompetenzmodule/ + Klassenordner)

- **Choice**: Pro unterrichtetem Jahrgang gibt es KM-Steckbriefe in `kompetenzmodule/` und einen
  groß geschriebenen Klassenordner im Root (z. B. `3HWII/`) mit `README.md` (Drehscheibe) +
  `semesterplan-{ws,ss}.md`. `docs/lehrplan/jgN-einheiten.md` nur noch für Gerüste (Jg IV/V)
  und historische Ist-Doku (Jg II).
- **Reason**: Spiegelung der bewährten Struktur aus GRG-SWP (PMM-Stil); trennt didaktische
  Steckbriefe von konkreter Klassenplanung.
- **Considered**: Weiterführen der `jgN-einheiten.md`-Monolithen für alle Jahrgänge.
- **Tradeoff**: Doku liegt an zwei Orten (Steckbrief vs. Semesterplan) — Links pflegen.

## 2026-07-26: Zeitmodell Jg III = 13 echte UE + 2 PLF-DS (2+1-Split)

- **Choice**: Georg 2 h/Woche (1 DS) + Kollege 1 h/Woche; 13 Stoff-UE + 2 PLF-DS pro Semester;
  PLF 1 nach UE 7, PLF 2 nach UE 13; 1 UE = 1 DS à 2 h; Bonus-UE optional bei Ausfallfreiheit.
- **Reason**: Deckt sich mit dem SWP-Modell → Verbund-Sequenz synchron planbar; Ausfälle
  (Feiertage/Krankheit) sind in den ~15 realen DS von 18 Schulwochen einkalkuliert.
- **Considered**: ~12 UE (altes jg3-Format); alle 3 h zu UE verschmelzen (~19 UE).
- **Tradeoff**: Die Kollegen-Stunde läuft inhaltlich versetzt — Absprache nötig (TBD).

## 2026-07-26: Kollegen-Soll = Nicht-SQL-Anteile von KM5/KM6 (Extraktionsvorschlag)

- **Choice**: Dem INFI-Kollegen (1 h/Woche) vorgeschlagen: Use-Case-/Masken-Methodik
  (Applikationsentwurf), Benutzerführung (CLI/TUI), Reportgenerierung, ggf. Import/Export.
- **Reason**: Georgs Vorgabe „alles, was nicht mit SQL und Datenbanken zu tun hat" — aus dem
  ①-Lehrstoff extrahiert; KM5/KM6 sind fast zur Gänze DB-Kern, daher nur diese Kandidaten.
- **Considered**: Kollege übernimmt Übungs-/Vertiefungsstunden parallel.
- **Tradeoff**: Vorschlag noch nicht mit Kollege abgestimmt → `3HWII/README.md` Offene Punkte.

## 2026-07-26: INFI↔SWP-Verbundabstimmung liegt bei Georg

- **Choice**: Der Verbund („eine App, zwei Noten") wird nicht extern koordiniert — Georg
  unterrichtet beide Seiten (SWP 2 h OOP/GUI + INFI 2 h DB). PM-Rahmung bleibt SWP-Kollege (PRE).
- **Reason**: Verkürzt Abstimmungswege; Sequenz-Sync erfolgt über die beiden 3HWII-Pläne.
- **Tradeoff**: PM-Rubrik des Verbundprojekts weiterhin mit SWP-Kollegen zu klären (TBD).

## 2026-07-26: LEHRPLAN.md an ① (NOR40217058) angeglichen

- **Choice**: `docs/lehrplan/LEHRPLAN.md` ist wieder getreuer Extrakt des offiziellen Textes:
  Normalformen→KM3, DDL→KM3, DCL→KM4, Jg V um Bereich Datenbanken (Web-/GUI-Applikationen)
  ergänzt, Absolventenprofil Datenbanken berichtigt, Stundentafel RIS = 2(2)/3(3)/2(2)/2(2)/6(4).
- **Reason**: Schichten-Vergleich ergab: Schul-PDF ② ≡ ①, aber die Repo-Redaktion ③ wich ab
  (mutmaßlich aus Anlage 1.28/TM übernommen). Abweichungstabelle: `docs/lehrplan/RIS.md` §6.
- **Considered**: ③-Redaktion belassen und nur dokumentieren — verworfen, weil LEHRPLAN.md
  per Eigendefinition der ①-Extrakt ist.
- **Tradeoff**: Die historische Abdeckungstabelle in `jg2-einheiten.md` referenziert die alte
  Redaktion (dort vermerkt, Ist-Doku bleibt unverändert).

## 2026-07-26: `jg3-einheiten.md` nach verlustfreier Migration gelöscht

- **Choice**: Inhalte verteilt auf `kompetenzmodule/km5.md`/`km6.md` (Steckbriefe),
  `3HWII/README.md` (Verbund-Doku, Kollegen-Soll, Offene Punkte) und die beiden Semesterpläne
  (24 UE → 13+13 UE mit Workshop-Puffer); danach Datei entfernt.
- **Reason**: PMM-Stil-Ablage (s. o.); doppelte Pflege vermeiden.
- **Tradeoff**: Externe Links auf die alte Datei (z. B. aus GRG-SWP-Doku) zeigen auf 3HWII/ um —
  in den neuen Dateien als Verweis gepflegt.

## 2026-09-07: Vollmigration auf Skill-Standard-Layout (`lehrplan/` im Root)

- **Choice**: Das gesamte Lehrplan-Werk liegt im Standard-Layout des `lehrplan`-Skills:
  `lehrplan/infi-lehrplan-text.md` (aus `docs/lehrplan/LEHRPLAN.md`), `lehrplan/METADATA.md`,
  `lehrplan/RIS.md`, `lehrplan/HWII_INFI.pdf`; Klassenordner `2HWII/`–`5HWII/` (je mit neuem
  `<KLASSE>.lehrplan.md`-Extrakt aus ①, erzeugt 2026-09-07) und `kompetenzmodule/` — alles
  unter `lehrplan/`. (Die Einheiten-Dokumente heißen unverändert `jgN-einheiten.md`.)
- **Reason**: Der `lehrplan`-Skill wurde verbindlich verschärft („migrieren, nicht dulden“):
  Standard-Layout = Zielzustand; Abweichungen (`docs/lehrplan/`, Root-Klassenordner) sind
  Legacy. Die dreischichtige Datei bleibt erlaubtes Dateiformat, Ablageort ist `lehrplan/`.
- **Considered**: Alte Struktur belassen (Abweichung war dokumentiert) — verworfen, weil
  der Skill sie als Befund mit Migrationspflicht behandelt.
- **Tradeoff**: Cross-Repo-Links aus GRG-SWP auf `GRG-INFI/3HWII/…` brechen — dort
  angepasst (SR 2026-09-07). Novellen-Check am 2026-09-07 live bestätigt (262/2015
  „zuletzt geändert durch“ 235/2019); Skill-Mapping-Tabelle um Zeile INFI→HWII ergänzt.

## 2026-09-14: Kohorten-Ordner konkretisiert, allgemeines Gerüst bleibt getrennt

- **Choice**: `lehrplan/hwii/` ist die **allgemeine Planung** (Gerüst) und wird für
  Kohorten-Abweichungen **nicht** angefasst. Die laufende Kohorte SJ 2026/27 erhält den
  eigenen Ordner `3ahwii/` mit Hub (`README.md`), Kohorten-Semesterplan
  (`semesterplan-ws.md`, Vollkopie des Gerüsts) und UE-Ordnern; Abweichungen (z. B. die
  Sondereinheit „Agentic Coding" vor UE 1) werden **nur hier** gepflegt.
- **Reason**: Trennung von allgemeiner, kohortenübergreifender Planung und dem tatsächlich
  gehaltenen Plan der Klasse; verhindert, dass Einzelklassen-Änderungen das Gerüst verändern.
  Spiegel des gleichnamigen SWP-ADR (`GRG-SWP/docs/ai/DECISIONS.md`).
- **Considered**: Abweichungen direkt im Gerüst `lehrplan/hwii/`; nur ein
  Delta-Dokument statt Vollkopie.
- **Tradeoff**: Zweite Plan-Datei pro Kohorte (Duplikat), bewusst als lebende Kohorten-Fassung.

## 2026-09-29: ORM = Prisma (vorerst); DB-Werkzeugkette → Node.js (+ SQLite/better-sqlite3)

- **Choice**: Wir bleiben **vorerst bei Prisma** (kein Wechsel zu Drizzle) und stellen die
  **DB-Werkzeugkette auf Node.js** um: Node LTS + `npm`, **Prisma 7 gezielt gepinnt**
  (`prisma@7`, `@prisma/client@7`, `@prisma/adapter-better-sqlite3@7`), SQLite über den
  `better-sqlite3`-Driver-Adapter. **Nur** die Prisma-/DB-Werkzeugkette läuft unter Node;
  der allgemeine Unterrichts-Code bleibt **Deno/TypeScript** (`AGENTS.md` unverändert).
- **Reason**: Prisma 7 verlangt zwingend einen nativen Driver Adapter. Unter Node ist
  `better-sqlite3` der Normalfall — unter Deno war genau das die Reibung der UE-1-Krise
  (2026-09-22: `npm:`-Specifier, `npm:prisma` → 8.0.0-RC, Adapter-Gefrickel). Der Wechsel
  löst die Reibung, ohne das didaktische Ziel (ORM-Kompetenz für den SWP-Verbund) aufzugeben.
- **Considered**: Drizzle (einmal „eher Drizzle"-geneigt, in der Rep-Stunde 29.09. verfolgt) —
  verworfen für den Moment; Prisma bleibt gesetzt (KM6/SWP-Verbund „eine App, zwei Noten").
- **Tradeoff**: Zwei Runtimes im Umfeld (Deno für Unterricht, Node+npm für Prisma-Tooling).
  Das Cohort-Material zur UE 29.09. trug noch die alte „ohne Node"-Prämisse; die
  **Prepared Lesson** `unterricht/KM5-01-nodejs-prisma/` ist das neue Original.
- **Folgen**: KM6-/Verbund-Passagen („Prisma vertieft", `Deno.serve`) sind beim Ausarbeiten
  auf Node+Prisma nachzuziehen; Prisma-Version immer **pinnen** (npm-`latest` = 8-RC).

## 2026-10-05: Prisma-Client = TypeScript-Generator (`prisma-client`); Deno bestätigt inkompatibel

- **Choice**: Immer der **TypeScript-Client** — `generator client { provider = "prisma-client" }`
  mit eigenem `output`, ausgeführt unter **Node + `tsx`**. Der alte `prisma-client-js` (CommonJS)
  wird nicht mehr verwendet.
- **Reason**: `prisma-client-js` erzeugt CommonJS und bricht unter ESM beim Named-Import
  (`import { PrismaClient } from "@prisma/client"` → „Named export not found"). Der
  `prisma-client`-Generator erzeugt echtes ESM/TypeScript. **Deno + Prisma 7 + SQLite ist
  inkompatibel** (empirisch bestätigt) — stützt die Node-Entscheidung vom 29.09.
- **Considered**: Deno als Runtime (SWP-Konvention `runtime = "deno"`, Prisma 6) — für
  Prisma 7 + SQLite nicht möglich; verworfen.
- **Folgen**: `Beispielprojekte/km6-01-prisma-werkzeuge`/`km6-02-prisma-query-api` sind die
  TypeScript-Client-Originale; `Beispielprojekte/km5-01-nodejs-prisma` wurde am 2026-10-05 ebenfalls
  auf den TypeScript-Client umgestellt (`prisma-client` + `tsx`, Issue #9).
- **Stolperstein (dokumentiert):** Prisma Studio v7 verlangt für SQLite die Doppel-Slash-URL
  `file://./dev.db` (die Konfig-URL `file:./dev.db` wird abgelehnt: „not supported for the file: protocol").

## 2026-10-05: Lauffähige Beispielprojekte außerhalb `unterricht/` (Skill `create-lesson` verschärft)

- **Choice**: `unterricht/` enthält **ausschließlich Unterrichtsmaterial** (HTML, Markdown,
  zentrale `assets/`) und **keinen lauffähigen Projektcode**. Fertige Beispielprojekte liegen in
  der **Beispielprojekt-Ablage des Repos** — hier im Root `Beispielprojekte/`. Der repo-übergreifende
  Skill `create-lesson` (`opencode-helpers`) wurde entsprechend verschärft: keine `praxis/`-Scaffolds
  unter `unterricht/`; die Ablage wird per Repo-Konvention ermittelt (Erkennungsliste, z. B.
  `Sample_Projects/` in GRG-SWP; Default `Beispielprojekte/`). Code-Beispiele im `lesson.html`
  bleiben als Lehrmaterial ausdrücklich erlaubt.
- **Reason**: Trennung von Lehrmaterial und lauffähigem Code; `unterricht/` bleibt frei von
  Build-/Abhängigkeits-Ballast (`node_modules`, `package-lock`). Das kanonische PMM-Vorbild hatte
  nie Code in den Lessons — die `praxis/`-Ordner waren eine Übererfüllung.
- **Considered**: `praxis/` pro Lesson belassen (bisherige Praxis); Default-Name `Sample_Projects/`
  (einheitlich mit SWP, englisch) — verworfen zugunsten Deutsch `Beispielprojekte/`, da die
  Erkennung abweichend benannte Ordner ohnehin findet.
- **Tradeoff**: Beispielprojekt und Lesson liegen getrennt (relativer Verweis
  `../../Beispielprojekte/<slug>/`); zwei Orte, aber klare Zuständigkeit. Übernahme in die Kohorte
  bleibt manuell durch die Lehrperson.

## 2026-10-05: Layout-Migration — `unterricht/` nur Lektionen, Zweig-Ordner ohne Fach-Präfix, `GLOSSAR.md` ins Root

- **Choice**: Nachgeschärfte Skill-Konventionen (`create-lesson` + `lehrplan`, opencode-helpers#103)
  aufs Repo angewandt (GRG-INFI#11):
  - `unterricht/` enthält **ausschließlich** Prepared Lessons (`<PREFIX>-<NN>-<slug>/`) — keine
    weiteren Ordner;
  - der Zweig-Ordner heißt **ohne Fach-Präfix**: `lehrplan/hwii/` (statt `infi-hwii/`), `lehrplan/hwit/`
    — das Fach steckt bereits im Repo-Namen;
  - `kompetenzmodule/` liegt auf der **Fach-Ebene** `lehrplan/kompetenzmodule/`;
  - die Planungsdateien (`jgN-einheiten.md`, `jgN-semesterplan-{ws,ss}.md`) liegen im Zweig-Ordner
    `lehrplan/hwii/` (vormals `unterricht/HWII-INFI/`);
  - die repo-weite Referenz (Glossar) ist `GLOSSAR.md` im **Repo-Root**, nicht unter `unterricht/`.
- **Reason**: `unterricht/` ist der Lernplattform-Materialordner (nur Lessons, kein Hilfsbaum); der
  Zweig (HWII/HWIT) ist die Ebene, auf der Lehrplan **und** Semesterplan abweichen können; die
  Namens-Wiederholung des Faches (`infi-` im Repo `GRG-INFI`) entfällt.
- **Considered**: Planungsdateien weiterhin unter `unterricht/` belassen; `kompetenzmodule/` im
  Zweig-Ordner belassen — beides verworfen zugunsten des Skill-Ziel-Layouts.
- **Folgen**: Alle Pfad-Referenzen in `AGENTS.md`, `README.md`, `docs/ai/*`, `lehrplan/**`,
  `3ahwii/**`, `unterricht/**` nachgezogen; Link-Check 0 gebrochen. Die generische `lehrplan`-Regel
  macht andere Fach-Repos (z. B. GRG-SWP mit `lehrplan/swp-hwii/`) zu Befunden — Folge-Migration
  **pro Repo**, nicht Teil dieses ADR.
