const {BrowserWindow,ipcMain} = require('electron');
const lyrics = [
    { time: 001, data: 'abcdefg'},
    { time: 002, data: 'bcdefgi' },
    { time: 003, data: 'cdefgij' },
    { time: 004, data: 'defgijk' },
    { time: 005, data: 'efgijkl' },
    { time: 001, data: 'abcdefg' },
    { time: 002, data: 'bcdefgi' },
    { time: 003, data: 'cdefgij' },
    { time: 004, data: 'defgijk' },
    { time: 005, data: 'efgijkl' },
    { time: 001, data: 'abcdefg' },
    { time: 002, data: 'bcdefgi' },
    { time: 003, data: 'cdefgij' },
    { time: 004, data: 'defgijk' },
    { time: 005, data: 'efgijkl' },
    { time: 001, data: 'abcdefg' },
    { time: 002, data: 'bcdefgi' },
    { time: 003, data: 'cdefgij' },
    { time: 004, data: 'defgijk' },
    { time: 005, data: 'efgijkl' },
]
ipcMain.on('requestLyrics',function(event,args){
    event.sender.send('responseLyrics',lyrics);
})