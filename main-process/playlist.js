const {BrowserWindow,ipcMain,app} = require('electron');
const path = require('path');
let playlistWin = null;
let data = [
    {
        id: 0,
        name: 'song12222222222222222222222aaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbb  ',
        singer: 'singer1',
        length: 623,
    },
    {
        id: 1,
        name: 'song2',
        singer: 'singer2',
        length: 620,
    },
    {
        id: 2,
        name: 'song3',
        singer: 'singer3',
        length: 609,
    },
    {
        id: 3,
        name: 'song4',
        singer: 'singer4',
        length: 622,
    },
    {
        id: 4,
        name: 'song5',
        singer: 'singer5',
        length: 627,
    },
    {
        id: 5,
        name: 'song6',
        singer: 'singer6',
        length: 626,
    },
    {
        id: 0,
        name: 'song12222222222222222222222aaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbb  ',
        singer: 'singer1',
        length: 623,
    },
    {
        id: 1,
        name: 'song2',
        singer: 'singer2',
        length: 620,
    },
    {
        id: 2,
        name: 'song3',
        singer: 'singer3',
        length: 609,
    },
    {
        id: 3,
        name: 'song4',
        singer: 'singer4',
        length: 622,
    },
    {
        id: 4,
        name: 'song5',
        singer: 'singer5',
        length: 627,
    },
    {
        id: 5,
        name: 'song6',
        singer: 'singer6',
        length: 626,
    },
    {
        id: 0,
        name: 'song12222222222222222222222aaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbb  ',
        singer: 'singer1',
        length: 623,
    },
    {
        id: 1,
        name: 'song2',
        singer: 'singer2',
        length: 620,
    },
    {
        id: 2,
        name: 'song3',
        singer: 'singer3',
        length: 609,
    },
    {
        id: 3,
        name: 'song4',
        singer: 'singer4',
        length: 622,
    },
    {
        id: 4,
        name: 'song5',
        singer: 'singer5',
        length: 627,
    },
    {
        id: 5,
        name: 'song6',
        singer: 'singer6',
        length: 626,
    },
    {
        id: 0,
        name: 'song12222222222222222222222aaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbb  ',
        singer: 'singer1',
        length: 623,
    },
    {
        id: 1,
        name: 'song2',
        singer: 'singer2',
        length: 620,
    },
    {
        id: 2,
        name: 'song3',
        singer: 'singer3',
        length: 609,
    },
    {
        id: 3,
        name: 'song4',
        singer: 'singer4',
        length: 622,
    },
    {
        id: 4,
        name: 'song5',
        singer: 'singer5',
        length: 627,
    },
    {
        id: 5,
        name: 'song6',
        singer: 'singer6',
        length: 626,
    },
    {
        id: 0,
        name: 'song12222222222222222222222aaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbb  ',
        singer: 'singer1',
        length: 623,
    },
    {
        id: 1,
        name: 'song2',
        singer: 'singer2',
        length: 620,
    },
    {
        id: 2,
        name: 'song3',
        singer: 'singer3',
        length: 609,
    },
    {
        id: 3,
        name: 'song4',
        singer: 'singer4',
        length: 622,
    },
    {
        id: 4,
        name: 'song5',
        singer: 'singer5',
        length: 627,
    },
    {
        id: 5,
        name: 'song6',
        singer: 'singer6',
        length: 626,
    },
    {
        id: 0,
        name: 'song12222222222222222222222aaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbb  ',
        singer: 'singer1',
        length: 623,
    },
    {
        id: 1,
        name: 'song2',
        singer: 'singer2',
        length: 620,
    },
    {
        id: 2,
        name: 'song3',
        singer: 'singer3',
        length: 609,
    },
    {
        id: 3,
        name: 'song4',
        singer: 'singer4',
        length: 622,
    },
    {
        id: 4,
        name: 'song5',
        singer: 'singer5',
        length: 627,
    },
    {
        id: 5,
        name: 'song6',
        singer: 'singer6',
        length: 626,
    },
]
function createPlaylistWin(){
    playlistWin = new BrowserWindow({
        width: 300,
        minWidth:200,
        height: 600,
        minHeight: 600,
        frame:false,
        fullscreenable: false,
        maximizable: false,
        backgroundColor: '#808080',
        show:true,
        parent:BrowserWindow.getFocusedWindow(),
        webPreferences: {
            nodeIntegration: true
        }
    });

    playlistWin.loadURL(path.join('file://', __dirname, '../sections/playlist.html'));
    playlistWin.on('close', () => {
        playlistWin = null;
    });
    // send data to renderer process
}

ipcMain.on('dataRequest', (event) => {
    event.reply('dataResponse', { 'data': data });
});

ipcMain.on('songClicked',(evnet,data)=>{
    BrowserWindow.getFocusedWindow().webContents.send('showBrief',data);
})