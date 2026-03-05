# Antworten (für Lehrer)

## Multiple Choice Lösungen

1. **B, C** - Constraint (Eindeutigkeit) + Performance (B-Baum-Index)
2. **C** - SQLITE_CONSTRAINT Fehler
3. **A, B** - SQLite unterstützt kein ALTER TABLE ADD CONSTRAINT, UNIQUE INDEX ist der einzige Weg
4. **B** - Erstellung schlägt fehl
5. **B** - Entfernt Duplikate
6. **A** - ORDER BY ... DESC
7. **A, B, C** - AND muss alle wahr sein, OR mindestens eine, AND wird vor OR ausgewertet
8. **A, C** - Negiert die Bedingung, NOT firstname = 'Max' schließt Max aus
9. **A, B, C** - JOIN verknüpft über id_lieblingsessen, INNER JOIN zeigt nur gültige
10. **A** - Personen mit ihren Lieblingsessen
11. **A, D** - Beide Varianten sind korrekt (mit JOIN und Spaltennamen)
12. **A, B, C** - WHERE vor GROUP BY, HAVING danach mit Aggregatfunktionen

### Freitext - Musterlösungen

**1. JOIN-Abfrage:**

```sql
SELECT person.name, essen.essen
FROM person
JOIN essen ON person.id_lieblingsessen = essen.id;
```

**2. Beliebtheit sortieren:**

```sql
SELECT essen.essen, COUNT(*) as anzahl
FROM person
JOIN essen ON person.id_lieblingsessen = essen.id
GROUP BY essen.essen
ORDER BY anzahl DESC;
```

**3. WHERE vs HAVING:**

- WHERE: Filtert einzelne Zeilen **vor** der Gruppierung (GROUP BY)
  - Beispiel: `WHERE sex = 'female'` - zeigt nur weibliche Personen
- HAVING: Filtert **Gruppen** nach der Gruppierung, kann Aggregatfunktionen verwenden
  - Beispiel: `HAVING COUNT(*) > 2` - zeigt nur Essen, die mehr als 2 Personen mögen
