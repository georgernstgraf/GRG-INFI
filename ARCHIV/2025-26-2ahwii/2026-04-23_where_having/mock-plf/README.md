# Mock-PLF: SQL Abfragen

## 2ahwii – Probearbeit für die PLF am 7. Mai 2026

**Vorbemerkung**: Die Aufgaben a–j werden mit der Schul-Datenbank durchgeführt.
Führe zuerst `setup.sql` aus, um die Datenbank zu erstellen:

```bash
sqlite3 schule.db < setup.sql
```

In die jeweiligen (am Anfang leeren) Dateien "a.sql", "b.sql" usw. sind die
entsprechenden Lösungen einzutragen.

**Selbstkontrolle**: Im Terminal – wechsle in das Verzeichnis `mock-plf` – das
Kommando `deno task test` zeigt Dir, welches SQL bereits richtig ist.

**Schwierigkeit**: Die Aufgaben sind unterschiedlich schwer, suche Dir zu Beginn
die, welche Dir leicht fallen.

---

## Aufgabe a.sql: Schüler der 2AHWII

Gesucht sind Vorname und Nachname aller Schüler der Klasse "2AHWII",
sortiert nach Nachname aufsteigend.

## Aufgabe b.sql: Alle verschiedenen Klassen

Gesucht ist eine Liste aller verschiedenen Klassen, sortiert alphabetisch.

## Aufgabe c.sql: Neue Schüler, aber nicht 2AHWII

Gesucht sind Vorname, Nachname und Klasse aller Schüler, die ab dem Jahr 2024
eingetreten sind und **nicht** in der Klasse "2AHWII" sind.
Sortierung nach Nachname aufsteigend.

## Aufgabe d.sql: Schüler pro Klasse

Gesucht sind die Klasse und die Anzahl der Schüler pro Klasse.
Sortierung nach Anzahl absteigend.

Spaltenbenennung: `klasse`, `anzahl`.

## Aufgabe e.sql: Schlechte Noten

Gesucht sind Vorname, Nachname des Schülers und der Fachname für alle Noten,
die **schlechter als 3** sind (also 4 oder 5).
Sortierung nach Nachname aufsteigend, dann Fachname aufsteigend.

Spaltenbenennung: `vorname`, `nachname`, `fach`.

## Aufgabe f.sql: Leichte Fächer mit HAVING

Gesucht sind Fächer, bei denen der Notendurchschnitt **kleiner als 2.5** ist
und die **mindestens 3 Noten** haben.
Sortierung nach Durchschnitt aufsteigend.

Spaltenbenennung: `fach`, `durchschnitt` (auf 2 Nachkommastellen gerundet), `anzahl`.

## Aufgabe g.sql: Lehrer und ihr Vorgesetzter

Gesucht sind der Name des Lehrers und der Name des Vorgesetzten (chef).
Auch Lehrer **ohne** Vorgesetzten sollen angezeigt werden.
Sortierung nach Nachname des Lehrers aufsteigend.

Spaltenbenennung: `lehrer`, `vorgesetzter`.

## Aufgabe h.sql: Schüler mit einer 1er-Note

Gesucht sind Vorname und Nachname aller Schüler, die **mindestens eine** Note
mit dem Wert 1 haben.
Jeder Schüler soll nur einmal erscheinen.
Sortierung nach Nachname aufsteigend.

## Aufgabe i.sql: Noten der 2AHWII sortiert

Gesucht sind Nachname des Schülers, Fachname, Note und Datum für alle Noten
von Schülern der Klasse "2AHWII".
Sortierung nach:
1. Fach aufsteigend
2. Note aufsteigend
3. Datum absteigend

Spaltenbenennung: `nachname`, `fach`, `note`, `datum`.

## Aufgabe j.sql: Bestnoten-Übersicht

Gesucht sind Vorname, Nachname, Klasse, der Notendurchschnitt (auf 2
Nachkommastellen gerundet) und die Anzahl der Noten für jeden Schüler,
der **mindestens 5 Noten** hat.
Sortierung nach Durchschnitt aufsteigend, dann Nachname aufsteigend.

Spaltenbenennung: `vorname`, `nachname`, `klasse`, `durchschnitt`, `anzahl`.

### Punkteschlüssel

Bei jeder Aufgabe sind 5 Punkte möglich, dh. `0-20 / 21-25 / 26-30 / 31-35 / 36-40`

```text
  ____       _                ____      _ _                           _
 / ___|_   _| |_ ___  ___    / ___| ___| (_)_ __   __ _  ___ _ __    | |
| |  _| | | | __/ _ \/ __|  | |  _ / _ \ | | '_ \ / _` |/ _ \ '_ \   | |
| |_| | |_| | ||  __/\__ \  | |_| |  __/ | | | | | (_| |  __/ | | |  |_|
 \____|\__,_|\__\___||___/   \____|\___|_|_|_| |_|\__, |\___|_| |_|  (_)
                                                  |___/
```
