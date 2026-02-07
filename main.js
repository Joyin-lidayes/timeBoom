// filepath: c:\Users\joyin\Desktop\joyinSoftware\timeBoom\main.js
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    icon: 'assets/image/logo.jpg',
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});