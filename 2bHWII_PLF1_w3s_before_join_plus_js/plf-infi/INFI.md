# Praktische Leistungsfeststellung 2ahwii

## am 11. März 2025 INFI

## Thema 1: SQL Abfragen (CRUD: Insert / Select / Update / Delete)

## SQL Abfragen

**Vorbemerkung**: Die Aufgaben a-g werden mit der Datenbank "w3schools.sqlite"
durchgeführt. In die jeweiligen (am Anfang leeren) Dateien "a.sql", "b.sql" usw.
sind die entsprechenden Lösungen einzutragen.

**Selbstkontrolle**: Im Terminal - wechsle in das richtige Verzeichnis - das
Kommando "deno task test" zeigt Dir, welches sql bereits richtig ist.

**Schwierigkeit**: Die Aufgaben sind unterschiedlich schwer, suche Dir zu Beginn
die, welche Dir leicht fallen.

### Aufgabe a: Wie viele contacts enthalten den String `tt`?

Gib der Ausgabe die Überschrift `anzahl`!

### Aufgabe b: Alle contactname's, die den String `tt` enthalten

Sortiere die Ausgabe verkehrt alphabetisch!

### Aufgabe c: Jüngste Mitarbeiterin

Gib `firstname` sowie `lastname` aus!

### Aufgabe d: Orders ab incl. 1997

Wie viele Orders gab es ab dem Jahr 1997? Benenne die Spalte mit `ordersfrom1997`.

### Aufgabe e.sql: billigstes und teuerste Produkt

Gib `productname` sowie `price` des billigsten und des teuersten Produktes aus,
sortiert nach productname.

### Aufgabe f.sql: die letzten 5 unterschiedlichen (distinct) Städte im Alphabet

Aus `customers.city`. Ausgabe soll alphabetisch sortiert sein.

### Aufgabe g.sql: die 3 kundenreichsten Länder

Gesucht ist hier jeweils das `customers.country` sowie die Anzahl der Kunden in
diesem Land, limitiert auf 3 Ergebnisse.

## Datenbank Änderungen

Hier wird die Datenbank "quotations.sql" verwendet, welche philosophische Zitate
enthält.

**Hilfestellung**: Wenn die Datenbank durchs Herumprobieren zerschossen ist, hilft
`deno task fresh`, um die quotations Datenbank wieder in den Originalzustand zu bringen.

### Aufgabe h.sql (update): Drei Sterne für author `Jean-Paul Sartre`

Verfasse ein Statement, durch welches alle Aussagen von `Jean-Paul Sartre` ein
ranking von 3 (Sternen) bekommen!

### Aufgabe (insert) i.sql: Eigenes Lieblingszitat einfügen

SSIA

### Aufgabe j.sql: Alle Zitate von Ludwig Wittgenstein löschen

SSIA

### **Punkteschlüssel**

Bei jeder Aufgabe sind 8 Punkte möglich, dh. `0-36 / 37-45 / 46-54 / 55-63 / 64-72`

```text
  ____       _                ____      _ _                           _
 / ___|_   _| |_ ___  ___    / ___| ___| (_)_ __   __ _  ___ _ __    | |
| |  _| | | | __/ _ \/ __|  | |  _ / _ \ | | '_ \ / _` |/ _ \ '_ \   | |
| |_| | |_| | ||  __/\__ \  | |_| |  __/ | | | | | (_| |  __/ | | |  |_|
 \____|\__,_|\__\___||___/   \____|\___|_|_|_| |_|\__, |\___|_| |_|  (_)
                                                  |___/
```
