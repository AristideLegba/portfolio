const {app, BrowserWindow} = require('electron')
const url = require("url");
const path = require("path");

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    // width: 450,
    // height: 400,
    minWidth: 450,
    minHeight: 400,
    alwaysOnTop:true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // mainWindow.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, `/dist/portfolio/index.html`),
  //     protocol: "file:",
  //     slashes: true
  //   })
  // );
  mainWindow.loadURL('http://localhost:4200').

  //Set always on top


  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })




}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

;
//# sourceMappingURL=index.js.map