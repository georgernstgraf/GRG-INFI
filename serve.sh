#!/usr/bin/env bash
# Lokaler Live-Server für das GRG-INFI-Repo (Repo-Root als Document Root).
# Aufruf: ./serve.sh [PORT]   (Standard: 8000)
# Danach im Browser z. B. http://localhost:8000/ öffnen.
set -euo pipefail
PORT="${1:-8000}"
cd "$(dirname "$0")"
echo "GRG-INFI läuft auf http://localhost:${PORT}/  (Abbruch: Ctrl-C)"
exec python3 -m http.server "${PORT}"
