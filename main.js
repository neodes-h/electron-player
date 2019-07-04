const electron = require('electron');
const {app,BrowserWindow} = electron;
const path = require('path');

let win = null;

function singleInstance() {
    app.requestSingleInstanceLock();
    app.on('second-instance', (event) => {
        if (win) {
            win.isMinimized() && win.restore();
            win.focus();
        }
    })
}

function initApp(){
    singleInstance();

    function createMainWindow() {
        win = new BrowserWindow({
            width: 800,
            height: 600,
            title: app.getName(),
            icon: path.join(__dirname, 'assets/image/icon.png'),
            webPreferences: {
                nodeIntegration: true
            },
        })
        win.loadURL(path.join('file://', __dirname, 'index.html'));

        win.on('closed', () => {
            win = null;
        })
    }
    app.on('ready', createMainWindow);
    app.on('quit', () => {
        app.quit();
    })
}

initApp();