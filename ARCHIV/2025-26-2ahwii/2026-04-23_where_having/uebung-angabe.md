# Übung: WHERE vs HAVING, COUNT, Self-JOIN, ORDER BY

## 2ahwii – 30. April 2026

**Vorbereitung:** Führe `uebung-setup.sql` in SQLite aus, um die Tabellen zu erstellen.

```bash
sqlite3 uebung.db < uebung-setup.sql
```

Verwende dann `sqlite3 uebung.db` für deine Abfragen.

---

## Block A: WHERE vs HAVING

SQL verarbeitet eine Abfrage in einer bestimmten Reihenfolge. Hier die wichtigsten Schritte:

```
1. FROM        → Welche Tabelle(n)?
2. WHERE       → Einzelne Zeilen filtern (VOR dem Gruppieren)
3. GROUP BY    → Zeilen zusammenfassen
4. HAVING      → Gruppen filtern (NACH dem Gruppieren)
5. SELECT      → Welche Spalten ausgeben?
6. ORDER BY    → Sortieren
```

**Kernregel:** `WHERE` filtert **einzelne Zeilen**, `HAVING` filtert **Gruppen**.

### A1: Ausführungsreihenfolge verstehen

Schreibe die SQL-Klauseln in der richtigen Reihenfolge auf (als Kommentar):

```sql
-- 1. ___
-- 2. ___
-- 3. ___
-- 4. ___
-- 5. ___
-- 6. ___
```

### A2: Städte mit mindestens 4 Personen

Gesucht: Alle Städte, in denen **mindestens 4 Personen** leben.
Ausgabe: `stadt` und `anzahl` (die Anzahl der Personen pro Stadt).

### A3: WHERE und HAVING kombinieren

Gesucht: Alle Städte (außer Wien), in denen **mindestens 2 Personen** leben.
Ausgabe: `stadt` und `anzahl`.

Hinweis: Du brauchst hier sowohl `WHERE` als auch `HAVING`!

---

## Block B: COUNT(*) vs COUNT(spalte)

Der Unterschied:

- `COUNT(*)` zählt **alle** Zeilen (inkl. NULL)
- `COUNT(spalte)` zählt nur Zeilen, bei denen `spalte` **nicht NULL** ist

### B1: Vorhersage

Schaue dir die Tabelle `bestellung` an. Die Spalte `bewertung` enthält NULL-Werte.

Bevor du die Abfrage ausführst: Was erwarten dich als Ergebnis?

```sql
SELECT COUNT(*) AS total, COUNT(bewertung) AS bewertete
FROM bestellung;
```

Schreibe deine Vorhersage als Kommentar, dann führe die Abfrage aus.

### B2: Bewerte und unbewertete Bestellungen pro Kunde

Gesucht: Für jeden Kunden die Gesamtanzahl der Bestellungen und die Anzahl der bewerteten Bestellungen.
Ausgabe: `kunde_id`, `total`, `bewertete`.

### B3: Nur Kunden mit mehr bewerteten als unbewerteten Bestellungen

Gesucht: Nur jene Kunden, bei denen die Anzahl der **bewerteten** Bestellungen größer ist als die der **unbewerteten**.
Ausgabe: `kunde_id`, `total`, `bewertete`.

Hinweis: Unbewertet = `total - bewertete`. Du kannst in `HAVING` rechnen!

---

## Block C: Self-JOIN

Ein Self-JOIN verbindet eine Tabelle mit sich selbst. Man braucht unbedingt Aliase!

### C1: Doppelte E-Mails finden

In der Tabelle `person` gibt es doppelte E-Mail-Adressen.
Gesucht: Alle Paare von Personen, die **dieselbe E-Mail** haben (aber unterschiedliche IDs).

Ausgabe: `p1_id`, `p1_name` (Vorname + Nachname), `p2_id`, `p2_name`, `email`.

Sortiere nach `p1_id` aufsteigend, dann `p2_id` aufsteigend.

Hinweis: Join-Bedingung = gleiche E-Mail, aber `p1.id < p2.id`.

### C2: Mitarbeiter und ihr Chef

Gesucht: Name des Mitarbeiters und Name des zugehörigen Chefs.
Ausgabe: `mitarbeiter`, `chef`.

Hinweis: `JOIN mitarbeiter AS m2 ON m1.chef_id = m2.id`.

### C3: Gehalt im Vergleich zum Chef

Gesucht: Alle Mitarbeiter, die **mehr verdienen als ihr eigener Chef**.
Ausgabe: `mitarbeiter`, `gehalt`, `chef`, `chef_gehalt`.

---

## Block D: ORDER BY DESC + Mehrfachsortierung

### D1: Personen nach Alter absteigend

Gesucht: Vorname, Nachname und Alter aller Personen, sortiert nach Alter **absteigend**.
Bei gleichem Alter: nach Nachname **aufsteigend**.

### D2: Bestellungen nach Datum absteigend, dann nach Menge aufsteigend

Gesucht: Alle Bestellungen (`id`, `datum`, `menge`, `bewertung`), sortiert nach:
1. Datum absteigend
2. Menge aufsteigend

### D3: Drei-Spalten-Sortierung

Gesucht: Vorname, Nachname, Stadt und Alter aller Personen, sortiert nach:
1. Stadt aufsteigend
2. Alter absteigend
3. Nachname aufsteigend
