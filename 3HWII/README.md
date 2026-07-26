# 3HWII — Klassen-Drehscheibe INFI (SJ 2026/27)

> Kohorte: **2AHWII (SJ 2025/26) → 3AHWII (SJ 2026/27)** · Fach INFI, Jg III (KM5 + KM6).
> Schwester-Doku (SWP-Seite desselben Jahrgangs):
> [`GRG-SWP/3HWII/`](https://github.com/georgernstgraf/GRG-SWP/blob/main/3HWII/README.md).

## Rahmen

| Punkt | Wert |
|---|---|
| **Wochenstunden INFI (Jg III)** | 3 (schulautonom; offiziell 2(2) — `docs/lehrplan/RIS.md` §4) = **2 h Georg** (SQL/DB-Kern) + **1 h Kollege** (Nicht-SQL-Anteile, Vorschlag unten) |
| **Zeitmodell (Georg)** | 1 DS/Woche → **13 echte UE + 2 PLF-DS** pro Semester |
| **Beurteilung** | PLF / Hausübungen / Mitarbeit je 1/3 (Details: Root-`README.md`) |
| **Stack** | SQLite (`sqlite3`, `node:sqlite`) · Deno/TypeScript · Prisma · `Deno.serve` (REST) · PostgreSQL via Docker (DCL-Demo) |
| **KM-Steckbriefe** | [`kompetenzmodule/km5.md`](../kompetenzmodule/km5.md) · [`kompetenzmodule/km6.md`](../kompetenzmodule/km6.md) |
| **Semesterpläne** | [`semesterplan-ws.md`](semesterplan-ws.md) (KM5) · [`semesterplan-ss.md`](semesterplan-ss.md) (KM6) |
| **Vorwissen** | [`docs/lehrplan/jg2-einheiten.md`](../docs/lehrplan/jg2-einheiten.md) — CRUD, JOIN/Self-JOIN, GROUP BY/HAVING, DDL/Constraints, N:M/Zwischentabelle, ER (bigER), Prisma-Grundlagen. **Lücke:** Normalformen nur gestreift → UE 2 (WS). |

---

## 3HWII-Verbund mit SWP (eine App – zwei Noten)

> **Querverweis:** Dieselbe Kohorte hat parallel **SWP** (Jg III = KM5+KM6, OOP + GUI; Georg
> 2 h, Kollege 2 h PRE). SWP-Plan:
> [`GRG-SWP/3HWII/`](https://github.com/georgernstgraf/GRG-SWP/blob/main/3HWII/README.md).
> **Die INFI↔SWP-Abstimmung macht Georg selbst** (er unterrichtet beide Seiten); die
> PM-Rahmung des Verbundprojekts bleibt beim SWP-Kollegen (PRE).

Beide Fächer laufen im **selben Deno/TypeScript/Prisma/SQLite-Stack** bei **derselben Kohorte**.
Sie werden als **ein** Spiralcurriculum mit **gemeinsamem Abschlussprojekt** geführt: *eine* App,
in beiden Fächern mit unterschiedlicher Rubrik benotet.

### Schichten-Aufteilung (wer lehrt was)

| Schicht | Fach / KM | Inhalt |
|---|---|---|
| Domäne (pure OOP) | **SWP KM5** | TS-Klassen, Vererbung, Polymorphismus, Interfaces, Generics — **DB-frei**, testgetrieben |
| Präsentation + Architektur | **SWP KM6** | Deno-Desktop-GUI, Bindings, Events, MVC |
| Projektmanagement | **SWP PRE (SWP-Kollege)** | PM-Grundlagen, Rollen, Planung, PM-Begleitung des Teamprojekts |
| Persistenz & Abfragen | **INFI KM5 (Georg)** | komplexe SQL, Normalformen, CTEs, Views, Transaktionen, DDL/Indizes |
| Anbindung | **INFI KM6 (Georg)** | Prisma vertieft, REST-API, Prepared Statements, DB-Schnittstellen |
| Nicht-SQL-Anteile | **INFI (Kollege, Vorschlag TBD)** | Use-Case-/Masken-Methodik, Benutzerführung (CLI/TUI), Reportgenerierung, Datenbetrieb (Import/Export) |

### Brücke = Repository (gemeinsames Artefakt)

SWP definiert das `interface MediumRepository { finde(id): Promise<Medium>; … }` (Vertrag, OOP,
testgetrieben). **INFI implementiert es mit Prisma.** Eine Datei, zwei Fächer, zwei Noten-Rubriken:

- **INFI-Note:** Schema-Qualität, komplexe Abfragen (CTEs/Views), Datenanbindung (Prisma/REST),
  EXPLAIN/Optimierung.
- **SWP-Note:** OOP-Design (Vererbung/Schnittstellen sauber?), Schichtentrennung (MVC),
  GUI/Events, (PM: Issues/Commits/Rollen — Rubrik mit SWP-Kollege abstimmen).

### O/R-Mapping: Polymorphismus über Prisma (zentraler Knackpunkt)

Prisma kennt **keine Vererbung**. Der Object-Relational-Impedance-Mismatch ist *der* pädagogische
Kernpunkt — er wird am Repository greifbar. **Empfehlung: TPH (Single-Table Inheritance) + Mapper.**
Prisma/INFI-Seite bleibt flach (ein Modell `Medium` mit Discriminator `type` + nullable
Subtyp-Spalten + CHECK); die echte Hierarchie lebt im OOP-Layer (SWP). Das Repository „pfriemelt"
die Polymorphismus beim Lesen/Schreiben hinein:

```prisma
// INFI-Seite: flach, bewusst „dumm"
model Medium {
  id        Int     @id @default(autoincrement())
  type      String            // "BUCH" | "FILM" | "SPIEL" – Discriminator
  titel     String
  isbn      String?           // nur BUCH
  dauerMin  Int?              // nur FILM
  // … CHECK-Constraints sichern pro Typ die richtigen Felder
}
```

```ts
// SWP-Seite: echte Hierarchie, DB-frei, testgetrieben
abstract class Medium { abstract berechneGebuehr(verspaetetTage: number): Geld; }
class Buch extends Medium { berechneGebuehr(t) { return Geld.euro(t * 0.10); } }
class Film extends Medium { berechneGebuehr(t) { return Geld.euro(t * 0.50); } } // teurer

class PrismaMediumRepository implements MediumRepository {  // INFI implementiert SWP-Interface
  async finde(id: number): Promise<Medium> {
    const r = await this.prisma.medium.findUnique({ where: { id } });
    return toDomain(r);   // <- hier wird Polymorphismus „hineingepfriemelt"
  }
}
function toDomain(r: MediumRow): Medium {
  switch (r.type) {
    case "BUCH": return new Buch(r.titel, r.isbn);
    case "FILM": return new Film(r.titel, r.dauerMin);
  }
}
```

**Diskussion wert (INFI↔SWP-Spannung):** INFI KM5 lehrt **Normalisierung** → würde TPT (Tabellen
pro Subtyp) bevorzugen (keine Null-Spalten). SWP/Prisma will's einfach → TPH. Frage an die Klasse:
*„Warum verletzt der OOP-Layer hier bewusst die 3NF?"* → weil das Repository die Integrität
übernimmt, nicht die Tabelle. (TPT als Alternative kurz zeigen, nicht umsetzen.)

### Sequenz-Abstimmung

- **5. Sem (parallel, weitgehend unabhängig):** SWP OOP-Grundlagen (DB-frei); INFI komplexe
  Abfragen/Normalisierung auf bekannter Beispiel-DB (Musik-Streaming aus Jg II). Ab ~Dez:
  gemeinsame Beispieldomäne (SWP UE 12 modelliert sie, INFI UE 13 greift sie im Mini-Projekt auf).
- **6. Sem (Konvergenz):** SWP baut ab UE 5 die Repository-Brücke und die Desktop-GUI;
  INFI liefert Prisma + REST (UE 1–7). **UE 9–10:** INFI implementiert das Repository
  (TPH-Schema + `PrismaMediumRepository`), SWP integriert. **UE 11–13:** gemeinsames
  Verbundprojekt (eine App, zwei Noten), Domänenwahl zu Projektstart mit der Klasse.

### Domäne — 5 Vorschläge (Schüler co-decided)

Die Domäne wird bewusst mit **Hierarchie + Zustandsautomat + reichen Abfragen** gewählt, weil
dort die O/R-Pfriemelei am lehrreichsten ist:

| # | Domäne | Vererbung (Beispiel) | State / Events |
|---|--------|----------------------|----------------|
| 1 | **Bibliothek/Mediathek** | `Medium`→`Buch`/`Film`/`Spiel` | Ausleihe: offen/überfällig/zurück |
| 2 | **Online-Shop** | `Produkt`→`Physisch`/`Digital`/`Abo` | Bestellung: Warenkorb→bezahlt→versendet→storniert |
| 3 | **Musik-Streaming** | `Playable`→`Track`/`Podcast` | Wiedergabe: spielt/pausiert/beendet |
| 4 | **Schulverwaltung/Noten** | `Person`→`SchülerIn`/`LehrerIn` | Note: offen/eingetragen/berufen |
| 5 | **Tierpension/Tierheim** | `Tier`→`Hund`/`Katze`/`Vogel` | Aufenthalt: angemeldet/anwesend/abgemeldet |

Die Schüler wählen mit (Abstimmung zu Verbundprojekt-Start im SS); die gewählte Domäne gilt in
**beiden** Fächern.

---

## Kollegen-Soll (1 h/Woche) — Extraktionsvorschlag, Absprache TBD

Auftrag: Der INFI-Kollege übernimmt, was **nicht SQL/Datenbank-Kern** ist. Extraktion aus dem
Lehrstoff KM5/KM6 (①, `docs/lehrplan/LEHRPLAN.md`):

| Lehrstoffpunkt | KM | Inhalt (Vorschlag Kollege) |
|---|---|---|
| Anwendungsfälle (Applikationsentwurf) | KM6 | Use Cases identifizieren, Eingabemasken/Ausgabeformate festlegen — Methodik, nicht Schema |
| Benutzerführung | KM6 | CLI/TUI-Menüs, Validierung, fehlerfreundliche Meldungen, Bestätigungen |
| Reportgenerierung | KM6 | Ausgabeformate (CSV/Markdown/JSON), Aufbereitung, Dashboard-Report |
| Datenimport/-export, Archivierung | KM5 | Betriebssicht: Formate, Backup-Strategien (Grenzfall — kann auch bei Georg bleiben) |

**Bei Georg verbleibt:** der gesamte Abfrage-/Schema-Kern (KM5: Unterabfragen, Normalformen,
CTEs, Views, Transaktionen, DDL, Indizes/Optimierung, DCL/Benutzerverwaltung; KM6: Prisma,
DB-Programme, REST-Schnittstellen, Repository-Brücke, Optimierung).

## Offene Punkte (TBD)

1. **Kollegen-Thema final abstimmen:** Vorschlag oben mit dem INFI-Kollegen besprechen;
   Verteilung (wöchentlich parallel oder geblockt) klären — vor WS-Start.
2. **PLF-Termine:** 2 PLFs pro Semester (R1 nach UE 7, R2 nach UE 13); konkrete Daten nach
   Schulkalender eintragen.
3. **PM-Rubrik SWP-Kollege:** PM-Rahmung des Verbundprojekts (Rollen, Issues, PM-Dokumente)
   — Abstimmung läuft über die SWP-Seite (`GRG-SWP/3HWII/README.md` → Offene Punkte).
4. **PostgreSQL-Docker-Demo** (WS UE 11): Image/Compose-Setup vor Semesterstart testen;
   Fallback: Konzeptlehre ohne Demo.
5. **Musik-Streaming-DB weiterführen:** aus Jg II (E11) als Dauerbeispiel des WS —
   Seed-Stand prüfen und versionieren.
6. **Domänenwahl:** Abstimmung mit der Klasse zu Verbundprojekt-Start (SS, ~UE 9).
