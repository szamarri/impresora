# Configuraciones impresora

Cambia configuraciones de impresoras de etiquetas

Si es necesario cambiar la ruta de la impresora esto se debe hacer en los archivos  `*.sp1` de la carpeta `src`

* src/scriptAS400.sp1
* src/scriptWindows.sp1

Se puede hacer un acceso directo para moverlo a el Escritorio del script `printconf.cmd`.

## Requisitos

* node.js
* electron js
* powershell
* Invoke-WebRequest (cURL para Windows)

## Links de interes

* [Stackoverflow - Pure JavaScript Send POST Data Without a Form](https://stackoverflow.com/questions/6396101/pure-javascript-send-post-data-without-a-form)
* [Sendign and retrive form data](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)
* [Using XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
* [icon](https://medium.com/fantageek/changing-electron-app-icon-acf26906c5ad)

## Cosas por hacer

```js
function initFuncReav() {
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "http://10.200.10.42/comm.html");
  req.setRequestHeader("Accept", "*/*");
  req.setRequestHeader("Content-Type", "text/html");
  req.setRequestHeader("Access-Control-Allow-Origin", "*");
  req.send();
}

function sendPostRequestnam() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", pathUri, true);
    xhr.setRequestHeader('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8');
    xhr.setRequestHeader('Accept-Encoding', 'gzip,deflate');
    xhr.setRequestHeader('Accept-Language', 'es-MX,es;q=0.8,en-US;q=0.5,en;q=0.3');
    xhr.setRequestHeader('Connection', 'keep-alive');
    xhr.setRequestHeader('Content-Length', '362');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Host', '10.200.10.42');
    xhr.setRequestHeader('Origin', 'http://10.200.10.42');
    xhr.setRequestHeader('Referer', 'http://10.200.10.42/comm.html');
    xhr.setRequestHeader('Upgrade-Insecure-Request', '1');
    xhr.setRequestHeader('User-Agent', 'application/x-www-form-urlencoded');
    xhr.send(JSON.stringify({
        PortABaud: '2',
        PortBBaud: '2',
        PortAProt: '3',
        PortBProt: '3',
        PortAParity: '0',
        PortBParity: '0',
        PortAData: '8',
        PortBData: '8',
        PortAStop: '1',
        PortBStop: '1',
        PortADirection: '2',
        PortBDirection: '2',
        Timeout: '10',
        ControlCodesData: '0',
        Feedback: '0',
        ESC: '1',
        HeatCommand: '1',
        Speed: '1',
        TOF: '1',
        SymbolSetCmd: '1',
        STXV: '0',
        MaxLengthCmd: '0',
        OptFeedback: '0',
        ProcSOHData: '1',
        ControlCodes: '1',
        SOH: '5e',
        STX: '7e',
        CR: '0d',
        CNT: '40',
        http_pwd: '',
        submit: 'APPLY'
    }));
}

```