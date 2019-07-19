const {ipcRenderer} = require('electron');
const contentDOM = document.querySelector('.playlist');

function textCycleHandler(ele){
    ele.addEventListener('mouseenter', () => {
        if(ele.offsetWidth >= ele.parentElement.offsetWidth){
            ele.classList.add('cycle');
        }
    });
    ele.addEventListener('mouseleave', () => {
        ele.classList.remove('cycle');
    });
    ele.addEventListener('click',()=>{
        ipcRenderer.send('songClicked',ele.dataset['id']||undefined);
    })
}

function init(){
    document.getElementById('minimize').remove();
    ipcRenderer.on('dataResponse', (event, { data }) => {
        //assemble the playlist table
        Array.from(data).forEach((item,index)=>{
            let tbody = document.querySelector('.playlist tbody'),
                tr = document.createElement('tr'),
                td = null,
                label = null;

            td = document.createElement('td');
            label = document.createElement('label');
            label.innerHTML = index+1;
            td.appendChild(label);
            tr.appendChild(td);

            td = document.createElement('td');
            label = document.createElement('label');
            label.innerHTML = item['name'];
            label.dataset['id'] = JSON.stringify(item);
            td.appendChild(label);
            tr.appendChild(td);
            textCycleHandler(label);

            td = document.createElement('td');
            label = document.createElement('label');
            let length = Number.parseInt(item['length']) || 0;
            label.innerHTML = Math.floor(length / 60) + ':' + String(length % 60).padStart(2,'0');
            td.appendChild(label);
            tr.appendChild(td);

            tbody.appendChild(tr);
        })
    });

}
document.addEventListener('DOMContentLoaded',()=>{
    init();
    ipcRenderer.send('dataRequest');
})