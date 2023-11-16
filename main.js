const { app, BrowserWindow } = require('electron')

function createWindow () {
  let win = new BrowserWindow({
    width: 900,
    height: 650,

  })



  win.loadFile('dist/app-baralho-pokemon/index.html')

  win.on('closed', () => win = null)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('before-quit', () => {
  win.removeAllListeners('close');
  win.close();
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})






