# CTEs in SQLite

## 1. Was ist eine CTE?

**CTE** = **C**ommon **T**able **E**xpression (gemeinsamer Tabellenausdruck).

Eine CTE ist eine temporäre Ergebnismenge, die nur für die Dauer einer einzigen Query existiert. Man definiert sie mit `WITH` und kann sie dann wie eine normale Tabelle oder View im restlichen SQL verwenden.

```sql
WITH cte_name AS (
  SELECT ...
)
SELECT * FROM cte_name;
```

### Vorteile
- Lesbarkeit: Komplexe Abfragen werden modular
- Wiederverwendung: Eine CTE kann mehrfach in derselben Query referenziert werden
- Rekursion: Ermöglicht hierarchische Abfragen (dazu später mehr)

---

## 2. Einfache (nicht-rekursive) CTEs

### Beispiel 1: Umsatz pro Kategorie

Frage: Welche Produktkategorie hat wie viel Umsatz gemacht?

```sql
WITH kat_umsatz AS (
  SELECT p.kategorie_id, SUM(r.menge * r.preis) AS umsatz
  FROM rechnungsposten r
  JOIN produkte p ON p.id = r.produkt_id
  GROUP BY p.kategorie_id
)
SELECT k.name, COALESCE(u.umsatz, 0) AS umsatz
FROM kategorien k
LEFT JOIN kat_umsatz u ON u.kategorie_id = k.id
ORDER BY u.umsatz DESC;
```

Ohne CTE müsste man die Subquery zweimal schreiben – oder eine Subquery im FROM verwenden. Die CTE macht es lesbarer.

### Beispiel 2: Mehrere CTEs in einem `WITH`

Man kann mehrere CTEs durch Komma trennen. Jede CTE kann auf vorherige CTEs zugreifen.

```sql
WITH
umsatz_pro_kunde AS (
  SELECT kunde_id, SUM(betrag) AS gesamt
  FROM rechnungen
  GROUP BY kunde_id
),
top_kunden AS (
  SELECT kunde_id, gesamt
  FROM umsatz_pro_kunde
  ORDER BY gesamt DESC
  LIMIT 10
)
SELECT k.name, t.gesamt
FROM top_kunden t
JOIN kunden k ON k.id = t.kunde_id;
```

Zwei CTEs, eine baut auf der anderen auf – kein Verschachteln von Subqueries.

### Beispiel 3: CTE zum Löschen mit `RETURNING`

Ab SQLite 3.35.0 kann man CTEs auch mit DML-Statements (`INSERT`, `UPDATE`, `DELETE`) kombinieren und `RETURNING` verwenden.

```sql
WITH geloescht AS (
  DELETE FROM alte_logs
  WHERE datum < '2023-01-01'
  RETURNING id, datum
)
SELECT count(*) AS anzahl_geloescht FROM geloescht;
```

---

## 3. Rekursive CTE – die Grundidee

Eine rekursive CTE ruft sich selbst auf. Sie besteht aus zwei Teilen:

1. **Anchor Member** – der Startwert (einmal ausgeführt)
2. **Rekursiver Member** – die Wiederholung (referenziert die CTE selbst)

Verbunden durch `UNION ALL`.

```sql
WITH RECURSIVE name AS (
  -- Anchor Member
  SELECT ...
  UNION ALL
  -- Rekursiver Member
  SELECT ...
  FROM name
  WHERE ...
)
SELECT * FROM name;
```

Die Rekursion endet, wenn der rekursive Member keine Zeilen mehr liefert.

### SQLite-Besonderheit: `RECURSIVE` ist optional – aber immer angeben

SQLite erlaubt `WITH RECURSIVE` auch für nicht-rekursive CTEs. Es ist **gute Praxis, immer `WITH RECURSIVE` zu schreiben**, damit man nicht umdenken muss, falls die CTE später rekursiv wird.

---

## 4. Rekursive Beispiele

### Beispiel 1: Zahlen von 1 bis N

Der Klassiker – eine Zahlenreihe erzeugen:

```sql
WITH RECURSIVE z(n) AS (
  SELECT 1
  UNION ALL
  SELECT n + 1
  FROM z
  WHERE n < 100
)
SELECT n FROM z;
```

Ergebnis: 1, 2, 3, …, 100.

**Anchor**: `SELECT 1` – startet bei 1.

**Rekursiver Schritt**: `SELECT n + 1 FROM z WHERE n < 100` – erhöht um 1, solange n < 100.

Sobald n = 100, liefert `WHERE n < 100` keine Zeile mehr → die Rekursion stoppt.

### Beispiel 2: Mitarbeiter-Hierarchie (Organigramm)

Die klassische Baumstruktur: Jeder Mitarbeiter hat eine `manager_id`, die auf den Vorgesetzten zeigt.

```sql
CREATE TABLE mitarbeiter (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  manager_id INTEGER REFERENCES mitarbeiter(id)
);

INSERT INTO mitarbeiter VALUES
  (1, 'Chef', NULL),
  (2, 'Abteilungsleiter A', 1),
  (3, 'Abteilungsleiter B', 1),
  (4, 'Teamleiter A1', 2),
  (5, 'Sachbearbeiter A1a', 4),
  (6, 'Sachbearbeiter A1b', 4),
  (7, 'Teamleiter B1', 3);
```

Alle Mitarbeiter unterhalb des Chefs (inklusive Chef) mit Ebene:

```sql
WITH RECURSIVE org AS (
  SELECT id, name, manager_id, 1 AS ebene
  FROM mitarbeiter
  WHERE manager_id IS NULL

  UNION ALL

  SELECT m.id, m.name, m.manager_id, o.ebene + 1
  FROM org o
  JOIN mitarbeiter m ON m.manager_id = o.id
)
SELECT * FROM org ORDER BY ebene, id;
```

| id | name | manager_id | ebene |
|---|------|-----------|-------|
| 1 | Chef | NULL | 1 |
| 2 | Abteilungsleiter A | 1 | 2 |
| 3 | Abteilungsleiter B | 1 | 2 |
| 4 | Teamleiter A1 | 2 | 3 |
| 7 | Teamleiter B1 | 3 | 3 |
| 5 | Sachbearbeiter A1a | 4 | 4 |
| 6 | Sachbearbeiter A1b | 4 | 4 |

**Anchor**: `WHERE manager_id IS NULL` – der Chef (Wurzel).

**Rekursiver Schritt**: `JOIN mitarbeiter m ON m.manager_id = o.id` – alle Mitarbeiter, deren Chef die Zeile aus der CTE ist. Die Ebene (`ebene`) wird pro Schritt um 1 erhöht.

### Beispiel 3: Datumsreihe (alle Tage eines Monats)

Schnell eine Liste aller Tage im Jänner 2024 erzeugen:

```sql
WITH RECURSIVE tage(d) AS (
  SELECT '2024-01-01'
  UNION ALL
  SELECT DATE(t.d, '+1 day')
  FROM tage t
  WHERE t.d < '2024-01-31'
)
SELECT d FROM tage;
```

Ergebnis: 2024-01-01, 2024-01-02, …, 2024-01-31.

**Praktischer Anwendungsfall**: Einen Kalender mit Fehltagen kombinieren, um zu sehen, an welchen Tagen *nicht* gearbeitet wurde:

```sql
WITH RECURSIVE tage(d) AS (
  SELECT '2024-01-01'
  UNION ALL
  SELECT DATE(t.d, '+1 day')
  FROM tage t
  WHERE t.d < '2024-01-31'
)
SELECT t.d, COALESCE(f.grund, 'anwesend') AS status
FROM tage t
LEFT JOIN fehltage f ON f.datum = t.d;
```

### Beispiel 4: Pfad-Aufbau (Organigramm mit Namenskette)

Wie hängt die Hierarchie zusammen? Ein Pfad-String:

```sql
WITH RECURSIVE org AS (
  SELECT id, name, manager_id, CAST(name AS TEXT) AS pfad, 1 AS ebene
  FROM mitarbeiter
  WHERE manager_id IS NULL

  UNION ALL

  SELECT m.id, m.name, m.manager_id,
         o.pfad || ' -> ' || m.name,
         o.ebene + 1
  FROM org o
  JOIN mitarbeiter m ON m.manager_id = o.id
)
SELECT pfad, ebene FROM org ORDER BY pfad;
```

Ergebnis:

| pfad | ebene |
|------|-------|
| Chef | 1 |
| Chef -> Abteilungsleiter A | 2 |
| Chef -> Abteilungsleiter A -> Teamleiter A1 | 3 |
| Chef -> Abteilungsleiter A -> Teamleiter A1 -> Sachbearbeiter A1a | 4 |
| Chef -> Abteilungsleiter A -> Teamleiter A1 -> Sachbearbeiter A1b | 4 |
| Chef -> Abteilungsleiter B | 2 |
| Chef -> Abteilungsleiter B -> Teamleiter B1 | 3 |

Der Pfad wird in jedem Schritt um ` -> name` verlängert.

---

## 5. Rekursionskontrolle in SQLite

SQLite hat kein `OPTION (MAXRECURSION N)` wie SQL Server. Der Schutz erfolgt anders.

### 5.1 Depth-Spalte – der empfohlene Guard

Man zählt die Rekursionstiefe mit und bricht selbst ab:

```sql
WITH RECURSIVE cte AS (
  SELECT 1 AS depth, ...
  UNION ALL
  SELECT c.depth + 1, ...
  FROM cte c
  WHERE c.depth < 999   -- Abbruch vor SQLites hartem Limit
)
SELECT * FROM cte;
```

Damit hat man die Kontrolle und kann den Fehlerfall selbst behandeln.

### 5.2 `SQLITE_MAX_RECURSION_DEPTH` – das harte Limit

Standardmäßig erlaubt SQLite **1000 Rekursionsebenen**. Wird dieses Limit überschritten, bricht SQLite die Query mit einem Fehler ab – es kommt **nicht** zu einer Endlosschleife.

```
Runtime error: recursion limit exceeded (1000)
```

Der Wert kann zur Kompilierzeit geändert werden:

```bash
-DSQLITE_MAX_RECURSION_DEPTH=100000
```

Manche SQLite-Distributionen (z.B. System-SQLite unter Linux) haben ein höheres Limit. Im Zweifel selbst testen.

**Wichtig**: Der Depth-Guard bei 999 fängt das Problem **vor** dem Fehler ab. Ein Depth-Guard bei 1.000.000 wäre sinnlos, weil SQLite schon bei 1000 abbricht.

### 5.3 Kein Query-Hint, kein SET-Befehl

- ❌ `OPTION (MAXRECURSION N)` – gibt es in SQLite nicht
- ❌ `SET max_recursive_iterations = N` – PostgreSQL-only
- ✅ Depth-Spalte mit `WHERE depth < N`

---

## 6. SQLite-Spezifika im Überblick

| Thema | SQLite |
|-------|--------|
| Schlüsselwort | `WITH RECURSIVE` (optional, aber empfohlen) |
| Rekursionslimit | `SQLITE_MAX_RECURSION_DEPTH` (default 1000) |
| Query-Hint | ❌ nicht vorhanden |
| Guard pro Query | Depth-Spalte mit WHERE |
| UNION ALL | ✅ (erforderlich) |
| UNION (distinct) | ❌ nicht erlaubt bei rekursiven CTEs |
| ORDER BY im rekursiven Glied | ❌ nicht erlaubt |
| LIMIT im rekursiven Glied | ❌ nicht erlaubt |
| INSERT/UPDATE/DELETE mit CTE | ✅ ab SQLite 3.35.0 |
| RETURNING mit CTE | ✅ ab SQLite 3.35.0 |
| CREATE VIEW mit CTE | ✅ `CREATE VIEW v AS WITH RECURSIVE ...` |

### Faustregel

> Wenn du eine rekursive CTE in SQLite schreibst, **zähle immer die Tiefe mit** (`depth`) und setze ein `WHERE depth < N`. Auch wenn SQLite bei 1000 ein Limit hat, signalisiert der selbst gewählte Guard die Absicht und schützt vor Überraschungen bei anderen SQLite-Builds.

---

## 7. Zusammenfassung

- **CTE** = temporärer Query-Name für Lesbarkeit und Wiederverwendung
- **Rekursive CTE** = Anchor + rekursiver Member mit `UNION ALL`
- **Typische Anwendungen**: Hierarchien, Zahlenreihen, Datumsreihen, Pfad-Aufbau
- **SQLite**: Hard Limit bei 1000 (konfigurierbar), kein Query-Hint → **Depth-Guard** verwenden
- **`WITH RECURSIVE`** immer hinschreiben, auch wenn die CTE nicht rekursiv ist
- Keine Endlosschleife möglich – SQLite bricht beim Limit ab (aber Fehler ist nicht schön)
