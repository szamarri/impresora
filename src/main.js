// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { spawn } = require("child_process");

let controlCodesValue = false; // Windows

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
    icon: __dirname + '/../Logo_onet_64x64.ico',
  });

  // ipcMain
  ipcMain.on('change-conf', (event, spanValue) => {
    console.log(spanValue)
    const webContents = event.sender

    let newSpanValue = "undefined"
    if (spanValue==="Windows") {
      newSpanValue = "AS400"
      controlCodesValue = true
    } else {
      newSpanValue = "Windows"
      controlCodesValue = false
    }
    executeScriptCommand()
    event.sender.send('updateDomSpan', newSpanValue);
    // const win = BrowserWindow.fromWebContents(webContents)
    //win.setTitle(title)
  })
  // and load the index.html of the app.
  mainWindow.loadFile("src/index.html");

  // Open the DevTools.
  //mainWindow.webContents.openDevTools()
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
  executeScriptCommand();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

function executeScriptCommand() {
  let command = ""
  if (controlCodesValue) {
    command = __dirname +"\\scriptAS400.ps1"
  } else {
    command = __dirname +"\\scriptWindows.ps1"
  }

  console.log(command)
  
  var child = spawn("powershell.exe",[command])
  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
    //res.send(data);
  });
  
  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  child.on("close", (code)=> {
    console.log(`child process exited with code ${code}`);
  });

}
