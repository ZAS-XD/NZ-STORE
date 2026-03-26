@echo off
echo Meluncurkan Fallout New Vegas dengan fix Win11 launcher loop + compat mode...
cd /d "C:\Program Files (x86)\Steam\steamapps\common\Fallout New Vegas"
PowerShell -Command "Start-Process 'falloutnv.exe' -ArgumentList '-skipLauncher','-dx9single','-windowed' -Verb RunAs -WorkingDirectory $PWD"
echo Jalankan sebagai admin manual jika PowerShell block.
echo Coba ini jika yang pertama gagal. Right-click bat file ini dan "Run as administrator".
pause
