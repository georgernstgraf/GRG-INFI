# Wissensüberprüfung 2ahwii - 2026-02-19

## Themen der letzten 3 Wochen

- UNIQUE Constraint/Index in SQLite
- SQL-Abfragen (SELECT, DISTINCT, ORDER BY, WHERE, AND, OR, NOT)
- JOINs
- GROUP BY / HAVING

---

## Multiple Choice Fragen

Kreuze alle richtigen Antworten an. Es können 1-4 Antworten richtig sein.

### 1. Was bewirkt `CREATE UNIQUE INDEX` in SQLite?

- [ ] Es löscht alle doppelten Einträge in der Spalte
- [ ] Es stellt sicher, dass keine doppelten Werte in der indizierten Spalte vorkommen (Constraint)
- [ ] Es erstellt eine B-Baum-Struktur zur Beschleunigung von Suchabfragen
- [ ] Es ermöglicht nachträgliches Hinzufügen von Fremdschlüsseln

### 2. Was passiert, wenn man versucht, einen bereits vorhandenen Wert in eine UNIQUE-indizierte Spalte einzufügen?

- [ ] Der neue Wert überschreibt den alten
- [ ] Der Befehl wird ignoriert
- [ ] Es wird ein SQLITE_CONSTRAINT Fehler ausgelöst
- [ ] Der Wert wird automatisch mit einem Suffix versehen

### 3. Warum ist `CREATE UNIQUE INDEX` in SQLite besonders wichtig?

- [ ] Weil SQLite `ALTER TABLE ADD CONSTRAINT` nicht unterstützt
- [ ] Weil es der einzige Weg ist, eine Spalte nachträglich als eindeutig zu definieren
- [ ] Weil PRIMARY KEY in SQLite nicht funktioniert
- [ ] Weil es schneller ist als normale Indizes

### 4. Was passiert bei der Erstellung eines UNIQUE INDEX, wenn bereits Duplikate in der Spalte vorhanden sind?

- [ ] Die Duplikate werden automatisch gelöscht
- [ ] Die Erstellung des Index schlägt fehl
- [ ] Nur das erste Vorkommen wird indiziert
- [ ] Es wird eine Warnung ausgegeben, aber der Index wird erstellt

### 5. Was bewirkt das Schlüsselwort `DISTINCT` in einer SELECT-Abfrage?

- [ ] Es sortiert die Ergebnisse alphabetisch
- [ ] Es entfernt doppelte Einträge aus dem Ergebnis
- [ ] Es zählt die Anzahl der Einträge
- [ ] Es filtert NULL-Werte heraus

### 6. Wie sortiert man das Ergebnis einer Abfrage absteigend?

- [ ] `ORDER BY spalte DESC`
- [ ] `ORDER BY spalte DESCENDING`
- [ ] `SORT BY spalte DESC`
- [ ] `ORDER BY spalte REVERSE`

### 7. Welche Aussagen zu AND und OR in WHERE-Klauseln sind richtig?

- [ ] Bei AND müssen alle Bedingungen wahr sein
- [ ] Bei OR muss mindestens eine Bedingung wahr sein
- [ ] AND hat eine höhere Priorität als OR (wird zuerst ausgewertet)
- [ ] OR hat eine höhere Priorität als AND

### 8. Was bewirkt der NOT Operator in einer WHERE-Klausel?

- [ ] Er negiert die folgende Bedingung
- [ ] Er schließt NULL-Werte ein
- [ ] `NOT firstname = 'Max'` liefert alle Zeilen, bei denen firstname nicht 'Max' ist
- [ ] Er kann nur mit AND kombiniert werden

### 9. Bei einem JOIN zwischen `person` und `essen` Tabellen mit `ON person.id_lieblingsessen = essen.id`

- [ ] Jede Person wird mit ihrem Lieblingsessen angezeigt
- [ ] Nur Personen mit gültigem Lieblingsessen werden angezeigt (INNER JOIN)
- [ ] Die Tabellen werden über die id_lieblingsessen Spalte verknüpft
- [ ] Alle Essen ohne Zuordnung werden ebenfalls angezeigt

### 10. Was ist das Ergebnis von `SELECT person.name, essen.essen FROM person JOIN essen ON person.id_lieblingsessen = essen.id`?

- [ ] Eine Liste aller Personennamen mit dem Namen ihres Lieblingsessens
- [ ] Eine Liste aller Essen mit allen Personen
- [ ] Das kartesische Produkt beider Tabellen
- [ ] Nur die IDs beider Tabellen

### 11. Welche Abfrage zählt, wie viele Personen jedes Essen als Lieblingsessen haben?

- [ ] `SELECT essen, COUNT(*) FROM person JOIN essen ON person.id_lieblingsessen = essen.id GROUP BY essen.essen`
- [ ] `SELECT essen, COUNT(*) FROM essen GROUP BY essen`
- [ ] `SELECT COUNT(essen) FROM person GROUP BY id_lieblingsessen`
- [ ] `SELECT essen.essen, COUNT(person.id) FROM person JOIN essen ON person.id_lieblingsessen = essen.id GROUP BY essen.essen`

### 12. Was ist der Unterschied zwischen WHERE und HAVING?

- [ ] WHERE filtert Zeilen vor der Gruppierung (GROUP BY)
- [ ] HAVING filtert Gruppen nach der Gruppierung
- [ ] HAVING kann mit Aggregatfunktionen wie COUNT verwendet werden
- [ ] WHERE kann nicht mit AND kombiniert werden

---

## Freitext Fragen

### 1. JOIN-Abfrage

Schreibe eine SQL-Abfrage für die `lieblingsessen.db`, die alle Personennamen mit ihrem Lieblingsessen ausgibt. Die Datenbank hat folgende Tabellen:

```sql
CREATE TABLE person (id int, name text, id_lieblingsessen number);
CREATE TABLE essen (id number, essen text);
```

Deine Antwort:

```

```

### 2. Beliebtheit sortieren

Wie kann ich die Speisen anhand deren Beliebtheit sortieren? Schreibe eine SQL-Abfrage, die alle Essen mit der Anzahl der Personen anzeigt, die dieses Essen als Favorit haben, sortiert von beliebt (viele Personen) nach unbeliebt (wenige Personen).

Deine Antwort:

```

```

### 3. WHERE vs HAVING

Erkläre den Unterschied zwischen WHERE und HAVING. Wann verwendet man welche Klausel? Gib für jede Klausel ein konkretes Beispiel.

Deine Antwort:

```

```
