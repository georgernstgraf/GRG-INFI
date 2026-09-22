# Mission: INFI 3AHWII – KM5-Einstieg (UE 1–3, WS 2026/27)

## Why

Die 3AHWII startet ins 5. Semester (KM5: komplexe Abfragen, Optimierung, Benutzerverwaltung).
Nach der Agentic-Coding-Sondereinheit brauchen die Schüler einen sauberen SQL-Wiedereinstieg,
damit sie ab UE 3 selbstständig verschachtelte Fragen an der Musik-Streaming-DB beantworten können.

## Success looks like

- Jede Schülerin formuliert 5 Auffrischungs-Queries (JOIN, GROUP BY, HAVING) fehlerfrei auf der Musik-Streaming-DB (UE 1 / HÜ).
- Jede Schülerin zerlegt eine denormalisierte Bestelltabelle schrittweise bis 3NF und begründet jede Stufe (UE 2 / HÜ).
- Jede Schülerin schreibt Skalar- und Tabellen-Subqueries in WHERE/FROM/SELECT auf der Musik-DB (UE 3 / HÜ).

## Constraints

- 1 DS pro Woche (2 h, Georgs Anteil am 2+1-Split); Lessons müssen in je einer DS schaffbar sein.
- Deutsch, HTL-Niveau; Werkzeug SQLite (`sqlite3`, `node:sqlite` via Deno), kein neues Tooling.
- Dauerbeispiel Musik-Streaming-DB aus Jg II; bekannte Schwächen (Self-JOIN, `COUNT(*)` vs `COUNT(col)`, WHERE vs HAVING) gezielt abprüfen.

## Out of scope

- CTEs/Views im Detail (UE 5–6), DDL/Indizes/Transaktionen/DCL (UE 8–11) — nur kurze Ausblicke.
- Prisma/Applikationsbau (KM6, Sommersemester) und Kollegen-Stunde (Import/Export).
