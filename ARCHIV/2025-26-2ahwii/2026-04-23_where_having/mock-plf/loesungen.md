# Musterlösungen: Mock-PLF SQL Abfragen

## 2ahwii – Probearbeit für die PLF am 7. Mai 2026

---

## Aufgabe a: Schüler der 2AHWII

```sql
SELECT vorname, nachname
FROM schueler
WHERE klasse = '2AHWII'
ORDER BY nachname;
```

**Erklärung:**
- `SELECT vorname, nachname` – nur diese zwei Spalten ausgeben
- `WHERE klasse = '2AHWII'` – nur Schüler dieser Klasse
- `ORDER BY nachname` – Standard-Sortierung ist ASC (aufsteigend)

**Ergebnis:** 6 Zeilen (Bauer, Fischer, Gruber, Huber, Müller, Wagner)

---

## Aufgabe b: Alle verschiedenen Klassen

```sql
SELECT DISTINCT klasse
FROM schueler
ORDER BY klasse;
```

**Erklärung:**
- `DISTINCT` entfernt doppelte Einträge
- Ohne DISTINCT würde jede Klasse mehrfach erscheinen (einmal pro Schüler)

**Ergebnis:** 3 Zeilen: 2AHWII, 2BHWII, 2CHWII

---

## Aufgabe c: Neue Schüler, aber nicht 2AHWII

```sql
SELECT vorname, nachname, klasse
FROM schueler
WHERE eintrittsjahr >= 2024 AND klasse != '2AHWII'
ORDER BY nachname;
```

**Erklärung:**
- `AND` verknüpft zwei Bedingungen – beide müssen erfüllt sein
- `!=` bedeutet "ungleich" (alternativ: `<>`)
- `>=` bedeutet "größer oder gleich"

**Ergebnis:** 9 Zeilen (Berger, Egger, Graf, Lechner, Mayer, Schmidt, Schwarz, Steiner, Winkler)

---

## Aufgabe d: Schüler pro Klasse

```sql
SELECT klasse, COUNT(*) AS anzahl
FROM schueler
GROUP BY klasse
ORDER BY anzahl DESC;
```

**Erklärung:**
- `GROUP BY klasse` fasst alle Zeilen gleicher Klasse zusammen
- `COUNT(*)` zählt die Zeilen pro Gruppe
- `AS anzahl` gibt der Spalte einen Namen
- `ORDER BY anzahl DESC` – absteigend: größte Klasse zuerst

**Ergebnis:** 2AHWII (6), 2CHWII (5), 2BHWII (4)

---

## Aufgabe e: Schlechte Noten

```sql
SELECT s.vorname, s.nachname, f.name AS fach
FROM note n
JOIN schueler s ON n.schueler_id = s.id
JOIN fach f ON n.fach_id = f.id
WHERE n.note > 3
ORDER BY s.nachname, f.name;
```

**Erklärung:**
- Zwei JOINs: note→schueler und note→fach (um an die Namen zu kommen)
- `n.note > 3` filtert Noten 4 und 5 (schlecht)
- `s.vorname` statt nur `vorname` – nötig weil mehrere Tabellen verbunden werden
- Sortierung: erst Nachname, dann Fachname (beide ASC = Standard)

**Ergebnis:** 11 Zeilen

---

## Aufgabe f: Leichte Fächer mit HAVING

```sql
SELECT f.name AS fach, ROUND(AVG(n.note), 2) AS durchschnitt, COUNT(*) AS anzahl
FROM note n
JOIN fach f ON n.fach_id = f.id
GROUP BY n.fach_id
HAVING AVG(n.note) < 2.5 AND COUNT(*) >= 3
ORDER BY durchschnitt;
```

**Erklärung:**
- `ROUND(AVG(n.note), 2)` – Durchschnitt auf 2 Kommastellen gerundet
- `GROUP BY n.fach_id` – gruppiert nach Fach
- `HAVING` filtert **Gruppen** (nicht einzelne Zeilen wie WHERE):
  - Durchschnitt < 2.5 (gute Durchschnittsnote)
  - Mindestens 3 Noten im Fach
- **Wichtig:** HAVING kommt NACH GROUP BY, WHERE käme VOR GROUP BY

**Sonderfall:** Warum WHERE nicht geht? Weil AVG() erst nach dem Gruppieren
berechnet wird. WHERE kann keine Aggregatfunktionen verwenden.

**Ergebnis:** AM (1.25, 4 Noten), E (2.0, 6 Noten)

---

## Aufgabe g: Lehrer und ihr Vorgesetzter

```sql
SELECT
    l1.vorname || ' ' || l1.nachname AS lehrer,
    l2.vorname || ' ' || l2.nachname AS vorgesetzter
FROM lehrer l1
LEFT JOIN lehrer l2 ON l1.chef_id = l2.id
ORDER BY l1.nachname;
```

**Erklärung:**
- **Self-JOIN:** Tabelle `lehrer` wird mit sich selbst verbunden
- `l1` = der Lehrer, `l2` = der Vorgesetzte (chef)
- `LEFT JOIN` statt `INNER JOIN`: zeigt auch Lehrer OHNE Vorgesetzten
  (Dr. Ernst Vogel hat chef_id = NULL → vorgesetzter ist NULL)
- `||` verkettet Strings in SQLite: "Dr. Ernst" + " " + "Vogel"
- Sortierung nach Nachname des Lehrers

**Sonderfall:** Mit INNER JOIN würde Dr. Ernst Vogel fehlen!

**Ergebnis:** 6 Zeilen, Dr. Ernst Vogel hat NULL als Vorgesetzter

---

## Aufgabe h: Schüler mit einer 1er-Note

```sql
SELECT DISTINCT s.vorname, s.nachname
FROM schueler s
WHERE s.id IN (
    SELECT n.schueler_id
    FROM note n
    WHERE n.note = 1
)
ORDER BY s.nachname;
```

**Erklärung:**
- **Subquery** (Unterabfrage): Die innere SELECT holt alle schueler_id
  mit Note = 1
- `IN (...)` prüft, ob die Schüler-ID in der Ergebnismenge der Subquery ist
- `DISTINCT` verhindert, dass ein Schüler mehrfach erscheint
  (wer mehrere 1er hat, wird trotzdem nur einmal gelistet)

**Alternative** (mit JOIN + DISTINCT):
```sql
SELECT DISTINCT s.vorname, s.nachname
FROM schueler s
JOIN note n ON s.id = n.schueler_id
WHERE n.note = 1
ORDER BY s.nachname;
```

**Ergebnis:** 6 Schüler (Egger, Fischer, Gruber, Mayer, Steiner, Wagner)

---

## Aufgabe i: Noten der 2AHWII sortiert

```sql
SELECT s.nachname, f.name AS fach, n.note, n.datum
FROM note n
JOIN schueler s ON n.schueler_id = s.id
JOIN fach f ON n.fach_id = f.id
WHERE s.klasse = '2AHWII'
ORDER BY f.name ASC, n.note ASC, n.datum DESC;
```

**Erklärung:**
- Zwei JOINs nötig (schueler für Name/Klasse, fach für Fachname)
- `WHERE s.klasse = '2AHWII'` filtert VOR dem Sortieren
- **Mehrfachsortierung:**
  1. `f.name ASC` – Fach alphabetisch (AM, D, E, Inf, Mathe)
  2. `n.note ASC` – innerhalb des Fachs: beste Note zuerst
  3. `n.datum DESC` – bei gleicher Note: neueste zuerst

**Ergebnis:** 26 Zeilen

---

## Aufgabe j: Bestnoten-Übersicht

```sql
SELECT
    s.vorname,
    s.nachname,
    s.klasse,
    ROUND(AVG(n.note), 2) AS durchschnitt,
    COUNT(*) AS anzahl
FROM note n
JOIN schueler s ON n.schueler_id = s.id
GROUP BY n.schueler_id
HAVING COUNT(*) >= 5
ORDER BY durchschnitt ASC, s.nachname ASC;
```

**Erklärung:**
- JOIN holt die Schülerdaten (vorname, nachname, klasse)
- `GROUP BY n.schueler_id` – eine Zeile pro Schüler
- `ROUND(AVG(n.note), 2)` – Durchschnittsnote gerundet
- `COUNT(*)` – Anzahl der Noten
- `HAVING COUNT(*) >= 5` – nur Schüler mit mindestens 5 Noten
- **Zweifachsortierung:** bester Durchschnitt zuerst, bei Gleichstand nach Name

**Ergebnis:**

| vorname | nachname | klasse  | durchschnitt | anzahl |
|---------|----------|---------|-------------|--------|
| Maria   | Egger    | 2CHWII  | 1.40        | 5      |
| Eva     | Wagner   | 2AHWII  | 1.40        | 5      |
| Clara   | Fischer  | 2AHWII  | 1.60        | 5      |
| Anna    | Gruber   | 2AHWII  | 1.80        | 5      |

**Sonderfall:** Maria Egger und Eva Wagner haben denselben Durchschnitt (1.40).
Die Zweit-Sortierung `nachname ASC` entscheidet: Egger vor Wagner.
