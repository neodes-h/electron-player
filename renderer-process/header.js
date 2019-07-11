const {remote} = require('electron');
const closeBtn = document.getElementById('close'),
      minimizeBtn = document.getElementById('minimize');

closeBtn.addEventListener('click',()=>{
    remote.getCurrentWindow().close();
})

minimizeBtn.addEventListener('click',()=>{
    remote.getCurrentWindow().minimize();
})

