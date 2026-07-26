# Domain Knowledge

Business rules and domain relationships not obvious from code.

## Fach & Lehrplan (Anlage 1.24, WII–Betriebsinformatik)

- **Fach:** Informatik und Informationssysteme (INFI), Fach Nr. 3 der Anlage 1.24 zu
  BGBl. II Nr. 262/2015 idF 235/2019 — seit 2015 inhaltlich unverändert, nicht obsolet.
- **Kompetenzmodule:** Jg I = Angewandte Informatik (kein KM) · Jg II = KM3+KM4 (Datenbanken) ·
  Jg III = KM5+KM6 (Datenbanken) · Jg IV = KM7+KM8 (**Domänenwechsel zu ERP**) ·
  Jg V = KM9 (Informationssysteme **+ Datenbanken** + ERP; der DB-Track „Web- und
  GUI-Applikationen" wurde am 2026-07-26 im Repo ergänzt).
- **Stundentafel:** RIS 2(2)/3(3)/2(2)/2(2)/6(4) = 15; schulautonom (Spengergasse)
  2/2/3/2/4 = 13. Jg III: 3 h = **2 h Georg + 1 h Kollege** (2+1-Split).
- **Beurteilung:** PLF / Hausübungen / Mitarbeit je 1/3 (Root-`README.md`);
  2 PLFs pro Semester (nach UE 7 und UE 13).

## SWP-Verbund (Jg III, Kohorte 2AHWII→3AHWII)

- **„Eine App, zwei Noten":** gleiche Kohorte, gleicher Stack (Deno/TS/Prisma/SQLite) in SWP
  und INFI; gemeinsames Abschlussprojekt im SS (UE 11–13), getrennte Rubriken.
- **Brücke = Repository-Interface:** SWP definiert (`interface MediumRepository`), INFI
  implementiert mit Prisma (TPH + Mapper).
- **Abstimmung:** Georg unterrichtet beide Fach-Seiten (SWP 2 h + INFI 2 h) → interne Sync;
  PM-Rahmung = SWP-Kollege (PRE); INFI-Kollege (1 h) = Nicht-SQL-Anteile (Vorschlag, TBD).
- **Domänenwahl** (Schüler co-decided, SS ~UE 9): 5 Kandidaten in `3HWII/README.md`.

## Laufende Beispiele / Vorwissen

- **Musik-Streaming-DB** (aus Jg II, E11) ist das Dauerbeispiel für KM5 — Seed-Stand pflegen.
- **Vorwissen 3AHWII:** CRUD, JOIN/Self-JOIN, GROUP BY/HAVING, DDL/Constraints, N:M, ER (bigER),
  Prisma-Grundlagen. **Lücke:** Normalformen (① KM3) nur gestreift → WS UE 2.
- **Schwachstellen (Diagnose Jg II):** Self-JOIN-Details, `COUNT(*)` vs. `COUNT(col)`,
  WHERE vs. HAVING, mehrspaltiges ORDER BY DESC.
