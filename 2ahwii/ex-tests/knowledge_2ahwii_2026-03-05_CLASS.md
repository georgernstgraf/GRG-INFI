# Klassenanalyse - Wissensüberprüfung 2ahwii (2026-03-05)

## Häufigste Fehler

### 1. Alias-Pflicht bei Self-JOINs (Betroffen: ~55% der Klasse)

**Problem:**
Viele Schüler haben nicht erkannt, dass Aliase bei Self-JOINs zwingend erforderlich sind, um die Tabelle in der JOIN-Bedingung eindeutig referenzieren zu können.

**Empfehlung:**
- Mehr praktische Beispiele mit Self-JOINs durchgehen
- Demonstrieren, was passiert, wenn man ohne Aliase arbeitet (Spaltenmehrdeutigkeit)
- Übungsaufgaben: Self-JOINs mit und ohne Aliase vergleichen

### 2. COUNT(*) vs COUNT(spalte) (Betroffen: ~36% der Klasse)

**Problem:**
Der Unterschied zwischen `COUNT(*)` (zählt alle Zeilen inkl. NULL) und `COUNT(spalte)` (zählt nur Nicht-NULL-Werte) wurde nicht verstanden.

**Empfehlung:**
- Praktische Demonstration mit einer Tabelle, die NULL-Werte enthält
- Konkrete Beispiele: "Was zählt COUNT(*) bei 5 Zeilen, wovon eine NULL hat?"
- Visualisierung der Ergebnisse

### 3. DESC vs ASC Verwechslung (Betroffen: ~27% der Klasse)

**Problem:**
ASC (ascending = aufsteigend) und DESC (descending = absteigend) wurden verwechselt. Auch wurde DESC fälschlicherweise als Standard angesehen.

**Empfehlung:**
- Merkregel einführen: "DESC wie 'descend' = abwärts = absteigend"
- Standardverhalten (ASC ist Standard) explizit erwähnen
- Praxisbeispiele: "Sortiere die Noten von der besten zur schlechtesten (DESC)"

### 4. NULL-Verhalten bei LEFT JOIN (Betroffen: ~18% der Klasse)

**Problem:**
Das Verhalten von LEFT JOIN bei NULL-Werten wurde nicht vollständig verstanden - dass auch Datensätze ohne Übereinstimmung angezeigt werden.

**Empfehlung:**
- VISUALISIERUNG mit Venn-Diagrammen
- Konkretes Beispiel: "Mitarbeiter ohne Manager (CEO) - was passiert?"
- Vergleich INNER JOIN vs LEFT JOIN in Tabellenform

### 5. Unvollständige SQL-Abfragen in Freitext (Betroffen: ~45% der Klasse)

**Problem:**
Viele Schüler gaben nur Teilantworten oder brachen SQL-Statements mitten ab. Erklärungen waren oft oberflächlich.

**Empfehlung:**
- Übungsformat: "Komplette SQL-Abfrage + Erklärung"
- Peer-Review: Schüler bewerten gegenseitig die Vollständigkeit
- Checkliste: "Hast du alle Teile der Frage beantwortet?"

## Stärken der Klasse

### 1. DELETE-Befehl sehr gut verstanden
Fast alle Schüler wussten, dass DELETE mit WHERE selektiv löscht und ohne WHERE alle Zeilen entfernt. Auch die Kombination mit ROLLBACK wurde gut verstanden.

### 2. Aggregatfunktionen
COUNT, SUM, AVG, MAX, MIN wurden von der Mehrheit korrekt identifiziert.

### 3. GROUP BY / HAVING Konzept
Die grundlegende Funktionsweise von GROUP BY wurde von den meisten verstanden.

### 4. Self-JOIN Anwendungsfall
Die Schüler erkannten, wann ein Self-JOIN sinnvoll ist (z.B. bei Mitarbeiter-Manager-Beziehungen).

## Empfehlungen für den Unterricht

### Kurzfristig (nächste 2 Wochen)

1. **Nachbesprechung der Prüfung:**
   - Gemeinsame Analyse der häufigsten Fehler
   - Korrektur der schwierigsten Fragen an der Tafel

2. **Zusatzübung zu Aliases:**
   - Worksheet mit 5 Self-JOIN-Aufgaben
   - Fokus auf korrekte Alias-Verwendung

3. **COUNT-Demonstration:**
   - Live-Coding: Tabelle mit NULL-Werten erstellen
   - COUNT(*) vs COUNT(spalte) live vergleichen

### Mittelfristig (nächster Monat)

1. **Praxisprojekt:**
   - Kleines Projekt mit realer Datenbank
   - Anwendung aller gelernten Konzepte (JOINs, Aggregationen, DELETE)

2. **Übungsblätter:**
   - Wöchentliche kurze Übungen zu den Schwachstellen
   - Automatisiertes Feedback möglich

3. **Peer-Teaching:**
   - Schüler mit Note 1 erklären Schülern mit Note 4-5
   - Festigt das Wissen bei beiden Seiten

### Langfristig (Semester)

1. **Kontinuierliche Wiederholung:**
   - Jede Stunde 5 Minuten "SQL-Warmup"
   - Zufällige Fragen aus dem Prüfungsstoff

2. **Praktische Anwendungen:**
   - Mehr echte Datenbankprojekte
   - Verbindung zu anderen Fächern (z.B. Datenanalyse)

3. **Dokumentation:**
   - SQL-Cheatsheet von den Schülern erstellen lassen
   - Als Referenz für Prüfungen

## Fazit

Die Klasse zeigt ein solides Grundverständnis der SQL-Konzepte, hat aber bei der Detailgenauigkeit und der praktischen Anwendung noch Verbesserungspotenzial. Besonders die korrekte Syntax und das vollständige Beantworten von Fragen müssen geübt werden. Mit gezielten Übungen zu den identifizierten Schwachstellen sollte sich die Leistung im Durchschnitt deutlich steigern lassen.
