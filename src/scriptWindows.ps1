# script.ps1

$postParams = @{PortABaud='2';PortBBaud='2';PortAProt='3';PortBProt='3';PortAParity='0';PortBParity='0';PortAData='8';PortBData='8';PortAStop='1';PortBStop='1';PortADirection='2';PortBDirection='2';Timeout='10';ControlCodesData='0';Feedback='0';ESC='1';HeatCommand='1';Speed='1';TOF='1';SymbolSetCmd='1';STXV='0';MaxLengthCmd='0';OptFeedback='0';ProcSOHData='1';ControlCodes='0';SOH='5e';STX='7e';CR='0d';CNT='40';http_pwd='';submit='APPLY'}

Invoke-WebRequest -Uri http://10.200.10.42/forms/comm -Method POST -Body $postParams

Write-Host "> Done"
