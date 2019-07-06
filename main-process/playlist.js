const {BrowserWindow,ipcMain,app} = require('electron');
const path = require('path');
ipcMain.on('openPlaylist',(event)=>{
    //send data to renderer process asynchronously
    event.sender.send('replyPlaylist','hello world');
})