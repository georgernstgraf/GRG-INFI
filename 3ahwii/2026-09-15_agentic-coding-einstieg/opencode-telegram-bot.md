# opencode-Telegram-Bot (Windows) – für Eifrige

> **Optional.** Steuere deinen Coding-Agenten vom Handy: Prompt senden,
> Ergebnisse und Diffs als Datei erhalten, Sessions wechseln – alles über
> Telegram. Der Bot läuft **auf deinem PC**, spricht mit dem **lokalen**
> opencode-Server und der Telegram-API. Keine offenen Ports.

Voraussetzung: ein laufender opencode-Server auf `127.0.0.1:4096` mit Passwort –
siehe [`opencode-server-windows.md`](opencode-server-windows.md).

**Sicherheit:** Der Bot akzeptiert **nur deine** Telegram-User-ID (Whitelist).
Der Bot-Token ist ein Geheimnis wie ein Passwort: nie committen, nicht teilen.
Bei Verdacht auf Leak den Token bei @BotFather mit `/revoke` erneuern.

## 1. Bot bei Telegram anlegen

1. [@BotFather](https://t.me/BotFather) öffnen, `/newbot` senden, Namen wählen.
2. Den **Bot-Token** kopieren (Form `123456:ABC-DEF...`).
3. [@userinfobot](https://t.me/userinfobot) anschreiben → liefert deine
   **numerische User-ID**.

## 2. Bot starten und einrichten

```powershell
npx @grinev/opencode-telegram-bot@latest
```

Beim ersten Start führt ein Assistent durch die Einrichtung:

| Frage | Antwort |
|-------|---------|
| Sprache | `de` |
| Bot-Token | Token aus Schritt 1 |
| User-ID | deine numerische ID |
| OpenCode-API-URL | `http://127.0.0.1:4096` |
| Server-Benutzer | `opencode` (oder dein `OPENCODE_SERVER_USERNAME`) |
| Server-Passwort | dein `OPENCODE_SERVER_PASSWORD` |

Danach den Bot in Telegram öffnen und eine Nachricht senden.

Alternativ die Konfigurationsdatei direkt bearbeiten:
`%APPDATA%\opencode-telegram-bot\.env`

```dotenv
TELEGRAM_BOT_TOKEN=123456:ABC-DEF...
TELEGRAM_ALLOWED_USER_ID=123456789
OPENCODE_API_URL=http://127.0.0.1:4096
OPENCODE_SERVER_USERNAME=opencode
OPENCODE_SERVER_PASSWORD=dein-langes-passwort
OPENCODE_MODEL_PROVIDER=opencode
OPENCODE_MODEL_ID=big-pickle
```

Neu konfigurieren: `opencode-telegram config`

## 3. Automatisch starten

```powershell
npm install -g @grinev/opencode-telegram-bot
opencode-telegram start --daemon
opencode-telegram status
```

Oder – wie den Server – als Task-Scheduler-Aufgabe bzw. Windows-Dienst
(siehe [`opencode-server-windows.md`](opencode-server-windows.md)).

## 4. Wichtigste Befehle

| Befehl | Wirkung |
|--------|---------|
| `/status` | Server, Projekt, Session, Modell |
| `/new` | neue Session |
| `/sessions` | Sessions durchblättern/wechseln |
| `/projects` | Projekt wechseln |
| `/worktree` | Git-Worktree wechseln |
| `/opencode_start` · `/opencode_stop` | lokalen Server starten/stoppen |
| `/help` | alle Befehle |

Jede normale Textnachricht geht als Prompt an den Agenten.

## Typische Stolpersteine

- **Bot antwortet nicht:** Läuft der Server? Erst lokal `oc` testen; Logs unter
  `%APPDATA%\opencode-telegram-bot\logs`.
- **„Unauthorized":** `OPENCODE_SERVER_PASSWORD` im Bot muss zum Server passen.
- **Falsches Projekt:** Der Bot hat eine eigene Projektauswahl (`/projects`),
  unabhängig von `--dir` in den Shell-Aliasen.
