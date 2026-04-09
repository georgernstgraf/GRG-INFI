-- ============================================================================
-- UNTERICHTSEINHEIT: N-zu-M-Beziehungen mit Zwischentabellen
-- Thema: Lieblingsgerichte-Datenbank mit Bewertungssystem
-- ============================================================================
-- 
-- BESTEHENDE 1-zu-N-StruktUR (zum Vergleich):
-- Eine Person hat genau EIN Lieblingsgericht
-- Ein Gericht kann von MEHREREN Personen als Favorit gewählt werden
--
-- ╔═══════════════╗         ╔═══════════════╗
-- ║    person     ║         ║     essen     ║
-- ╠═══════════════╣         ╠═══════════════╣
-- ║ PK id         ║────┐    ║ PK id         ║
-- ║    name       ║    │    ║    essen      ║
-- ║ FK id_lieb... ║────┘    ╚═══════════════╝
-- ╚═══════════════╝
--
-- NEUE N-zu-M-STRUKTUR (Ziel dieser Einheit):
-- Eine Person kann MEHRERE Gerichte bewerten
-- Ein Gericht kann von MEHREREN Personen bewertet werden
-- Zusätzlich: Bewertung auf Skala 1-5
--
-- ╔═══════════════╗         ╔═════════════════════════╗         ╔═══════════════╗
-- ║    person     ║         ║   person_essen_rating   ║         ║     essen     ║
-- ╠═══════════════╣         ╠═════════════════════════╣         ╠═══════════════╣
-- ║ PK id         ║────┐    ║ PK/FK person_id         ║    ┌────║ PK id         ║
-- ║    name       ║    └────║ PK/FK essen_id          ║────┘    ║    essen      ║
-- ╚═══════════════╝         ║     rating (1-5)        ║         ╚═══════════════╝
--                           ╚═════════════════════════╝
--                                    ZWISCHENTABELLE

-- ============================================================================
-- TEIL 1: AUFRÄUMEN (falls vorherige Testläufe vorhanden)
-- ============================================================================

DROP TABLE IF EXISTS person_essen_rating;
DROP TABLE IF EXISTS person_nm;
DROP TABLE IF EXISTS essen_nm;

-- ============================================================================
-- TEIL 2: GRUNDTABELLEN (Haupttabellen)
-- ============================================================================

CREATE TABLE person_nm (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    -- PRIMARY KEY: Eindeutige Identifikation jeder Person
    -- AUTOINCREMENT: Automatische ID-Vergabe durch SQLite
    
    name TEXT NOT NULL
    -- NOT NULL: Jede Person muss einen Namen haben
    -- CONSTRAINT: Es darf keine Person ohne Namen existieren
);

CREATE TABLE essen_nm (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    -- PRIMARY KEY: Eindeutige Identifikation jedes Gerichts
    -- Ermöglicht referenzielle Integrität in der Zwischentabelle
    
    essen TEXT NOT NULL UNIQUE
    -- NOT NULL: Jedes Gericht braucht einen Namen
    -- UNIQUE: Verhindert doppelte Gerichtseinträge (z.B. "Pizza" 2x)
);

-- ============================================================================
-- TEIL 3: ZWISCHENTABELLE (Kern der N-zu-M-Beziehung)
-- ============================================================================
--
-- DIE ZWISCHENTABELLE (auch: Verknüpfungstabelle, Junction Table, 
-- Assoziationstabelle) ist das Herzstück einer N-zu-M-Beziehung.
--
-- Funktion:
-- ---------
-- Ohne Zwischentabelle müsste man entweder:
-- - In der Person-Tabelle mehrere Spalten für Essen haben (nicht skalierbar)
-- - In der Essen-Tabelle mehrere Spalten für Personen haben (nicht skalierbar)
--
-- Die Zwischentabelle "splittet" die N-zu-M-Beziehung in zwei 1-zu-N-Beziehungen:
-- - Person (1) → Rating (N)
-- - Essen (1) → Rating (N)
--
-- Der COMPOSITE PRIMARY KEY (person_id + essen_id) stellt sicher:
-- - Eine Person kann ein Gericht NUR EINMAL bewerten
-- - Kombination aus Person+Gericht ist eindeutig

CREATE TABLE person_essen_rating (
    -- ═══════════════════════════════════════════════════════════════════════
    -- SPALTENDEFINITIONEN
    -- ═══════════════════════════════════════════════════════════════════════
    
    person_id INTEGER NOT NULL,
    -- Fremdschlüssel zur person_nm-Tabelle
    -- NOT NULL: Ein Rating MUSS zu einer Person gehören
    
    essen_id INTEGER NOT NULL,
    -- Fremdschlüssel zur essen_nm-Tabelle
    -- NOT NULL: Ein Rating MUSS zu einem Gericht gehören
    
    rating INTEGER NOT NULL,
    -- Bewertung auf einer Skala von 1 (schlecht) bis 5 (ausgezeichnet)
    
    -- ═══════════════════════════════════════════════════════════════════════
    -- CONSTRAINTS (Einschränkungen / Integritätsregeln)
    -- ═══════════════════════════════════════════════════════════════════════
    
    -- PRIMARY KEY: Zusammengesetzter Schlüssel aus beiden Fremdschlüsseln
    -- Stellt sicher, dass jede Person-Gericht-Kombination nur einmal vorkommt
    PRIMARY KEY (person_id, essen_id),
    
    -- FOREIGN KEY CONSTRAINT für Person
    -- Stellt referenzielle Integrität sicher: Rating kann nur für existierende Person existieren
    CONSTRAINT fk_person
        FOREIGN KEY (person_id) 
        REFERENCES person_nm(id)
        ON DELETE CASCADE      -- Löscht alle Ratings wenn Person gelöscht wird
        ON UPDATE CASCADE,     -- Aktualisiert Ratings wenn sich Person-ID ändert
    
    -- FOREIGN KEY CONSTRAINT für Essen
    -- Stellt referenzielle Integrität sicher: Rating kann nur für existierendes Gericht existieren
    CONSTRAINT fk_essen
        FOREIGN KEY (essen_id)
        REFERENCES essen_nm(id)
        ON DELETE CASCADE      -- Löscht alle Ratings wenn Gericht gelöscht wird
        ON UPDATE CASCADE,     -- Aktualisiert Ratings wenn sich Gericht-ID ändert
    
    -- CHECK CONSTRAINT: Bewertung muss zwischen 1 und 5 liegen
    CONSTRAINT chk_rating_range
        CHECK (rating >= 1 AND rating <= 5)
);

-- ============================================================================
-- TEIL 4: DETAILLIERTE ERKLÄRUNG DER CONSTRAINTS
-- ============================================================================
--
-- WAS IST REFERENZIELLE INTEGRITÄT?
-- ----------------------------------
-- Referenzielle Integrität bedeutet: 
-- "Jeder Fremdschlüsselwert muss auf einen existierenden Primärschlüssel verweisen"
--
-- OHNE diese Constraints könnte man z.B.:
-- - Ein Rating für eine nicht-existierende Person anlegen
-- - Ein Rating für ein nicht-existierendes Gericht anlegen
-- - Eine Person löschen, obwohl noch Ratings für sie existieren
-- - Ein Gericht löschen, obwohl noch Ratings dafür existieren
--
-- DIE ON DELETE/ON UPDATE KLAUSELN:
-- ---------------------------------
-- Sie definieren das Verhalten bei Änderungen an der referenzierten Tabelle
--
-- ON DELETE CASCADE:
--   → Wenn eine Person gelöscht wird, werden ALLE ihre Ratings automatisch gelöscht
--   → Alternative: ON DELETE RESTRICT (Löschen verhindern, wenn Ratings existieren)
--   → Alternative: ON DELETE SET NULL (person_id auf NULL setzen - hier NICHT möglich wg. NOT NULL)
--   → Alternative: ON DELETE NO ACTION (Standard: Fehler werfen)
--
-- ON UPDATE CASCADE:
--   → Wenn sich eine Person-ID ändert, werden alle Ratings automatisch aktualisiert
--   → Wichtig bei manueller ID-Korrektur oder Datenmigration
--   → Bei AUTOINCREMENT selten nötig, aber sicherheitshalber empfohlen
--
-- PRIMARY KEY (person_id, essen_id):
-- ----------------------------------
-- Warum person_id + essen_id als gemeinsamer PK?
-- Einzelne Spalten als PK funktionieren nicht:
-- - Nur person_id: Eine Person könnte nur EIN Gericht bewerten (verletzt N-zu-M)
-- - Nur essen_id: Ein Gericht könnte nur von EINER Person bewertet werden
--
-- Die Kombination ist eindeutig:
-- - Person 1 + Essen 1 = Eindeutige Zeile
-- - Person 1 + Essen 2 = Andere eindeutige Zeile
-- - Person 2 + Essen 1 = Wieder andere eindeutige Zeile
--
-- CHECK CONSTRAINT (rating >= 1 AND rating <= 5):
-- -----------------------------------------------
-- Stellt sicher, dass nur gültige Werte eingetragen werden
-- Hier: Bewertungsskala von 1 (schlecht) bis 5 (ausgezeichnet)
-- INSERT mit rating = 0 oder 10 → FEHLER
-- INSERT mit rating = 3 → OK

-- ============================================================================
-- TEIL 5: INDEXE (Leistungsoptimierung)
-- ============================================================================
--
-- WAS SIND INDEXE?
-- ----------------
-- Ein Index ist eine zusätzliche Datenstruktur (meist B-Baum), die das schnelle
-- Suchen und Sortieren in großen Tabellen ermöglicht.
--
-- WICHTIG: SQLite erstellt AUTOMATISCH Indexe für:
-- - PRIMARY KEY Spalten
-- - UNIQUE CONSTRAINT Spalten
--
-- MANUELLE INDEXE sind sinnvoll für:
-- - Spalten, die häufig in WHERE, JOIN oder ORDER BY verwendet werden
-- - Spalten, die häufig gesucht werden

-- Index 1: Personen-Name (schnelle Suche nach Namen)
CREATE INDEX IF NOT EXISTS idx_person_name ON person_nm(name);
-- Warum nützlich?
--   - Suche: "WHERE name = 'Max'" wird schneller
--   - Sortierung: "ORDER BY name" wird schneller
--   - Anzeige: Alphabetische Liste ohne Wartezeit
-- Kosten: Speicherplatz (~20-30% mehr), etwas langsameres INSERT/UPDATE

-- Index 2: Essen-Name (schnelle Suche nach Gerichten)
CREATE INDEX IF NOT EXISTS idx_essen_name ON essen_nm(essen);
-- Analog zu idx_person_name

-- HINWEIS: Die Zwischentabelle braucht KEINE zusätzlichen Indexe weil:
-- - person_id und essen_id sind bereits durch den PRIMARY KEY indexiert
-- - Der Composite PK (person_id, essen_id) deckt auch Single-Column-Queries ab:
--   - WHERE person_id = 1 → Nutzt den PK-Index
--   - WHERE person_id = 1 AND essen_id = 2 → Nutzt den PK-Index optimal

-- ZUSÄTZLICHER Index für Ratings (optional, für häufige Abfragen nach Best-Rated)
CREATE INDEX IF NOT EXISTS idx_rating_value ON person_essen_rating(rating);
-- Nützlich für:
--   - "Zeige alle Bewertungen mit 5 Sternen"
--   - "Durchschnittsberechnung pro Rating-Wert"
--   - Statistiken: Wie viele 1-Sterne vs 5-Sterne Bewertungen?

-- ============================================================================
-- TEIL 6: BEISPIELDATEN (Zum Testen und Demonstrieren)
-- ============================================================================

-- Personen einfügen
INSERT INTO person_nm (name) VALUES 
    ('Anna'),
    ('Ben'),
    ('Clara'),
    ('David'),
    ('Eva');

-- Gerichte einfügen
INSERT INTO essen_nm (essen) VALUES 
    ('Pizza'),
    ('Sushi'),
    ('Burger'),
    ('Salat'),
    ('Pasta'),
    ('Tacos');

-- Bewertungen einfügen (N-zu-M-Beziehungen)
-- Anna bewertet mehrere Gerichte
INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (1, 1, 5);  -- Anna: Pizza = 5
INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (1, 3, 4);  -- Anna: Burger = 4
INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (1, 5, 5);  -- Anna: Pasta = 5

-- Ben bewertet andere Gerichte
INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (2, 1, 3);  -- Ben: Pizza = 3
INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (2, 2, 5);  -- Ben: Sushi = 5
INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (2, 4, 2);  -- Ben: Salat = 2

-- Clara bewertet
INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (3, 1, 4);  -- Clara: Pizza = 4
INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (3, 2, 5);  -- Clara: Sushi = 5
INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (3, 3, 3);  -- Clara: Burger = 3
INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (3, 6, 5);  -- Clara: Tacos = 5

-- David bewertet
INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (4, 4, 5);  -- David: Salat = 5
INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (4, 5, 2);  -- David: Pasta = 2

-- Eva bewertet
INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (5, 3, 5);  -- Eva: Burger = 5
INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (5, 5, 4);  -- Eva: Pasta = 4
INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (5, 6, 3);  -- Eva: Tacos = 3

-- ============================================================================
-- TEIL 7: DEMONSTRATION DER CONSTRAINTS (Fehlerfälle)
-- ============================================================================
--
-- Folgende Statements sind auskommentiert, weil sie FEHLER produzieren würden.
-- Sie demonstrieren die Wirkung der Constraints.

-- FEHLER: Ungültiger Rating-Wert (außerhalb 1-5)
-- INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (1, 1, 10);
-- Fehlermeldung: CHECK constraint violation: chk_rating_range

-- FEHLER: Rating für nicht-existierende Person
-- INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (999, 1, 3);
-- Fehlermeldung: FOREIGN KEY constraint violation: fk_person

-- FEHLER: Rating für nicht-existierendes Gericht
-- INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (1, 999, 3);
-- Fehlermeldung: FOREIGN KEY constraint violation: fk_essen

-- FEHLER: Doppelte Bewertung (gleiche Person + gleiches Gericht)
-- INSERT INTO person_essen_rating (person_id, essen_id, rating) VALUES (1, 1, 4);
-- Fehlermeldung: PRIMARY KEY violation (person_id, essen_id)

-- ═══════════════════════════════════════════════════════════════════════════
-- CASCADE DEMONSTRATION (Auswirkungen auf abhängige Daten)
-- ═══════════════════════════════════════════════════════════════════════════

-- Löschen einer Person mit CASCADE:
-- DELETE FROM person_nm WHERE id = 1;  -- Löscht Anna
-- Ergebnis: ALLE Ratings von Anna werden AUTOMATISCH mitgelöscht

-- Löschen eines Gerichts mit CASCADE:
-- DELETE FROM essen_nm WHERE id = 1;  -- Löscht Pizza
-- Ergebnis: ALLE Pizza-Bewertungen (von Anna, Ben, Clara) werden gelöscht

-- ============================================================================
-- TEIL 8: BEISPIEL-ABFRAGEN (Typische Anwendungsfälle)
-- ============================================================================

-- Alle Bewertungen mit Personen- und Gerichtenamen anzeigen
SELECT 
    p.name AS person,
    e.essen AS gericht,
    r.rating AS bewertung
FROM person_essen_rating r
JOIN person_nm p ON r.person_id = p.id
JOIN essen_nm e ON r.essen_id = e.id
ORDER BY p.name, e.essen;

-- Durchschnittsbewertung pro Gericht
SELECT 
    e.essen AS gericht,
    ROUND(AVG(r.rating), 2) AS durchschnitt,
    COUNT(r.person_id) AS anzahl_bewertungen
FROM essen_nm e
LEFT JOIN person_essen_rating r ON e.id = r.essen_id
GROUP BY e.id, e.essen
ORDER BY durchschnitt DESC;

-- Welche Gerichte hat Anna mit 5 Sternen bewertet?
SELECT e.essen
FROM person_essen_rating r
JOIN essen_nm e ON r.essen_id = e.id
WHERE r.person_id = 1 AND r.rating = 5;

-- Personen, die Sushi mögen (Rating >= 4)
SELECT p.name, r.rating
FROM person_essen_rating r
JOIN person_nm p ON r.person_id = p.id
JOIN essen_nm e ON r.essen_id = e.id
WHERE e.essen = 'Sushi' AND r.rating >= 4;
