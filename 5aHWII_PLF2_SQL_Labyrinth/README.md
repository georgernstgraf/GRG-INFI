# 5ahwii plf2, 15.1.2024

## Aufgabe 1: Nicht langweilige Filme

| Spalte       | Typ     |
| ------------ | ------- |
| id           | int     |
| film         | varchar |
| beschreibung | varchar |
| bewertung    | float   |

Id ist der Primärschlüssel (Spalte mit eindeutigen Werten) für diese Tabelle.
Jede Zeile enthält Informationen über den Namen eines Films, sein Genre und
seine Bewertung. Bewertung ist ein Float mit 2 Dezimalstellen im Bereich von [0,
10].

Schreibe eine Lösung, um die Filme mit einer ungeraden ID und einer
Beschreibung, die nicht "langweilig" ist, zu melden. Gib die Ergebnistabelle in
absteigender Reihenfolge der Bewertung zurück. Das Ergebnisformat ist im
folgenden Beispiel dargestellt.

Beispiel 1:

Eingabe: Kino-Tabelle:

| id | film           | beschreibung | bewertung |
| -- | -------------- | ------------ | --------- |
| 1  | Krieg          | tolles 3D    | 8.9       |
| 2  | Wissenschaft   | Fiktion      | 8.5       |
| 3  | irisch         | langweilig   | 6.2       |
| 4  | Eis Lied       | Fantasie     | 8.6       |
| 5  | House of Cards | Interessant  | 9.1       |

Ausgabe:

| id | film           | beschreibung | bewertung |
| -- | -------------- | ------------ | --------- |
| 5  | House of Cards | Interessant  | 9.1       |
| 1  | Krieg          | tolles 3D    | 8.9       |

Erläuterung: Es gibt drei Filme mit ungeraden IDs: 1, 3 und 5. Der Film mit der
ID = 3 ist langweilig, daher wird er nicht in die Antwort einbezogen.

## Aufgabe 2: Erweiterung der Labyrinth-Lösung

Im Ordner `2_recursion` findet sich eine fertig ausprogrammierte Lösung des
Labyrinth Problems. Diese kannst Du in einer wsl-bash z.B. mit
`./main.ts 5x5.json` starten und die Ausgabe begutachten. Die Aufgabe besteht
darin, anstatt der Punkte Pfeile auszugeben: (`←, →, ↑, ↓`). Beispiel:

Anstatt diesem:

```text
  1 2 3 4 5 6 7 8 9 
1 # # # . # # # # # 
2 # . . . #       # 
3 # . # # #   #   # 
4 # . # . . . #   # 
5 # . # . # . #   # 
6 # . . . # . #   # 
7 # # # # # . # # #
```

soll nunmehr dieses Muster ausgegeben werden:

```text
  1 2 3 4 5 6 7 8 9 
1 # # # ↓ # # # # # 
2 # ↓ ← ← #       # 
3 # ↓ # # #   #   # 
4 # ↓ # → → ↓ #   # 
5 # ↓ # ↑ # ↓ #   # 
6 # → → ↑ # ↓ #   # 
7 # # # # # ↓ # # #
```

## Aufgabe: Verbinde 2 Tabellen

Dies betrifft den Ordner 3_sql_join.

Tabelle: Person

| Spaltenname | Typ     |
| ----------- | ------- |
| personId    | int     |
| nachname    | varchar |
| vorname     | varchar |

personId ist der Primärschlüssel für diese Tabelle. Diese Tabelle enthält
Informationen über die ID einiger Personen und deren Vor- und Nachnamen.

Tabelle: Adresse

| Spaltenname | Typ     |
| ----------- | ------- |
| addressId   | int     |
| personId    | int     |
| city        | varchar |
| state       | varchar |

addressId ist der Primärschlüssel für diese Tabelle. Jede Zeile dieser Tabelle
enthält Informationen über die Stadt und das Bundesland einer Person mit ID =
personId.

Schreibe eine Lösung, um den Vornamen, Nachnamen, die Stadt und das Bundesland
jeder Person in der Person-Tabelle zu melden. Wenn die Adresse einer personId
nicht in der Adresse-Tabelle vorhanden ist, melde stattdessen null. Gib die
Ergebnistabelle in beliebiger Reihenfolge zurück. Das Ergebnisformat ist im
folgenden Beispiel dargestellt.

Beispiel 1:

Eingabe: Person-Tabelle:

| personId | lastname | firstname |
| -------- | -------- | --------- |
| 1        | Wang     | Allen     |
| 2        | Alice    | Bob       |

Adresse-Tabelle:

| addressId | personId | city          | state      |
| --------- | -------- | ------------- | ---------- |
| 1         | 2        | New York City | New York   |
| 2         | 3        | Leetcode      | California |

Ausgabe:

| vorname | nachname | city          | state    |
| ------- | -------- | ------------- | -------- |
| Allen   | Wang     | Null          | Null     |
| Bob     | Alice    | New York City | New York |

Erläuterung: Da es keine Adresse in der Adresse-Tabelle für die personId = 1
gibt, werden null für Stadt und Bundesland zurückgegeben. addressId = 1 enthält
Informationen über die Adresse der personId = 2.
