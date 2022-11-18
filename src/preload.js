// preload.js

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    changeConfig: (spanValue) => ipcRenderer.send('change-conf', spanValue),
    onCallback: (chanel, func) => ipcRenderer.on(chanel, (event, ...args) => func(event, ...args))
})
