# Wissensüberprüfung 2ahwii - 2026-03-05 - Lösungen

## Multiple Choice Lösungen

### 1. Was bewirkt ein Self-JOIN in SQL?

- [x] Er verbindet eine Tabelle mit sich selbst
- [ ] Er verdoppelt automatisch alle Einträge
- [x] Er kann verwendet werden, um Duplikate in einer Tabelle zu finden
- [x] Er benötigt zwingend einen Alias für die Tabelle

**Erklärung:** Ein Self-JOIN verbindet eine Tabelle mit sich selbst, um z.B. Datensätze zu vergleichen. Aliase sind notwendig, um die Tabelle zu unterscheiden.

### 2. In der Abfrage `SELECT DISTINCT p1.email FROM person p1 JOIN person p2 ON p1.email = p2.email AND p1.id != p2.id`:

- [x] `p1` und `p2` sind Aliase für dieselbe Tabelle
- [x] Die Bedingung `p1.id != p2.id` stellt sicher, dass nicht derselbe Datensatz mit sich selbst verglichen wird
- [x] Das Ergebnis zeigt alle E-Mails, die mehrfach vorkommen
- [x] Ohne DISTINCT würden doppelte E-Mails mehrfach im Ergebnis erscheinen

**Erklärung:** Alle Aussagen sind korrekt. Die Abfrage findet alle E-Mails, die in der Tabelle mehrfach vorkommen.

### 3. Welche Aussagen zum DELETE-Befehl sind richtig?

- [x] `DELETE FROM tabelle` löscht alle Zeilen der Tabelle
- [x] `DELETE FROM tabelle WHERE bedingung` löscht nur Zeilen, die die Bedingung erfüllen
- [x] DELETE kann mit einer Subquery kombiniert werden
- [x] DELETE kann rückgängig gemacht werden (ROLLBACK), wenn keine Transaktion committed wurde

**Erklärung:** DELETE ohne WHERE löscht alles, mit WHERE selektiv. Subqueries sind möglich. Mit Transaktionen kann man ROLLBACK durchführen.

### 4. Was ist der Zweck der Abfrage `DELETE FROM person WHERE id IN (SELECT max(p1.id) FROM person p1 JOIN person p2 ON p1.email = p2.email AND p1.id != p2.id GROUP BY p1.email)`?

- [ ] Sie löscht alle Duplikate und behält nur den ersten Eintrag
- [x] Sie löscht die Einträge mit der höchsten ID von jedem Duplikat
- [ ] Sie löscht alle Einträge ohne E-Mail
- [x] Die Subquery findet alle IDs von doppelten E-Mails

**Erklärung:** Die Subquery findet für jede doppelte E-Mail die maximale ID, und DELETE löscht diese Einträge.

### 5. Welche Aggregatfunktionen gibt es in SQL?

- [x] COUNT()
- [x] SUM()
- [x] AVG()
- [x] MAX() und MIN()

**Erklärung:** Alle genannten Funktionen sind Standard-Aggregatfunktionen in SQL.

### 6. Was ist der Unterschied zwischen `COUNT(*)` und `COUNT(spalte)`?

- [x] `COUNT(*)` zählt alle Zeilen inklusive NULL-Werte
- [x] `COUNT(spalte)` zählt nur Zeilen, in denen die Spalte nicht NULL ist
- [ ] Es gibt keinen Unterschied
- [ ] `COUNT(*)` ist langsamer als `COUNT(spalte)`

**Erklärung:** COUNT(*) zählt alle Zeilen, COUNT(spalte) ignoriert NULL-Werte. Performance-Unterschiede sind meist vernachlässigbar.

### 7. Bei `SELECT email, COUNT(*) as anzahl FROM person GROUP BY email HAVING COUNT(*) > 1`:

- [x] GROUP BY gruppiert alle Zeilen mit derselben E-Mail
- [x] HAVING filtert Gruppen nach der Aggregation
- [x] Das Ergebnis zeigt nur E-Mails, die mehr als einmal vorkommen
- [ ] WHERE könnte statt HAVING verwendet werden

**Erklärung:** HAVING ist für Gruppenfilter nach der Aggregation zuständig, WHERE kann Aggregatfunktionen nicht verwenden.

### 8. Was bewirkt `ORDER BY spalte DESC`?

- [ ] Sortiert aufsteigend (ascending)
- [x] Sortiert absteigend (descending)
- [ ] DESC ist die Standardeinstellung für ORDER BY
- [x] Kann mit mehreren Spalten kombiniert werden: `ORDER BY spalte1 DESC, spalte2 ASC`

**Erklärung:** DESC sortiert absteigend, ASC (Standard) aufsteigend. Mehrere Spalten sind möglich.

### 9. Welche Aussagen zu Subqueries sind richtig?

- [x] Eine Subquery kann in der WHERE-Klausel verwendet werden
- [x] Eine Subquery kann in der SELECT-Klausel verwendet werden
- [x] `WHERE id IN (SELECT ...)` prüft, ob die ID im Ergebnis der Subquery enthalten ist
- [ ] Subqueries können immer durch JOINs ersetzt werden

**Erklärung:** Die meisten Subqueries können durch JOINs ersetzt werden, aber nicht alle (z.B. korrelierte Subqueries in SELECT).

### 10. Was ist der Unterschied zwischen INNER JOIN und LEFT JOIN?

- [x] INNER JOIN zeigt nur Zeilen mit Übereinstimmungen in beiden Tabellen
- [x] LEFT JOIN zeigt alle Zeilen der linken Tabelle, auch ohne Übereinstimmung
- [x] Bei LEFT JOIN werden nicht gefundene Übereinstimmungen als NULL dargestellt
- [ ] LEFT JOIN ist schneller als INNER JOIN

**Erklärung:** INNER JOIN filtert auf Übereinstimmungen, LEFT JOIN behält alle linken Zeilen. Performance hängt von Daten und Indizes ab.

### 11. Welche Syntax ist korrekt für einen Self-JOIN?

- [x] `SELECT * FROM tabelle t1 JOIN tabelle t2 ON t1.id = t2.id`
- [ ] `SELECT * FROM tabelle JOIN tabelle ON id = id` (mehrdeutig ohne Alias)
- [x] `SELECT * FROM tabelle AS t1 JOIN tabelle AS t2 ON t1.id = t2.id`
- [x] `SELECT * FROM tabelle t1, tabelle t2 WHERE t1.id = t2.id` (impliziter Join)

**Erklärung:** Alle mit Alias sind korrekt. Ohne Alias ist die Spalte mehrdeutig.

### 12. Was passiert bei `INSERT INTO person VALUES (1, "test@test.com")`, wenn auf der Spalte `email` ein UNIQUE INDEX existiert und "test@test.com" bereits vorhanden ist?

- [ ] Der Eintrag wird ignoriert
- [x] Es wird ein SQLITE_CONSTRAINT Fehler ausgelöst
- [ ] Der bestehende Eintrag wird überschrieben
- [ ] Der neue Eintrag erhält automatisch eine andere E-Mail

**Erklärung:** UNIQUE Constraint verhindert Duplikate und löst einen Fehler aus.

---

## Freitext Lösungen

### 1. Duplikate finden und löschen

**Musterlösung:**

Um Duplikate mit einem Self-JOIN zu erkennen, vergleicht man die Tabelle mit sich selbst:

```sql
SELECT DISTINCT p1.email
FROM person p1
JOIN person p2 ON p1.email = p2.email AND p1.id != p2.id;
```

**Erklärung:**
- `p1` und `p2` sind Aliase für dieselbe Tabelle `person`
- `p1.email = p2.email` findet Zeilen mit derselben E-Mail
- `p1.id != p2.id` verhindert, dass ein Datensatz mit sich selbst verglichen wird
- `DISTINCT` entfernt doppelte Einträge im Ergebnis

**Duplikate löschen (höchste ID behalten):**

```sql
DELETE FROM person
WHERE id IN (
    SELECT max(p1.id)
    FROM person p1
    JOIN person p2 ON p1.email = p2.email AND p1.id != p2.id
    GROUP BY p1.email
);
```

Alternative (niedrigste ID behalten):

```sql
DELETE FROM person
WHERE id NOT IN (
    SELECT min(id)
    FROM person
    GROUP BY email
);
```

---

### 2. GROUP BY und HAVING

**Musterlösung:**

**Was macht GROUP BY?**
GROUP BY fasst Zeilen mit gleichen Werten in einer oder mehreren Spalten zu Gruppen zusammen. Für jede Gruppe wird eine einzige Ergebniszeile zurückgegeben.

**Warum Aggregatfunktionen nicht in WHERE?**
WHERE filtert einzelne Zeilen VOR der Gruppierung. Aggregatfunktionen wie COUNT() arbeiten aber erst NACH der Gruppierung. Daher kann WHERE keine Aggregatfunktionen verwenden.

**Unterschied WHERE und HAVING:**
- WHERE: Filtert Zeilen vor der Gruppierung (auf einzelne Datensätze)
- HAVING: Filtert Gruppen nach der Gruppierung (kann Aggregatfunktionen verwenden)

**Beispielabfrage:**

```sql
SELECT email, COUNT(*) as anzahl
FROM person
GROUP BY email
HAVING COUNT(*) > 2
ORDER BY anzahl DESC;
```

Diese Abfrage:
1. Gruppiert alle Einträge nach E-Mail
2. Zählt die Einträge pro E-Mail
3. Filtert Gruppen mit mehr als 2 Einträgen
4. Sortiert absteigend nach Anzahl

---

### 3. Self-JOIN praktisch anwenden

**Musterlösung:**

```sql
SELECT 
    mitarbeiter.name AS mitarbeiter_name,
    manager.name AS manager_name
FROM mitarbeiter
LEFT JOIN mitarbeiter AS manager ON mitarbeiter.manager_id = manager.id;
```

**Warum Self-JOIN notwendig?**
Da Manager ebenfalls Mitarbeiter sind und in derselben Tabelle stehen, muss die Tabelle mit sich selbst verknüpft werden, um die Hierarchie abzubilden.

**Wie funktioniert die Verknüpfung?**
- `mitarbeiter` ist die Haupttabelle (Alias nicht zwingend, aber übersichtlicher)
- `manager` ist ein Alias für dieselbe Tabelle
- `mitarbeiter.manager_id` verweist auf die ID des Managers
- `manager.id` ist die ID des Managers in derselben Tabelle
- Die Verknüpfung stellt her: "Finde für jeden Mitarbeiter den passenden Manager"

**Was passiert bei NULL (kein Manager)?**
Bei Verwendung von LEFT JOIN:
- Der Mitarbeiter erscheint trotzdem im Ergebnis
- `manager_name` ist NULL

Bei Verwendung von INNER JOIN:
- Der Mitarbeiter würde NICHT im Ergebnis erscheinen (wird gefiltert)

Deshalb ist LEFT JOIN besser, um auch Mitarbeiter ohne Manager (z.B. CEO) anzuzeigen.

---

**Bewertungsschema:**

- Multiple Choice: 4 Punkte pro Frage, 48 Punkte gesamt
- Freitext: 10 Punkte pro Frage, 30 Punkte gesamt
- **Gesamt: 78 Punkte**

**Notenschlüssel (Beispiel):**
- ≥ 70 Punkte (90%): Sehr gut (1)
- ≥ 62 Punkte (80%): Gut (2)
- ≥ 54 Punkte (69%): Befriedigend (3)
- ≥ 39 Punkte (50%): Genügend (4)
- < 39 Punkte: Nicht genügend (5)
