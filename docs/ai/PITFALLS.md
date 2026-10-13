# Pitfalls

Things that do not work, subtle bugs, and non-obvious constraints.
Read this file carefully before making changes in affected areas.

- **RIS-HTML ist eine einzige Riesenzeile:** `grep -n` auf RIS-Exporte (z. B. NOR40217058) ist
  nutzlos (alles in Zeile 1). Mit Python slicen (`t.find(...)` + Fenster), Artefakte wie
  `–Strichaufzählung` / `:römisch eins.` sind RIS-Markup, kein Inhalt.
- **Anlage 1.28 (TM) hat ein gleichnamiges Fach** „Informatik und Informationssysteme" mit
  *anderem* Lehrstoff und anderer zeitlicher Verortung — beim Exzerpieren streng auf Anlage
  **1.24** (Betriebsinformatik) achten. Genau daraus entstanden die ③-Abweichungen, die am
  2026-07-26 korrigiert wurden (siehe `lehrplan/hwii/RIS.md` §6).
- **Stundentafel-Parsing:** die Ziffer direkt hinter dem Fachnamen ist die **Fußnote** (z. B.
  „…Informationssysteme**4**2(2)3(3)…"), nicht Teil der Stundenzahl. RIS-Zeile INFI =
  2(2)/3(3)/2(2)/2(2)/6(4), Summe 15 — schulautonom 2/2/3/2/4 = 13.
- **SQLite kann keine Benutzer/GRANT:** DCL/Benutzerverwaltung (KM5) ist in SQLite nur
  konzeptionell lehrbar → Demo mit PostgreSQL via Docker einplanen (Fallback: Konzeptlehre).
- **Prisma kennt keine Vererbung:** O/R-Impedance-Mismatch im SWP-Verbund via **TPH +
  Discriminator + `toDomain`-Mapper** lösen (Code: `lehrplan/hwii/3HWII/README.md`); TPH verletzt bewusst
  3NF — didaktisch nutzen, nicht „wegnormalisieren".
- **KM5/KM6-Lehrstoff ist fast reiner DB-Kern:** ein Split „Nicht-SQL-Anteile" (Kollegen-Stunde)
  lässt sich nur aus Applikationsentwurf-Methodik, Benutzerführung, Reportgenerierung und
  Import/Export gewinnen — nicht aus den Abfrage-Themen.
- **Inline-Bootstrap in jeder `lesson.html` muss korrekt geschlossen sein:** die äußere IIFE endet
  auf `document.head.appendChild(e)})()})();</script>`. Fehlt das äußere `})()`, wirft das
  `<script>` einen `SyntaxError: Unexpected end of input`, `loader.js` lädt nie und die ganze Seite
  bleibt ohne Assets (3 KM5-Lessons betroffen, behoben in #16).
- Vom `assets/loader.js` injizierte Skripte (`quiz.js`, `theme.js`) laufen **async** —
  `DOMContentLoaded` ist dann oft vorbei; Init-Code muss bei
  `document.readyState !== "loading"` sofort starten (Muster wie in `theme.js`), sonst bleiben
  Quiz/Toggle auf GitHub Pages ohne Funktion (#16).
- **Drizzle + `node:sqlite` existiert nur in der 1.0-RC-Linie:** die stabile
  `drizzle-orm` 0.45.x exportiert `drizzle-orm/node-sqlite` **nicht**
  (`ERR_PACKAGE_PATH_NOT_EXPORTED`). Doku-Standard-Pfad: `npm:drizzle-orm@1.0.0-rc.4`
  **gepinnt** eintragen (`Beispielprojekte/km5-05-drizzle-orm/deno.json`).
- **`drizzle-kit` läuft nicht unter Deno:** der Kit-CLI (`push`/`generate`) bricht mit
  `Cannot find module 'drizzle-orm/_relations'` (CJS-`require` außerhalb der Exports-Map).
  Für Deno-Projekte: Tabellen-Anlage per DDL in `db.ts` (muster: `CREATE TABLE IF NOT
  EXISTS`, synchron mit `schema.ts` halten); Kit/Migrationen = KM6-Stoff (dort Node-Zwang
  wie bei Prisma akzeptabel).
- **`drizzle(client)` ohne `{ }` ist der Pfad-Overload:** bei der node-sqlite-Variante
  baut der Positional-Aufruf intern eine **eigene** Verbindung — DDL auf dem eigenen
  `DatabaseSync` ist unsichtbar („no such table"). Immer **`drizzle({ client })`**.
- **Drizzle-Aggregationen liefern Strings:** `avg()`/`sum()` über `node:sqlite` geben
  z. B. `"200"` (String) zurück, nicht `number` — Ergebnis prüfen statt dem
  TypeScript-Typ vertrauen (KM6-relevant für Reports).
- **`sql`-Template inliniert Literale:** in `` sql`... > 180` `` steckt `180` als Text
  im SQL; parametrisiert werden nur Operator-Argumente (`eq`, `gt`, `limit`-Werte).
  Für parametrisierte Vergleiche Operatoren (`gt`) statt `sql`-Template verwenden.
