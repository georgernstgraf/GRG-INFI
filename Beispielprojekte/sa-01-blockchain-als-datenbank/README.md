# Blockchain als Datenbank (SA-01)

Lauffähiges Referenzprojekt zur Prepared Lesson **SA-01 · Blockchain als
Datenbank**. Es zeigt die Kette dort, wo sie im Unterricht hingehört: als
**Datenbank** — zwei Tabellen, keine Zauberei, kein Netzwerk, keine Wallet.

## Voraussetzungen

Nur **Deno** (mit `node:sqlite` und `node:crypto`). Kein Node, kein `npm`, keine
`node_modules` (`"nodeModulesDir": "none"`). Die Kette liegt in-memory und wird
bei jedem Lauf neu gemint.

## Ausführen

```bash
deno task demo     # Kette anlegen → prüfen → manipulieren → neu prüfen
deno task test     # 10 Deno-Tests zu Hash, Merkle-Wurzel, Mining, Prüfung
```

## Was der Demo-Lauf zeigt

1. Drei Blöcke entstehen, jeder mit Proof of Work (3 Hex-Nullen).
2. `kettePruefen()` meldet `ok=true`.
3. Ein `UPDATE` auf einen Betrag lässt die Merkle-Wurzel nicht mehr passen.
4. Selbst wer den manipulierten Block **neu mint**, scheitert am Folgeblock:
   dessen `prev_hash` zeigt auf den alten Hash.

Die konkreten Hashes und Nonces ändern sich bei jedem Lauf (Zeitstempel und
gefundene Nonce) — die Struktur der Ausgabe bleibt gleich.

## Dateien

| Datei           | Zweck                                                       |
| --------------- | ----------------------------------------------------------- |
| `chain.ts`      | Hash, Merkle-Wurzel, Mining, Tabellen, `kettePruefen()`     |
| `chain_test.ts` | 10 Tests: Determinismus, Merkle-Abdeckung, Tamper-Erkennung |
| `demo.ts`       | der Ablauf aus der Lesson als ausführbares Skript           |

## Datenmodell

```sql
CREATE TABLE block (
  idx         INTEGER PRIMARY KEY,
  zeit        INTEGER NOT NULL,
  prev_hash   TEXT    NOT NULL,
  merkle_root TEXT    NOT NULL,
  nonce       INTEGER NOT NULL,
  hash        TEXT    NOT NULL
);

CREATE TABLE tx (
  block_idx INTEGER NOT NULL REFERENCES block(idx),
  position  INTEGER NOT NULL,
  von       TEXT    NOT NULL,
  an        TEXT    NOT NULL,
  betrag    REAL    NOT NULL,
  PRIMARY KEY (block_idx, position)
);
```

Ein Block ist eine Zeile, seine Transaktionen sind Zeilen in `tx`. Die
Unveränderlichkeit entsteht nicht durch ein `REVOKE UPDATE` — sie entsteht
daraus, dass jeder Block den Hash seines Vorgängers mitschleppt.

## Aufgabenbezug

Die Lesson verweist für **Beispiel 1–3** auf `aufgabe.md` im Lesson-Ordner. Wer
die Kette erweitern will, baut am besten hier weiter: eine Funktion
`ketteReparieren()` schreiben, die einen manipulierten Block **und alle
Folgeblöcke** neu minet — und messen, wie lange das bei Schwierigkeit 4 dauert.
