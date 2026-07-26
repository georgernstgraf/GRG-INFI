# KM6 — Datenbankanwendung: Prisma, REST-Schnittstellen, Verbundprojekt

**Klasse/Semester:** 3HWII, 6. Semester (SS 2027)
**Wochenstunden (schulautonom):** 3 — davon **Georg 2 h** (1 DS/Woche) + **Kollege 1 h**
**Zeitmodell:** 13 echte UE + 2 PLF-DS
**Bereich:** Datenbanken (**Georg**: DB-Programme/Schnittstellen · **Kollege**: Nicht-SQL-Anteile,
Vorschlag unten)
**Konkreter Semesterplan:** `3HWII/semesterplan-ss.md` · **Verbund mit SWP:** `3HWII/README.md`

## Worum geht es?

KM6 bringt die Datenbank **in eine Applikation**. Nach dem SQL-n KM5 geht es jetzt um die
Frage: *„Wie wird aus einem Schema ein benutzbares Programm?"*

1. **Vom Modell zum Programm:** Applikationsentwurf (von der Problemstellung über ER und
   Schema zu Use Cases) und die Umsetzung mit **Prisma** (Schema-Design, Migrations als
   Versionskontrolle, Client-API in der Tiefe).
2. **Sichere und genormte Zugriffe:** Prepared Statements gegen SQL-Injection (der Kontrast
   „Prisma sicher by default vs. Raw SQL") und **REST/JSON als genormte DB-Schnittstelle**
   (Deno-native, ohne Framework-Ballast).
3. **Das Verbundprojekt mit SWP:** INFI liefert die Prisma-Implementierung des von SWP
   definierten Repository-Interfaces — *eine App, zwei Noten*. Hier wird der
   O/R-Impedance-Mismatch (Prisma kennt keine Vererbung → TPH + Mapper) greifbar;
   Details und Code: `3HWII/README.md`.

Das Semester mündet in das gemeinsame Abschlussprojekt (letzte ~3 UE + Präsentation);
der individuelle Verbund-Beitrag dient als **PLF-Äquivalent** (PLF 2).

## Wofür braucht man das in der Praxis?

- **ORMs sind der Industrie-Standard:** Prisma (oder verwandte ORMs) sitzt in fast jeder
  modernen TS-Anwendung zwischen Code und Datenbank — wer es in der Tiefe kann, versteht,
  was das ORM „versteckt" (und wann Raw SQL besser ist).
- **SQL-Injection ist die häufigste realen Sicherheitslücke:** Prepared Statements sind
  keine Kür, sondern Pflicht — die Bobby-Tables-Demo bleibt hängen.
- **REST/JSON ist *die* genormte DB-Schnittstelle:** jede App, jedes Frontend, jedes
  Drittsystem spricht so mit Datenbanken — genau der Lehrplan-Punkt „genormte DB-Schnittstellen".
- **Migrations sind Schema-Git:** Versionierung, Teamfähigkeit, reproduzierbare Builds —
  das Werkzeug, das Schulprojekte von produktiven Systemen trennt.
- **Optimierung an realen Use Cases:** Index-Audit, Denormalisierung bewusst einsetzen —
  „brauchbar" heißt use-case-gerecht, nicht „maximal normalisiert".

## Inhalte

### Wissen (Fakten & Begriffe)
- Applikationsentwurf: von Problemstellung → ER → Relationen → Schema → Use Cases;
  Eingabemasken/Ausgabeformate pro Use Case
- Prisma: `@relation`, `onDelete`/`onUpdate`, 1:1/1:n/n:m (implizit/explizit),
  `prisma migrate`, Reset & Shadow-DB
- Prisma Client: `findUnique`/`update`/`delete`/`upsert`, `include` vs. `select`,
  `where` mit AND/OR, `count`/`groupBy`/`aggregate`, `$transaction`
- Prepared Statements (`node:sqlite`, `db.prepare`), Parametrisierung, SQL-Injection
- REST: Routen, Methoden (GET/POST/PUT/DELETE), Status-Codes (200/201/400/404/500),
  JSON, Validierung, Fehlerbehandlung
- Reportgenerierung: CSV/Markdown/JSON-Export, Reporting-Queries (Top-N, Gruppenvergleiche)
- Optimierung: Index-Audit, Denormalisierung, Composite-Index, TPH vs. TPT (Verbund-Knackpunkt)

### Verstehen (Zusammenhänge)
- Warum ein ORM SQL nicht „ersetzt", sondern erzeugt — und warum man das erzeugte SQL lesen können muss
- Warum parametrisierte Queries Injection strukturell verhindern (Daten ≠ Code)
- Warum eine REST-Ressource nicht 1:1 eine Tabelle sein muss (Schnittstelle ≠ Schema)
- Warum Prisma keine Vererbung kennt und das Repository die Polymorphie „hineinpfriemelt"
  (TPH — Verletzung der 3NF aus KM5, bewusst und begründbar: `3HWII/README.md`)
- Warum „brauchbar" am Use Case gemessen wird, nicht an der Normalform

### Können (mit Deno/Prisma umsetzen)
- Ein Prisma-Schema mit Relationen und Indizes entwerfen und über mehrere Migrations entwickeln
- CRUD-CLI mit Prisma Client inkl. einer atomaren `$transaction`
- Ein verwundbares Raw-SQL-Skript analysieren und mit Prepared Statements absichern
- Eine vollständige CRUD-REST-API (`Deno.serve`, 7 Endpunkte, Status-Codes, Validierung)
- Reports als CSV/Markdown exportieren (`Deno.writeTextFile`)
- Ein Schema per Index-Audit reviewen und eine begründete Optimierungs-Migration schreiben
- Das SWP-Repository-Interface mit Prisma implementieren (TPH + `toDomain`-Mapper)

## Kollegen-Soll (Vorschlag — Absprache TBD)

Lehrstoffpunkte von KM6 **ohne SQL/DB-Kern**, Kandidaten für die Kollegen-Stunde
(Extraktionsvorschlag, siehe `3HWII/README.md` → Offene Punkte):

- **Anwendungsfälle/Applikationsentwurf (Methodik):** Use Cases identifizieren,
  Eingabemasken und Ausgabeformate festlegen (konzeptionell, nicht Schema)
- **Benutzerführung:** CLI/TUI-Menüs, Validierung, fehlerfreundliche Meldungen,
  Bestätigungsdialoge bei zerstörerischen Aktionen
- **Reportgenerierung:** Ausgabeformate und Aufbereitung (CSV/Markdown/JSON), Dashboard-Report

## Ressourcen & Stack

| Strang | Werkzeug/Anker |
|---|---|
| Runtime | **Deno** / TypeScript (wie Jg II + KM5) |
| ORM | **Prisma** mit SQLite (Vertiefung der Jg-II-Grundlagen E12–14) |
| Raw SQL | `node:sqlite` (`db.prepare`) — Kontrast und Sicherheitslehre |
| REST | `Deno.serve` (framework-frei; Hono bereits aus Jg II bekannt, optional) |
| Sicherheit | `Unterlagen/sql_injection/` (Bobby-Tables-Demo) |
| Verbund | `3HWII/README.md` — Repository-Brücke, TPH/O-R-Mapping, Domänenwahl |
| Schwester-Repo | [`GRG-SWP/3HWII/`](https://github.com/georgernstgraf/GRG-SWP/blob/main/3HWII/README.md) — SWP-Seite des Verbunds |

**Mitgenommen aus KM5:** CTEs/Views, Transaktionen/ACID, EXPLAIN/Indizes, Normalformen.
**Mitnahme nach Jg IV (ERP):** Datenmodellierung, Schnittstellen- und Transaktionsdenken
bleiben relevant — Werkzeug wechselt (SAP-Umfeld), Konzepte bleiben; Domänenwechsel am
Semesterende explizit thematisieren.

**Schwachstellen-Watchlist (aus Jg II + KM5):** Prisma wurde in Jg II nur „berührt"
(Schema, einfache Queries) — Migrations-Disziplin und Relationsladen (`include`) sind neu;
Git-Disziplin (kleine Commits, sprechende Messages) wird projektbedingt in UE 11–13 kritisch.
