# Aufgabe — SA-02: Die Datenbank hinter Facebook

**Mitarbeit:** Die drei Beispiele sind Teil deiner Mitarbeitsnote. Beispiel 1
ist die Kernübung, Beispiel 2 ein Selbsttest, Beispiel 3 der Transfer auf eine
neue Situation. Abgabe nach Vorgabe deiner Lehrperson.

---

## Beispiel 1: Umrechnen, nachrechnen, zuordnen

**a)** Zwei Angaben aus englischsprachigen Quellen. Übersetze **zuerst** ins
Deutsche (Schreibweise mit Zahlwort), dann rechne die Tagesmenge aus. Achte auf
die billion-Falle.

| # | Zitat | deutsch (pro Sekunde) | pro Tag |
| - | ----- | --------------------- | ------- |
| 1 | „over ten billion reads per second“ | | |
| 2 | „more than 1 billion operations per second“ | | |

Schreibe zu jeder Zeile den Rechenweg (`Wert × 86 400`) und das Ergebnis in
deutscher Schreibweise **und** als Zehnerpotenz.

**b)** In einem Übungssystem gilt die Shard-Regel `Shard = id mod 4`. Gegeben
sind diese Objekte und Kanten:

| Objekt | id |
| ------ | -- |
| Anna | 4 |
| Bea | 9 |
| Beas Foto | 22 |
| Seite „Schulzeitung“ | 31 |

| Kante | |
| ----- | - |
| Anna ist mit Bea befreundet | `(4, FRIEND, 9)` und `(9, FRIEND, 4)` |
| Anna mag Beas Foto | `(4, LIKE, 22)` |
| Seite mag Beas Foto | `(31, LIKE, 22)` |

Trage für jede der vier Kantenzeilen den Shard ein und begründe in einem Satz,
warum die beiden Freundschaftszeilen auf **verschiedenen** Shards landen.

**c)** Drei Transaktionen im selben System:

1. Anna und Bea werden Freunde (beide Kantenzeilen werden geschrieben).
2. Anna ändert ihr Profilbild (nur ihr Objekt 4 wird geändert).
3. Anna mag Beas Foto, und der Like-Zähler am Foto (Objekt 22) wird erhöht.

Entscheide für jede Transaktion: **ein** Shard oder **zwei** Shards? Welche
brauchen 2PC mit 2PL, welche nicht? Begründe mit der Lage der Zeilen, nicht mit
der Wichtigkeit der Transaktion.

---

## Beispiel 2: Selbsttest im WÜ-Format

Vier Aussagen zum Maschinenraum einer großen Datenbank. Kreuze **alle**
zutreffenden an — es können null bis vier sein.

| # | Aussage |
| - | ------- |
| A | Eine Lease läuft nach einer Frist ab; eine Sperre wird freigegeben. |
| B | Englisch „billion“ entspricht deutsch „Billion“. |
| C | MyRocks sperrt zusätzlich die Lücken zwischen zwei Zeilen. |
| D | RAMP garantiert atomare Sichtbarkeit, aber nicht Serialisierbarkeit. |

**Musterlösung:** A und D sind richtig.

- **A richtig:** Genau darin liegt der Unterschied. Eine Lease gilt für ein
  Zeitfenster und wird durch Herzschläge verlängert; eine Sperre wird gehalten,
  bis sie freigegeben wird. Fällt der Halter aus, muss die Lease ablaufen
  können — sonst gäbe es keinen neuen Leader.
- **B falsch:** Englisch „billion“ ist 10⁹ und heißt deutsch **Milliarde**.
  Deutsch „Billion“ (10¹²) heißt englisch „trillion“. Der Fehler ist Faktor
  1000.
- **C falsch:** Umgekehrt: **InnoDB** sperrt Zeilen und Lücken, MyRocks sperrt
  nur Zeilen. Deshalb braucht man in MyRocks für Eindeutigkeit über einen
  Präfix den vollen Primärschlüssel.
- **D richtig:** RAMP (Read-Atomic Multi-Partition) sorgt über Versionen dafür,
  dass ein Leser alle oder keine Änderung einer Transaktion sieht. Eine
  globale Ordnung aller Transaktionen liefert es nicht — dafür bräuchte es
  Serialisierbarkeit.

---

## Beispiel 3: Transfer — das Schul-Verwaltungssystem

Dein Abschlussprojekt verwaltet 1 200 Schüler:innen, 90 Lehrkräfte, Klassen,
Fächer, Noten und Anwesenheiten. Es läuft derzeit auf einer einzigen
SQLite-Datei und soll „wie Facebook“ skaliert werden — behauptet zumindest
jemand im Projektteam.

**a)** Wähle **eine** Tabelle aus, die du sharden würdest, nenne die
Shard-Spalte und begründe die Wahl mit der Shard-Regel aus Abschnitt 4
(Zusammenliegendes bleibt zusammen). Nenne außerdem eine Tabelle, die du
**nicht** sharden würdest, und warum.

**b)** Nach dem Sharden gibt es zwei Transaktionen:

1. Eine Schülerin wechselt die Klasse (Klassenzuordnung und Klassenliste).
2. Eine Lehrkraft trägt eine Note ein (eine Zeile, ein Fach, eine Schülerin).

Entscheide für beide, ob 2PC nötig ist, und begründe es mit der Lage der
Zeilen. Was müsste sich an der Modellierung ändern, damit Fall 2 doch
shard-übergreifend wird?

**c)** Die Frage aus der Stunde: „Wurde das Locking bei Facebook aufgegeben?“
Beantworte sie in drei bis fünf Sätzen und verwende dabei **alle vier**
Etagen aus Abschnitt 8 (im Shard, über Shards, beim Lesen, bei der Führung).
Nenne zu jeder Etage das Mittel, das dort greift.

**d)** Nimm Stellung zur Behauptung des Teammitglieds: „Wir sharden einfach,
dann ist alles schnell.“ Nenne zwei Dinge, die dabei kaputtgehen oder teuer
werden, und je eine Gegenmaßnahme.

---

## Hinweise zur Abgabe

- Antworten in ganzen Sätzen, Fachbegriffe aus dem
  [Glossar](https://github.com/georgernstgraf/GRG-INFI/blob/main/GLOSSAR.md)
  verwenden (Abschnitt „Verteilte Datenbanken“).
- Zu Beispiel 1 gehört der vollständige Rechenweg, nicht nur das Ergebnis.
- Zahlen immer mit Jahr oder Quelle versehen — eine Zahl ohne Jahr ist keine
  Angabe.
