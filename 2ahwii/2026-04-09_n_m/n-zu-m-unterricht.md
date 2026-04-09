# Unterrichtseinheit: N-zu-M-Beziehungen in SQL

## Überblick

Diese Unterrichtseinheit behandelt den Übergang von 1-zu-N-Beziehungen zu N-zu-M-Beziehungen am Beispiel einer Lieblingsgerichte-Datenbank.

---

## Lernziele

Nach dieser Einheit können die Schüler:
- Den Unterschied zwischen 1:N und N:M Beziehungen erklären
- Eine Zwischentabelle (Junction Table) korrekt entwerfen
- FOREIGN KEY Constraints mit ON DELETE/ON CASCADE anwenden
- CHECK Constraints für Wertebereiche definieren
- Sinnvolle Indexe für N:M-Beziehungen erstellen

---

## Teil 1: Von 1-zu-N zu N-zu-M

### Bestehende 1-zu-N-Struktur

In der ursprünglichen Datenbank hatte jede Person genau ein Lieblingsgericht:

```
┌───────────────┐         ┌───────────────┐
│    person     │         │     essen     │
├───────────────┤         ├───────────────┤
│ PK id         │────┐    │ PK id         │
│    name       │    │    │    essen      │
│ FK id_lieb... │────┘    └───────────────┘
└───────────────┘
```

**Problem:** Eine Person kann nur EIN Lieblingsgericht haben. Was, wenn jemand Pizza UND Sushi mag?

### Neue N-zu-M-Struktur

Mit einer Zwischentabelle kann jede Person mehrere Gerichte bewerten:

```
┌───────────────┐         ┌─────────────────────────┐         ┌───────────────┐
│    person     │         │   person_essen_rating   │         │     essen     │
├───────────────┤         ├─────────────────────────┤         ├───────────────┤
│ PK id         │────┐    │ PK/FK person_id         │    ┌────│ PK id         │
│    name       │    └────│ PK/FK essen_id          │────┘    │    essen      │
└───────────────┘         │     rating (1-5)        │         └───────────────┘
                          └─────────────────────────┘
                                   ZWISCHENTABELLE
```

---

## Teil 2: Die Zwischentabelle

### Warum eine Zwischentabelle?

Ohne Zwischentabelle müsste man entweder:
- **In der Person-Tabelle mehrere Spalten:** `lieblingsessen1`, `lieblingsessen2`... (nicht skalierbar)
- **In der Essen-Tabelle mehrere Spalten:** `bewerter1`, `bewerter2`... (nicht skalierbar)

**Die Lösung:** Die Zwischentabelle "splittet" die N-zu-M-Beziehung in zwei 1-zu-N-Beziehungen:
- Person (1) → Rating (N)
- Essen (1) → Rating (N)

### Composite Primary Key

```sql
PRIMARY KEY (person_id, essen_id)
```

Die Kombination aus beiden Fremdschlüsseln bildet den Primärschlüssel. Das stellt sicher:
- Eine Person kann ein Gericht **nur einmal** bewerten
- Die Kombination Person+Gericht ist eindeutig

---

## Teil 3: Constraints für Referenzielle Integrität

### Was ist referenzielle Integrität?

> **Referenzielle Integrität** bedeutet: Jeder Fremdschlüsselwert muss auf einen existierenden Primärschlüssel verweisen.

Ohne Constraints könnte man:
- Ein Rating für eine nicht-existierende Person anlegen
- Ein Rating für ein nicht-existierendes Gericht anlegen
- Eine Person löschen, obwohl noch Ratings existieren

### FOREIGN KEY Constraints

```sql
CONSTRAINT fk_person
    FOREIGN KEY (person_id) 
    REFERENCES person_nm(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
```

| Klausel | Bedeutung |
|---------|-----------|
| `FOREIGN KEY (person_id)` | Definiert die Spalte als Fremdschlüssel |
| `REFERENCES person_nm(id)` | Verweist auf die Primärschlüssel-Spalte |
| `ON DELETE CASCADE` | Löscht alle Ratings, wenn die Person gelöscht wird |
| `ON UPDATE CASCADE` | Aktualisiert Ratings, wenn sich die Person-ID ändert |

### ON DELETE / ON UPDATE Optionen

| Option | Beschreibung | Verwendungszweck |
|--------|-------------|------------------|
| `CASCADE` | Abhängige Zeilen werden mitgelöscht/aktualisiert | Automatische Bereinigung |
| `RESTRICT` | Löschen/Aktualisieren wird verhindert | Schutz vor Datenverlust |
| `SET NULL` | Fremdschlüssel wird auf NULL gesetzt | Optionale Beziehungen |
| `NO ACTION` | Fehler wird geworfen (Standard) | Manuelle Kontrolle |

**Hinweis:** `SET NULL` funktioniert nur, wenn die Fremdschlüssel-Spalte NULL-Werte erlaubt (ohne `NOT NULL`).

### CHECK Constraints

```sql
CONSTRAINT chk_rating_range
    CHECK (rating >= 1 AND rating <= 5)
```

Der CHECK-Constraint stellt sicher, dass nur gültige Werte eingetragen werden:
- `rating = 3` → **OK**
- `rating = 0` oder `rating = 10` → **FEHLER**

Alternative Schreibweisen:
```sql
CHECK (rating BETWEEN 1 AND 5)
CHECK (rating IN (1, 2, 3, 4, 5))
```

---

## Teil 4: Indexe

### Was sind Indexe?

Ein Index ist eine zusätzliche Datenstruktur (meist B-Baum), die das schnelle Suchen und Sortieren ermöglicht.

**Wichtig:** SQLite erstellt **automatisch** Indexe für:
- `PRIMARY KEY` Spalten
- `UNIQUE CONSTRAINT` Spalten

### Manuelle Indexe

Manuelle Indexe sind sinnvoll für Spalten, die häufig in `WHERE`, `JOIN` oder `ORDER BY` verwendet werden.

```sql
-- Index für schnelle Suche nach Personen-Namen
CREATE INDEX idx_person_name ON person_nm(name);

-- Index für schnelle Suche nach Gerichten
CREATE INDEX idx_essen_name ON essen_nm(essen);
```

### Kosten/Nutzen-Analyse

| Vorteile | Nachteile |
|----------|-----------|
| Schnellere SELECT-Abfragen | Mehr Speicherplatz (~20-30%) |
| Schnellere JOINs | Langsamere INSERT/UPDATE/DELETE |
| Schnellere Sortierungen | Längere Index-Wartung |

### Regel: Wann Indexe erstellen?

✅ **Index erstellen:**
- Spalten in `WHERE`-Klauseln
- Spalten in `JOIN`-Bedingungen
- Spalten in `ORDER BY`
- Spalten mit häufigen Suchanfragen

❌ **Kein Index nötig:**
- Sehr kleine Tabellen (< 1000 Zeilen)
- Spalten mit vielen NULL-Werten
- Spalten mit sehr wenig unterschiedlichen Werten (z.B. BOOLEAN)

---

## Teil 5: Zusammenfassung

### Die N-zu-M-Struktur im Überblick

```sql
-- Haupttabelle 1
CREATE TABLE person_nm (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

-- Haupttabelle 2
CREATE TABLE essen_nm (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    essen TEXT NOT NULL UNIQUE
);

-- Zwischentabelle
CREATE TABLE person_essen_rating (
    person_id INTEGER NOT NULL,
    essen_id INTEGER NOT NULL,
    rating INTEGER NOT NULL,
    
    -- Composite PK
    PRIMARY KEY (person_id, essen_id),
    
    -- Foreign Keys mit CASCADE
    CONSTRAINT fk_person
        FOREIGN KEY (person_id) REFERENCES person_nm(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    
    CONSTRAINT fk_essen
        FOREIGN KEY (essen_id) REFERENCES essen_nm(id)
        ON DELETE CASCADE ON UPDATE CASCADE,
    
    -- Wertebereich
    CONSTRAINT chk_rating_range
        CHECK (rating >= 1 AND rating <= 5)
);

-- Optionale Indexe
CREATE INDEX idx_person_name ON person_nm(name);
CREATE INDEX idx_essen_name ON essen_nm(essen);
```

### Typische Abfragen

```sql
-- Alle Bewertungen mit Namen anzeigen
SELECT p.name, e.essen, r.rating
FROM person_essen_rating r
JOIN person_nm p ON r.person_id = p.id
JOIN essen_nm e ON r.essen_id = e.id;

-- Durchschnittsbewertung pro Gericht
SELECT e.essen, AVG(r.rating) as durchschnitt
FROM essen_nm e
LEFT JOIN person_essen_rating r ON e.id = r.essen_id
GROUP BY e.id, e.essen;
```

---

## Übungen

### Übung 1: Constraint-Fehler identifizieren
Welche der folgenden INSERT-Statements würden Fehler produzieren?

```sql
INSERT INTO person_essen_rating VALUES (999, 1, 3);  -- Fehler?
INSERT INTO person_essen_rating VALUES (1, 999, 3);  -- Fehler?
INSERT INTO person_essen_rating VALUES (1, 1, 10);   -- Fehler?
INSERT INTO person_essen_rating VALUES (1, 1, 5);    -- Fehler?
```

<details>
<summary>Lösung anzeigen</summary>

1. **FEHLER** - Person mit ID 999 existiert nicht (FK-Verletzung)
2. **FEHLER** - Gericht mit ID 999 existiert nicht (FK-Verletzung)
3. **FEHLER** - Rating 10 ist außerhalb 1-5 (CHECK-Verletzung)
4. **OK** - Wenn Person 1 und Gericht 1 existieren

</details>

### Übung 2: CASCADE-Verhalten
Was passiert bei folgendem Befehl?

```sql
DELETE FROM person_nm WHERE id = 1;
```

<details>
<summary>Lösung anzeigen</summary>

Durch `ON DELETE CASCADE` werden **automatisch alle Ratings** von Person 1 gelöscht, ohne dass eine Fehlermeldung erscheint.

**Alternative:** Bei `ON DELETE RESTRICT` würde der Löschvorgang verhindert werden, solange noch Ratings existieren.

</details>

---

## Weiterführende Ressourcen

- **Hausaufgabe:** `hausaufgabe-n-zu-m-bibliothek.sql` (Bibliothekssystem)
- **Musterlösung:** `hausaufgabe-n-zu-m-bibliothek-loesung.sql`
- **SQL-Datei:** `n-zu-m-beispiel.sql` (Vollständiges Beispiel mit allen Erklärungen)

---

*Erstellt für die Unterrichtseinheit N-zu-M-Beziehungen in SQL*
