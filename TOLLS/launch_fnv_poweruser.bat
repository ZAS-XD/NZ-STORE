@echo off
title Fallout NV Win11 Ultimate Fix Launcher
echo [1] Skip Launcher (Steam)
echo [2] Win11 Compat + DX9
echo [3] NVSE Mode
echo [4] Verify game files Steam
echo [5] Kill launcher process jika stuck
set /p choice="Pilih (1-5): "

if "%choice%"=="1" (
    cd /d "C:\Program Files (x86)\Steam\steamapps\common\Fallout New Vegas"
    start steam://rungameid/22380 -skipLauncher -windowed
)

if "%choice%"=="2" (
    cd /d "C:\Program Files (x86)\Steam\steamapps\common\Fallout New Vegas"
    start /high /wait falloutnv.exe -skipLauncher -dx9 -windowed
)

if "%choice%"=="3" (
    cd /d "C:\Program Files (x86)\Steam\steamapps\common\Fallout New Vegas"
    if exist nvse_loader.exe (
        start nvse_loader.exe -skipLauncher
    ) else (
        echo Install NVSE dulu! Download: https://nvse.silverlock.org/
        pause
    )
)

if "%choice%"=="4" (
    start steam://validate/22380
)

if "%choice%"=="5" (
    taskkill /f /im FalloutNVLauncher.exe /im launcher.exe 2>nul
    echo Launcher process dibunuh.
)

pause
