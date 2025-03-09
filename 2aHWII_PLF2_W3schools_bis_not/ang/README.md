# Praktische Leistungsfeststellung 2ahwii

## am 14. Jänner 2025

## Thema: einfache SQL Abfragen

(select, distinct, order by, and, or, not)

**Vorbemerkung**: Die Aufgaben a-i werden mit der Datenbank "persons.db"
durchgeführt. In die jeweiligen (am Anfang leeren) Dateien "a.sql", "b.sql" usw.
sind die entsprechenden Lösungen einzutragen. Damit Du siehst, wie das geht, ist
"a.sql" bereits gelöst.

**Selbstkontrolle**: Im Terminal - wechsle in das richtige Verzeichnis - das
Kommando "deno task test" zeigt Dir, welches sql bereits richtig ist.

**Schwierigkeit**: Die Aufgaben sind unterschiedlich schwer, suche Dir zu Beginn
die, welche Dir leicht fallen.

## Aufgabe a.sql: Maya

Gesucht sind die ID's aller Personen mit dem Firstname "Maya" in aufsteigender
Reihenfolge.

## Aufgabe b: Sternzeichen

Die Spalte "zodiacsign" enthält die Sternzeichen aller Personen. Gesucht ist
eine alphabetische Auflistung aller vorkommenden Sternzeichen.

## Aufgabe c: email von "Carla Voigt"

In "c.sql" ein statement, um die email Adresse zu ermitteln.

## Aufgabe d: weibliche Userinnen von gmail.com im Sternzeichen Fische (Pisces)

Hier ist der "displayname" gesucht, für "d.sql".

## e: Personen, welche 1995 geboren sind und nicht Jungfrau (Virgo)

gesucht sind hier alle Felder!

## f: Geburtsdatum und Displayname für alle männlichen Steinböcke (Capricorn)

Sortierung: jüngste zuerst

## g.sql: Gesucht sind die ID's aller jungen Personen

... welche im Jahr 2000 oder später geboren sind in absteigender Reihenfolge.

## h.sql: Fehler finden

Mir ist beim Erstellen der Datenbank "persons.db" ein Fehler unterlaufen und so
heissen manche Männer im displayname zB. "Frau Corvin Koderisch" oder wiederum
manche Frauen zB. "Herr Sanja Steinmetz".

Gesucht ist der displayname und die id von allen "male" Personen, deren
displayname mit "Frau" beginnt sowie alle "female" Personen, deren displayname
mit "Herr" beginnt, sortiert nach ID aufsteigend.

## i.sql: Anzahl unterschiedlicher männlicher Vornamen

### Punkteschlüssel

Bei jeder Aufgabe sind 5 Punkte möglich, dh. `0-20 / 21-25 / 26-30 / 31-35 / 36-40`

```text
  ____       _                ____      _ _                           _
 / ___|_   _| |_ ___  ___    / ___| ___| (_)_ __   __ _  ___ _ __    | |
| |  _| | | | __/ _ \/ __|  | |  _ / _ \ | | '_ \ / _` |/ _ \ '_ \   | |
| |_| | |_| | ||  __/\__ \  | |_| |  __/ | | | | | (_| |  __/ | | |  |_|
 \____|\__,_|\__\___||___/   \____|\___|_|_|_| |_|\__, |\___|_| |_|  (_)
                                                  |___/
```
