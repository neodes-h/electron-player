const {ipcRenderer} = require('electron');
const desc = document.querySelector('.desc'),
      lyric = document.querySelector('.lyric'),
      backBtn = document.getElementById('back');

document.addEventListener('DOMContentLoaded',()=>{
    backBtn.addEventListener('click', () => {
        desc.style.setProperty('display', 'none');
        lyric.style.setProperty('display', 'block');
    })
})

ipcRenderer.on('showBrief',(event,data)=>{
    desc.style.setProperty('display','block');
    lyric.style.setProperty('display','none');
    desc.append(data);
    
})
