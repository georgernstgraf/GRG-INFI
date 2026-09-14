# HANDOFF

No pending tasks from the 2026-09-07 cycle („Lehrplan-Werk SJ 2026/27 für INFI" — erfüllt,
siehe `HISTORY.md`; Ergebnis-Zustand: `STATE.md`, Abschluss-Report: GRG-INFI#1).
**2026-09-07:** Vollmigration auf Skill-Standard-Layout `lehrplan/` erledigt
(Klassen-Extrakte `<KLASSE>.lehrplan.md` neu, Links repariert, Skill verschärft).
Organisatorische Follow-ups (Kollegen-Absprache, PLF-Termine, PG-Docker-Demo,
Domänenwahl): `lehrplan/infi-hwii/3HWII/README.md` → Offene Punkte bzw. `STATE.md` → Pending.

---

## Neue offene Tasks (ab 2026-09-14, aus GRG-SWP)

> **Erstellt:** 2026-09-14 (aus GRG-SWP heraus, Spiegel-Session-Auftrag gemäß
> `GRG-SWP/docs/ai/HANDOFF.md` Task 1) · **Tracking:** dieses File (Issues deaktiviert)

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

- [ ] lehrplan-Skill Aufgabe A ausgeführt (Befundbericht inkl. Erläuterungs-Ebene-Lücke)
- [ ] Erläuterungs-Ebene in `lehrplan/infi-hwii/LEHRPLAN.md` (Jg I–V)
- [ ] Erläuterungs-Ebene in den Klassenextrakten (`2HWII`–`5HWII`, `infi-hwit` analog prüfen)
- [ ] `HWII_INFI.pdf`-Duplikat in GRG-SWP entfernt (nach Georg-Abstimmung)
- [ ] Rückmeldung an GRG-SWP (HANDOFF dort aktualisieren)
