@echo off
echo Advanced launch untuk FNV stuck launcher Win11 (dengan NVSE check)...
cd /d "C:\Program Files (x86)\Steam\steamapps\common\Fallout New Vegas"
if exist "nvse_loader.exe" (
    echo Menggunakan NVSE...
    start nvse_loader.exe -skipLauncher
) else (
    echo NVSE tidak ditemukan, launch biasa...
    start /high falloutnv.exe -skipLauncher -dx9single -windowed
)
echo Jika masih loop: Install NVSE dari nvse.silverlock.org atau disable Steam overlay.
pause
