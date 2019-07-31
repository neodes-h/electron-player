"use strict";
exports.__esModule = true;
var Session = require("../main-process/session").Session;
var ipcRenderer = require('electron').ipcRenderer;
var session = Session.getInstance();
var desc = document.querySelector('.desc'),
    lyric = document.querySelector('.lyric');
ipcRenderer.on('responseLyrics',function(event,data){
    var container = document.createElement('div'),
        p;
    container.classList.add('ul');
    Array.from(data).forEach((item,index) =>{
        p = document.createElement('p');
        p.innerHTML = item;
        container.appendChild(p);
    })
    // empty DOM
    while(lyric.firstChild){
        lyric.removeChild(lyric.firstChild);
    }
    lyric.appendChild(container);
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

