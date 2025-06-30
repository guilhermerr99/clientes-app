@echo off
echo Iniciando Angular com suporte a OpenSSL legado...

:: Define a variável necessária para Node.js v17+
set NODE_OPTIONS=--openssl-legacy-provider

:: Inicia o servidor Angular
ng serve

:: Pausa para manter o terminal aberto após o erro (caso aconteça)
pause
