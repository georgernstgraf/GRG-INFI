# Aufgabe — SA-01: Blockchain als Datenbank

**Mitarbeit:** Die drei Beispiele sind Teil deiner Mitarbeitsnote. Beispiel 1
ist die Kernübung, Beispiel 2 ein Selbsttest, Beispiel 3 der Transfer auf eine
neue Situation. Abgabe nach Vorgabe deiner Lehrperson.

---

## Beispiel 1: Eine Kette Block für Block prüfen

Diese Kette liegt in einer Datenbank (Hashes gekürzt, Nonces erfunden):

| idx | prev_hash | merkle_root | nonce | hash     |
| --- | --------- | ----------- | ----- | -------- |
| 0   | `000…000` | `a41f…`     | 9812  | `000945…` |
| 1   | `000945…` | `7c02…`     | 856   | `0001b6…` |
| 2   | `0001b6…` | `e9d3…`     | 4791  | `0006a0…` |
| 3   | `0001b6…` | `51aa…`     | 2205  | `000d45…` |

**a)** Prüfe die Verweise: Welcher Block ist defekt, und woran genau sieht man
das ohne jedes Vorwissen über Kryptografie? Formuliere die Prüfregel in einem
Satz.

**b)** Jemand korrigiert `prev_hash` in Block 3 auf den richtigen Wert. Welche
zwei weiteren Felder dieses Blocks müssen danach neu berechnet werden, und
warum folgt daraus, dass auch Block 2 nicht mehr passt? Zeichne die
Abhängigkeitskette als Pfeile.

**c)** In einer relationalen Tabelle ändert ein `UPDATE` genau eine Zeile.
Erkläre in zwei bis drei Sätzen, warum in dieser Kette ein `UPDATE` auf
`betrag` in `tx` **nie** eine lokale Angelegenheit bleibt.

---

## Beispiel 2: Selbsttest im WÜ-Format

Vier Aussagen zur Blockchain als Datenbank. Kreuze **alle** zutreffenden an —
es können null bis vier sein.

| # | Aussage |
| - | ------- |
| A | Eine Blockchain ist eine append-only Datenbank: Zeilen werden angehängt, nicht geändert. |
| B | Ein Block-Hash sichert die Transaktionsdaten, weil im Hash die Beträge im Klartext stehen. |
| C | Die Merkle-Wurzel eines Blocks ändert sich, sobald ein einziger Betrag im Block geändert wird. |
| D | Ein 51-%-Angreifer muss nur einen Block neu minen, danach ist die Kette wieder gültig. |

**Musterlösung:** A und C sind richtig.

- **A richtig:** Die Kette wächst durch neue Blöcke; es gibt kein legitimes
  `UPDATE`/`DELETE`, nur ein Anhängen.
- **B falsch:** Im Hash stehen keine Beträge, sondern eine Prüfsumme über den
  Block-Header. Genau deshalb ist er eine Prüfsumme und kein Datenspeicher.
- **C richtig:** Die Wurzel wird aus allen Transaktions-Hashes gebildet; ein
  geänderter Betrag ändert sein Blatt und damit die Wurzel.
- **D falsch:** Der Folgeblock verweist auf den alten Hash. Wer einen Block
  ändert, muss ihn **und alle folgenden** neu minen — und dabei gegen die
  längste Kette der anderen antreten.

---

## Beispiel 3: Transfer — Blockchain oder relationale Datenbank?

Ein Sportverein will seine Mitgliedsbeiträge, Bankverbindungen und
Trainingsanwesenheit verwalten — 4.000 Mitglieder, ein Büro, eine
Steuerberaterin. Ein Logistikverband will dagegen belegen, dass eine
Kühlkette lückenlos eingehalten wurde — beteiligt sind 40 Speditionen, die
einander nicht trauen.

**a)** Entscheide für **beide** Fälle begründet: relationale Datenbank oder
Blockchain? Nenne je zwei Kriterien (z. B. Schreibrechte, Löschpflicht,
Konfliktparteien, Datenmenge) und begründe damit deine Wahl.

**b)** Im zweiten Fall schlägt jemand vor, die Temperaturmessungen „direkt
on-chain" zu speichern. Nenne das Kernproblem dieses Vorschlags (Stichwort:
Herkunft der Daten) und eine Alternative, die die Unveränderlichkeit trotzdem
nutzt.

**c)** Ein Angreifer kontrolliert 30 % der Rechenleistung. Erkläre, warum eine
Transaktion mit sechs Bestätigungen für ihn praktisch unumkehrbar ist — und
welche Bedingung sich ändert, wenn er 51 % erreicht.

---

## Hinweise zur Abgabe

- Antworten in ganzen Sätzen, Fachbegriffe aus dem Glossar verwenden.
- Zu Beispiel 1 gehört eine gezeichnete oder getippte Pfeilkette.
- Wer Code zeigen will: `deno task demo` im
  [Beispielprojekt](../../Beispielprojekte/sa-01-blockchain-als-datenbank/)
  ausführen und die Ausgabe zu Beispiel 1c mitbringen.
