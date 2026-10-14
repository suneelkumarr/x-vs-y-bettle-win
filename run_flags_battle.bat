@echo off
title FLAGS WAR ARENA - 195+ LIVE BATTLE ROYALE
echo ========================================================
echo   Launching FLAGS WAR ARENA (1:1 Video Match)...
echo   Audio Announcer: 201 Real Country Voices Active
echo ========================================================
start /b python -m http.server 8080 >nul 2>&1
timeout /t 1 /nobreak >nul
start "" "http://localhost:8080/flags.html"
exit
