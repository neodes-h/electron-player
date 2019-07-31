const { BrowserWindow, ipcMain } = require('electron');
let lyrics = [
    "aaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbb",
    "cccccc",
    "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    "efeeeeeeee",
    "aaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbb",
    "cccccc",
    "dddddddddddddddddddddddd",
    "efeeeeeeee",
    "aaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbb",
    "cccccc",
    "dddddddddddddddddddddddd",
    "efeeeeeeee",
    "aaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbb",
    "cccccc",
    "dddddddddddddddddddddddd",
    "efeeeeeeee",
    "aaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbb",
    "cccccc",
    "dddddddddddddddddddddddd",
    "efeeeeeeee",
    "aaaaaaaaaaaaaaaaa",
    "bbbbbbbbbbbbbbb",
    "cccccc",
    "dddddddddddddddddddddddd",
    "efeeeeeeee"
]
ipcMain.on('requestLyrics', function (event, args) {
    event.sender.send('responseLyrics', lyrics);
})