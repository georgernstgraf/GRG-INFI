-- ============================================================
-- LÖSUNGEN: Übung WHERE vs HAVING, COUNT, Self-JOIN, ORDER BY
-- 2ahwii – 30. April 2026
-- ============================================================

-- ============================================================
-- Block A: WHERE vs HAVING
-- ============================================================

-- A1: Ausführungsreihenfolge (als Kommentar)
-- 1. FROM
-- 2. WHERE
-- 3. GROUP BY
-- 4. HAVING
-- 5. SELECT
-- 6. ORDER BY

-- A2: Städte mit mindestens 4 Personen
SELECT stadt, COUNT(*) AS anzahl
FROM person
GROUP BY stadt
HAVING anzahl >= 4
ORDER BY stadt;
-- Ergebnis: Graz (5), Linz (4), Wien (8)

-- A3: WHERE und HAVING kombinieren
SELECT stadt, COUNT(*) AS anzahl
FROM person
WHERE stadt != 'Wien'
GROUP BY stadt
HAVING anzahl >= 2
ORDER BY stadt;
-- Ergebnis: Graz (5), Linz (4), Salzburg (3)
--
-- Erklärung:
-- WHERE filtert ZUERST alle Wien-Zeilen weg
-- GROUP BY fasst die restlichen Zeilen nach Stadt zusammen
-- HAVING filtert dann NUR Gruppen mit >= 2 Personen
-- Reihenfolge ist wichtig: WHERE kommt VOR GROUP BY!

-- ============================================================
-- Block B: COUNT(*) vs COUNT(spalte)
-- ============================================================

-- B1: Vorhersage und Abfrage
-- Vorhersage: total = 20 (alle Bestellungen), bewertete < 20 (manche haben NULL)
SELECT COUNT(*) AS total, COUNT(bewertung) AS bewertete
FROM bestellung;
-- Ergebnis: total=20, bewertete=14
-- COUNT(*) zählt alle 20 Zeilen
-- COUNT(bewertung) zählt nur die 14 Zeilen mit nicht-NULL-Bewertung

-- B2: Bewerte und unbewertete Bestellungen pro Kunde
SELECT kunde_id, COUNT(*) AS total, COUNT(bewertung) AS bewertete
FROM bestellung
GROUP BY kunde_id
ORDER BY kunde_id;
-- Ergebnis:
--   kunde 1: 3 total, 2 bewertet
--   kunde 2: 3 total, 3 bewertet
--   kunde 3: 3 total, 1 bewertet
--   kunde 4: 3 total, 2 bewertet
--   kunde 5: 3 total, 2 bewertet
--   kunde 6: 2 total, 2 bewertet
--   kunde 7: 2 total, 1 bewertet
--   kunde 8: 1 total, 1 bewertet

-- B3: Nur Kunden mit mehr bewerteten als unbewerteten Bestellungen
SELECT kunde_id, COUNT(*) AS total, COUNT(bewertung) AS bewertete
FROM bestellung
GROUP BY kunde_id
HAVING COUNT(bewertung) > COUNT(*) - COUNT(bewertung)
ORDER BY kunde_id;
-- Ergebnis: kunde 1, 2, 4, 5, 6, 8
--
-- Erklärung:
-- COUNT(bewertung) = bewertete Bestellungen
-- COUNT(*) - COUNT(bewertung) = unbewertete Bestellungen
-- HAVING filtert Gruppen, wo bewertet > unbewertet

-- ============================================================
-- Block C: Self-JOIN
-- ============================================================

-- C1: Doppelte E-Mails finden
SELECT
    p1.id AS p1_id,
    p1.vorname || ' ' || p1.nachname AS p1_name,
    p2.id AS p2_id,
    p2.vorname || ' ' || p2.nachname AS p2_name,
    p1.email
FROM person p1
JOIN person p2 ON p1.email = p2.email AND p1.id < p2.id
ORDER BY p1.id, p2.id;
-- Ergebnis:
--   Anna Müller <-> Clara Müller     (anna.mueller@mail.at)
--   Bernhard Gruber <-> Lukas Gruber (bernhard.gruber@mail.at)
--   Eva Bauer <-> Hans Bauer         (eva.bauer@mail.at)
--
-- Erklärung:
-- p1.id < p2.id verhindert: (a) dieselbe Person mit sich selbst
-- und (b) doppelte Paare (A,B und B,A)
-- || verkettet Strings in SQLite

-- C2: Mitarbeiter und ihr Chef
SELECT m1.name AS mitarbeiter, m2.name AS chef
FROM mitarbeiter m1
JOIN mitarbeiter m2 ON m1.chef_id = m2.id
ORDER BY m1.id;
-- Ergebnis: 8 Zeilen (alle außer Frau Dr. Huber, sie hat keinen Chef)
--
-- Erklärung:
-- INNER JOIN: Nur Mitarbeiter MIT Chef werden angezeigt
-- Frau Dr. Huber hat chef_id = NULL → fällt weg

-- C3: Gehalt im Vergleich zum Chef
SELECT
    m1.name AS mitarbeiter,
    m1.gehalt,
    m2.name AS chef,
    m2.gehalt AS chef_gehalt
FROM mitarbeiter m1
JOIN mitarbeiter m2 ON m1.chef_id = m2.id
WHERE m1.gehalt > m2.gehalt;
-- Ergebnis: leere Menge (niemand verdient mehr als sein Chef)
--
-- Das ist ein gutes Diskussionsergebnis! In dieser Firma verdient
-- jeder Mitarbeiter weniger als sein direkter Vorgesetzter.
-- Das ist in der Realität nicht immer so.

-- ============================================================
-- Block D: ORDER BY DESC + Mehrfachsortierung
-- ============================================================

-- D1: Personen nach Alter absteigend, bei Gleichstand Nachname aufsteigend
SELECT vorname, nachname, alter_jahre
FROM person
ORDER BY alter_jahre DESC, nachname ASC;
-- Ergebnis: 18-Jährige zuerst (Bauer, Fischer, Fischer, Huber, Huber)
-- dann 17-Jährige, 16-Jährige, 15-Jährige

-- D2: Bestellungen nach Datum DESC, dann Menge ASC
SELECT id, datum, menge, bewertung
FROM bestellung
ORDER BY datum DESC, menge ASC;
-- Neueste Bestellungen zuerst, bei gleichem Datum die kleinste Menge zuerst

-- D3: Drei-Spalten-Sortierung
SELECT vorname, nachname, stadt, alter_jahre
FROM person
ORDER BY stadt ASC, alter_jahre DESC, nachname ASC;
-- Zuerst nach Stadt (A-Z), innerhalb der Stadt nach Alter (älteste zuerst),
-- bei gleichem Alter nach Nachname (A-Z)
