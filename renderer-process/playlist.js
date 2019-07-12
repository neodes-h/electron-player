const {ipcRenderer} = require('electron');
const contentDOM = document.querySelector('.playlist');
function init(){

    document.getElementById('minimize').remove();
    ipcRenderer.on('dataResponse', (event, { data }) => {
        // Array.from(data).forEach((item)=>{
        //     let ele = document.createElement('div');
        //     ele.innerHTML = JSON.stringify(item);
        //     contentDOM.appendChild(ele);
        // })
    });

}
document.addEventListener('DOMContentLoaded',()=>{
    init();
    ipcRenderer.send('dataRequest');
})