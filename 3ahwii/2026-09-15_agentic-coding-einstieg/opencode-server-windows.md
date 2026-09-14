# opencode als lokaler Server (Windows) – für Eifrige

> **Optional.** Grundlage: `opencode` läuft bereits (siehe [`README.md`](README.md)).
> Hier betreibst du **einen** opencode-Server im Hintergrund und dockst dich aus
> mehreren Terminals (und später per Telegram-Bot) daran an – wie im Profi-Setup.

## Warum ein Server?

`opencode` besteht intern aus **Server + Client**: Die TUI ist nur der Client.
Läuft der Server separat, teilen sich mehrere Clients dieselben Sessions und
denselben Projektzustand. Und nur ein laufender Server lässt sich vom
Telegram-Bot ([`opencode-telegram-bot.md`](opencode-telegram-bot.md)) ansteuern.

**Sicherheitsprinzip:** Der Server bindet **nur an `127.0.0.1`** (nicht aus dem
Netz erreichbar) und ist **passwortgeschützt** (HTTP Basic Auth). Das ist Pflicht,
damit niemand im Schul-WLAN deine Sessions öffnen kann.

## 1. Passwort setzen

Einmalig im Terminal (dauerhaft für dein Benutzerkonto):

```powershell
setx OPENCODE_SERVER_PASSWORD "dein-langes-passwort"
```

Terminal neu starten, damit die Variable greift. Prüfen:

```powershell
echo $env:OPENCODE_SERVER_PASSWORD
```

> Benutzername ist standardmäßig `opencode`; mit
> `setx OPENCODE_SERVER_USERNAME "deinname"` änderst du ihn.
> **Passwort nie in ein Repo committen und nicht in Screenshots zeigen.**

## 2. Server manuell starten und testen

```powershell
opencode serve --hostname 127.0.0.1 --port 4096
```

Läuft der Server, antwortet der Health-Endpunkt:

```powershell
curl.exe -u "opencode:$env:OPENCODE_SERVER_PASSWORD" http://127.0.0.1:4096/global/health
```

Erwartet: `{"healthy":true,...}`. Ohne Passwort antwortet der Server mit
`401 Unauthorized` – genau das ist der gewünschte Schutz. `Strg+C` beendet ihn.

## 3. Automatisch starten

### Variante A – Task Scheduler (einfach)

Läuft beim Anmelden **als du**, versteckt, ohne Fremdtool. Zuerst ein
Startskript `%USERPROFILE%\bin\opencode-server.ps1`:

```powershell
opencode serve --hostname 127.0.0.1 --port 4096
```

Dann die Aufgabe registrieren:

```powershell
$action  = New-ScheduledTaskAction -Execute "powershell.exe" `
  -Argument "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$env:USERPROFILE\bin\opencode-server.ps1`""
$trigger = New-ScheduledTaskTrigger -AtLogOn
$set     = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries
Register-ScheduledTask -TaskName "opencode-server" -Action $action `
  -Trigger $trigger -Settings $set -RunLevel Limited
```

Entfernen: `Unregister-ScheduledTask -TaskName "opencode-server" -Confirm:$false`

### Variante B – echter Windows-Dienst mit NSSM

[NSSM](https://nssm.cc/) macht aus jedem Programm einen Dienst:

```powershell
winget install -e --id NSSM.NSSM
```

In einer **Administrator**-PowerShell (voller Pfad, damit der Dienst `opencode`
findet):

```powershell
$oc = (Get-Command opencode).Source
nssm install opencode-server "$env:ComSpec" "/c `"$oc`" serve --hostname 127.0.0.1 --port 4096"
nssm set opencode-server AppEnvironmentExtra OPENCODE_SERVER_PASSWORD=dein-langes-passwort
nssm set opencode-server AppStdout "$env:USERPROFILE\opencode-server.log"
nssm set opencode-server AppStderr "$env:USERPROFILE\opencode-server.log"
nssm set opencode-server Start SERVICE_AUTO_START
nssm start opencode-server
```

> **Hinweis:** Dienste laufen standardmäßig als `LocalSystem` und finden dann
> dein global installiertes `opencode` (unter `%APPDATA%\npm`) **nicht**. Stelle
> den Dienst im NSSM-GUI (`nssm edit opencode-server` → *Log on*) auf **dein
> Benutzerkonto** um, oder trage den vollen Pfad ein.

Steuern: `nssm stop|restart opencode-server` · Entfernen: `nssm remove opencode-server confirm`

## 4. Shell-Aliase: mit `--dir` andocken

Beim Andocken an einen **geteilten** Server muss das Projektverzeichnis
mitgegeben werden – sonst arbeitet der Agent im Home-Verzeichnis statt im
Projekt:

- **CMD:** `%CD%`  ·  **PowerShell:** `$PWD`

Lege `%USERPROFILE%\bin` an, füge es dem **User-PATH** hinzu und erstelle dort
zwei Batch-Dateien – sie funktionieren in **CMD und PowerShell**:

`%USERPROFILE%\bin\oc.cmd`:

```bat
@echo off
opencode attach http://127.0.0.1:4096 --dir "%CD%" %*
```

`%USERPROFILE%\bin\ocr.cmd` (einmaliger Prompt ohne TUI):

```bat
@echo off
opencode run --attach http://127.0.0.1:4096 --dir "%CD%" %*
```

Das Passwort liest `opencode` automatisch aus `OPENCODE_SERVER_PASSWORD` – es
steht also **nicht** in den Skripten.

Optional (PowerShell-Profil `$PROFILE`), noch eindeutiger wegen `$PWD`:

```powershell
function oc  { opencode attach http://127.0.0.1:4096 --dir "$PWD" @args }
function ocr { opencode run --attach http://127.0.0.1:4096 --dir "$PWD" @args }
```

Nutzung (im Projektordner):

```powershell
oc                      # TUI an den Server andocken, Projekt = aktueller Ordner
ocr "erkläre @main.ts"  # einmaliger Prompt
```

## Ausblick

- **Mehrere Clients:** `oc` in beliebig vielen Terminals öffnen – alle teilen
  denselben Server und dieselben Sessions.
- **Web-UI:** `opencode web` startet Server + Browser-Oberfläche.
- **Telegram:** siehe [`opencode-telegram-bot.md`](opencode-telegram-bot.md).
