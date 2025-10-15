const { app, BrowserWindow } = require('electron');

let window;

app.whenReady().then(() => {
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    window.loadFile('factura.html');
});
