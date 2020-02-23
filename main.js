// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, Menu } = require('electron')
const path = require('path')
const url = require('url')

const ipc = require('./main-process/ipc');

const env = process.env.NODE_ENV;

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  if (env === 'production') {
    const _url = url.format({
      pathname: path.join(__dirname, './my-app/build/index.html'),
      protocol: 'file:',
      slashes: true
    })
  
    mainWindow.loadURL(_url);
  } else {
    mainWindow.loadURL('http://localhost:3000/')
    mainWindow.webContents.openDevTools();
  }

  ipcMain.on('set-progress-bar', (event) => {
    let progress = 0;

    const timer = setInterval(() => {
      if (progress >= 1) {
        clearInterval(timer);
        event.sender.send('set-progress-bar-done', 'success');
      }
      progress += 0.1;
      mainWindow.setProgressBar(progress)
    }, 1000);
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})