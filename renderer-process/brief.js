"use strict";
exports.__esModule = true;
var Session = require("../main-process/session").Session;
var ipcRenderer = require('electron').ipcRenderer;
var session = Session.getInstance();
var desc = document.querySelector('.desc'), lyric = document.querySelector('.lyric'), backBtn = document.getElementById('back');
document.addEventListener('DOMContentLoaded', function () {
    backBtn != null && backBtn.addEventListener('click', function () {
        desc.style.setProperty('display', 'none');
        lyric.style.setProperty('display', 'block');
    });
});
ipcRenderer.on('showBrief', function (event, data) {
    desc.style.setProperty('display', 'block');
    lyric.style.setProperty('display', 'none');
    desc.append(data);
    console.log(session);
});

