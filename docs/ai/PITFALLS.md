# Pitfalls

Things that do not work, subtle bugs, and non-obvious constraints.
Read this file carefully before making changes in affected areas.

- **RIS-HTML ist eine einzige Riesenzeile:** `grep -n` auf RIS-Exporte (z. B. NOR40217058) ist
  nutzlos (alles in Zeile 1). Mit Python slicen (`t.find(...)` + Fenster), Artefakte wie
  `–Strichaufzählung` / `:römisch eins.` sind RIS-Markup, kein Inhalt.
- **Anlage 1.28 (TM) hat ein gleichnamiges Fach** „Informatik und Informationssysteme" mit
  *anderem* Lehrstoff und anderer zeitlicher Verortung — beim Exzerpieren streng auf Anlage
  **1.24** (Betriebsinformatik) achten. Genau daraus entstanden die ③-Abweichungen, die am
  2026-07-26 korrigiert wurden (siehe `docs/lehrplan/RIS.md` §6).
- **Stundentafel-Parsing:** die Ziffer direkt hinter dem Fachnamen ist die **Fußnote** (z. B.
  „…Informationssysteme**4**2(2)3(3)…"), nicht Teil der Stundenzahl. RIS-Zeile INFI =
  2(2)/3(3)/2(2)/2(2)/6(4), Summe 15 — schulautonom 2/2/3/2/4 = 13.
- **SQLite kann keine Benutzer/GRANT:** DCL/Benutzerverwaltung (KM5) ist in SQLite nur
  konzeptionell lehrbar → Demo mit PostgreSQL via Docker einplanen (Fallback: Konzeptlehre).
- **Prisma kennt keine Vererbung:** O/R-Impedance-Mismatch im SWP-Verbund via **TPH +
  Discriminator + `toDomain`-Mapper** lösen (Code: `3HWII/README.md`); TPH verletzt bewusst
  3NF — didaktisch nutzen, nicht „wegnormalisieren".
- **KM5/KM6-Lehrstoff ist fast reiner DB-Kern:** ein Split „Nicht-SQL-Anteile" (Kollegen-Stunde)
  lässt sich nur aus Applikationsentwurf-Methodik, Benutzerführung, Reportgenerierung und
  Import/Export gewinnen — nicht aus den Abfrage-Themen.
