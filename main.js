// filepath: c:\Users\joyin\Desktop\joyinSoftware\timeBoom\main.js
const { app, BrowserWindow, Menu } = require('electron');

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

  // 添加右键菜单
  win.webContents.on('context-menu', (event, params) => {
    const isAlwaysOnTop = win.isAlwaysOnTop();
    const menu = Menu.buildFromTemplate([
      {
        label: isAlwaysOnTop ? '取消置顶' : '置顶',
        click: () => win.setAlwaysOnTop(!isAlwaysOnTop)
      }
    ]);
    menu.popup();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});