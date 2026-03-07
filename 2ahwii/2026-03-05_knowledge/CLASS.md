# Klassenrückmeldung Wissensüberprüfung 2ahwii vom 2026-03-05

## Überblick

- Es wurden 11 Abgaben bewertet.
- Der Klassenschnitt liegt bei 56,9 von 78 Punkten, also bei 73,0 %.
- Im Multiple-Choice-Teil war die Klasse insgesamt deutlich stärker als im Freitextteil.
- Die offenen Aufgaben zeigen, dass viele Grundideen verstanden wurden, die schriftliche Ausformulierung und die Vollständigkeit aber oft noch nicht ausreichen.

## Was gut funktioniert hat

- DELETE-Grundlagen, Subqueries und die Grundidee von GROUP BY/HAVING wurden im Multiple-Choice-Teil mehrheitlich sicher erkannt.
- Auch der Unterschied zwischen INNER JOIN und LEFT JOIN war bei vielen vorhanden.
- Mehrere Abgaben zeigten, dass die Klasse prinzipiell verstanden hat, warum man bei Duplikaten und bei Mitarbeiter-Manager-Beziehungen mit einer Tabelle gegen sich selbst arbeitet.

## Häufige Fehlerbilder

- Besonders oft gab es Unsicherheiten bei Self-JOIN-Details: Alias-Pflicht, zulässige Syntaxvarianten und die Frage, welche Abfragen tatsächlich korrekt sind.
- Die DELETE-Aufgabe mit `max(id)` wurde mehrfach falsch interpretiert. Mehrere Antworten vermischten "höchste ID löschen" und "ersten Datensatz behalten".
- Beim Unterschied zwischen `COUNT(*)` und `COUNT(spalte)` war die Konzeptklarheit in mehreren Arbeiten zu schwach.
- `ORDER BY ... DESC` wurde überraschend oft nicht sicher beherrscht, vor allem in Verbindung mit Mehrfachsortierung.
- In den Freitextaufgaben fehlten häufig vollständige SQL-Abfragen. Teilweise waren nur Stichworte vorhanden, obwohl ausdrücklich Beispiele verlangt waren.
- Bei GROUP BY und HAVING wurde der Unterschied zu WHERE oft nur knapp oder unpräzise erklärt.
- In der Mitarbeiter-Manager-Aufgabe fehlte öfter die vollständige LEFT-JOIN-Abfrage oder die Erklärung, was bei `manager_id = NULL` passiert.

## Didaktische Empfehlungen

- Self-JOIN noch einmal mit zwei klar getrennten Beispielen wiederholen: einmal Duplikate in `person`, einmal Hierarchien in `mitarbeiter`.
- Den Unterschied zwischen WHERE und HAVING mit Ausführungsreihenfolge visualisieren: Zeilen filtern vor der Gruppierung, Gruppen filtern nach der Gruppierung.
- `COUNT(*)`, `COUNT(spalte)` und `NULL` an einem kleinen Beispieldatensatz gemeinsam durchspielen.
- Bei Freitextfragen stärker ein Antwortschema einüben: zuerst passende SQL-Abfrage, dann Erklärung jeder wichtigen Klausel, dann Sonderfall wie `NULL`, DISTINCT oder HAVING.
- Vor der nächsten Überprüfung kurze Übungsphasen mit "Welche Aussage ist korrekt und warum?" einbauen, damit Detailfragen zu Syntax und Semantik sicherer werden.
