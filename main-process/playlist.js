const {BrowserWindow,ipcMain,app} = require('electron');
const path = require('path');
const fs = require('fs');
let playlistWin = null;
let data = [
    {
        id: 0,
        name: 'song12222222222222222222222aaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbb  ',
        singer: 'singer1',
        length: 623,
        img:'/home/hhao/electron/player/assets/image/album2.jpeg',
        singer:'Singer6',
        lyricWriter:'Lyric Writer6',
        songWriter:'Song Writer6',

    },
    {
        id: 1,
        name: 'song2',
        singer: 'singer2',
        length: 620,
        img: '/home/hhao/electron/player/assets/image/album.jpeg',
        singer: 'Singer5',
        lyricWriter: 'Lyric Writer5',
        songWriter: 'Song Writer5',
    },
    {
        id: 2,
        name: 'song3',
        singer: 'singer3',
        length: 609,
        img: '/home/hhao/electron/player/assets/image/album.jpeg',
        singer: 'Singer4',
        lyricWriter: 'Lyric Writer4',
        songWriter: 'Song Writer4',
    },
    {
        id: 3,
        name: 'song4',
        singer: 'singer4',
        length: 622,
        img: '/home/hhao/electron/player/assets/image/album.jpeg',
        singer: 'Singer3',
        lyricWriter: 'Lyric Writer3',
        songWriter: 'Song Writer3',
    },
    {
        id: 4,
        name: 'song5',
        singer: 'singer5',
        length: 627,
        img: '/home/hhao/electron/player/assets/image/album.jpeg',
        singer: 'Singer2',
        lyricWriter: 'Lyric Writer2',
        songWriter: 'Song Writer2',
    },
    {
        id: 5,
        name: 'song6',
        singer: 'singer6',
        length: 626,
        img: '/home/hhao/electron/player/assets/image/album.jpeg',
        singer: 'Singer1',
        lyricWriter: 'Lyric Writer1',
        songWriter: 'Song Writer1',
    },
]
ipcMain.on('dataRequest', (event) => {
    //parse song data
    event.reply('dataResponse', { 'data': data });
});

ipcMain.on('songClicked',(evnet,data)=>{
    BrowserWindow.getFocusedWindow().webContents.send('showBrief',data);
})