"use strict";
exports.__esModule = true;
var Session = require("../main-process/session").Session;
var ipcRenderer = require('electron').ipcRenderer;
var session = Session.getInstance();
var desc = document.querySelector('.desc'),
    lyric = document.querySelector('.lyric');
ipcRenderer.on('responseLyrics',function(event,data){
    var ul = document.createElement('ul'),
        li;
    Array.from(data).forEach(item =>{
        li = document.createElement('li');
        li.innerHTML = JSON.stringify(item);
        ul.appendChild(li);
    })
    lyric.appendChild(ul);
})
ipcRenderer.on('showBrief', function (event, data) {
    data = JSON.parse(data);
    desc.querySelector('#album').setAttribute('src',data['img']);
    desc.querySelector('#songName').innerHTML = data['name'] || 'Name';
    desc.querySelector('#singer').innerHTML = data['singer'] || 'Singer';
    desc.querySelector('#lyricsName').innerHTML = data['lyricWriter'] || 'lyricWriter';
    desc.querySelector('#composedBy').innerHTML = data['songWriter'] || 'songWriter';
    console.log(session);
    ipcRenderer.send('requestLyrics');

    if (desc.querySelector('#songName').offsetWidth >= desc.querySelector('#songName').parentElement.parentElement.clientWidth){
        desc.querySelector('#songName').classList.add('cycle');
    } else {
        desc.querySelector('#songName').classList.remove('cycle');
    }
});

