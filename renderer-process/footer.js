const cycleModeBtn = document.getElementById('cycle_mode');
const volumeSlider = document.getElementById('volume');
const volumeSliderWrapper = document.querySelector('.volumeSlider');
const songSlider = document.getElementById('songProgress');
const rootNode = document.querySelector('html');
const volumeBtn = document.querySelector('.volume-btn');
const modeBtn = document.getElementById('cycle_mode');
const playBtn = document.getElementById('play_btn');


//init global parameters
let obj = {
    cur_vol:50,
    mute_flag:false,
    cur_pos:0,
    cycle_mode:0,//0:random,1: repeat,2: repeat once
    pause:false
}

function init(){
    // logics of volume slider control
    function volumeSliderHandler(event) {
        rootNode.style.setProperty('--volume-slider-left', event.target.value + '%');
        obj.cur_vol = event.target.value;

        if (obj.cur_vol > 0) {
            document.querySelector('#volume_off').classList.add('remove');
            document.querySelector('#volume_up').classList.remove('remove');
        } else {
            document.querySelector('#volume_off').classList.remove('remove');
            document.querySelector('#volume_up').classList.add('remove');
        }
    }
    volumeSlider.setAttribute('value', obj.cur_vol);
    rootNode.style.setProperty('--volume-slider-left', obj.cur_vol + '%');
    // change slider css dynamically
    volumeSlider.addEventListener('change', volumeSliderHandler);
    volumeSlider.addEventListener('mousemove', volumeSliderHandler);

    // hide & show volume slider container
    let hideVolumeSlider = (() => volumeSliderWrapper.classList.add('hide'));
    let showVolumeSlider = (() => volumeSliderWrapper.classList.remove('hide'));
    volumeSliderWrapper.addEventListener('mouseenter', showVolumeSlider);
    volumeSliderWrapper.addEventListener('mouseleave', hideVolumeSlider);
    volumeBtn.addEventListener('mouseenter', showVolumeSlider);
    volumeBtn.addEventListener('mouseleave', hideVolumeSlider);
    volumeBtn.addEventListener('click', (event) => {
        if (obj.mute_flag) {
            //unmute
            obj.mute_flag = false;
            volumeSlider.value = obj.cur_vol;
            rootNode.style.setProperty('--volume-slider-left', (obj.cur_vol) + '%');
            document.querySelector('#volume_off').classList.add('remove');
            document.querySelector('#volume_up').classList.remove('remove');
        } else {
            //mute
            obj.mute_flag = true;
            volumeSlider.value = 0;
            rootNode.style.setProperty('--volume-slider-left', '0%');
            document.querySelector('#volume_off').classList.remove('remove');
            document.querySelector('#volume_up').classList.add('remove');
        }
    })


    // logics of song progress controls
    function songSliderHandler(event) {
        rootNode.style.setProperty('--song-slider-left', event.target.value + '%');
        obj.cur_pos = event.target.value;
    }
    songSlider.setAttribute('value', obj.cur_pos);
    rootNode.style.setProperty('--song-slider-left', obj.cur_pos + '%');
    // change slider css dynamically
    songSlider.addEventListener('change', songSliderHandler);
    songSlider.addEventListener('mousemove', songSliderHandler);

    //logics of mode controls
    modeBtn.addEventListener('click', (event) => {
        obj.cycle_mode = (obj.cycle_mode + 1) % 3;
        document.querySelectorAll('#cycle_mode>i').forEach((item) => {
            item.classList.add('remove');
        })

        document.querySelector('#cycle_mode>i:nth-of-type(' + (obj.cycle_mode + 1) + ')').classList.remove('remove');
    })

    //logics of play/pause
    playBtn.addEventListener('click', (event) => {
        if (obj.pause) {
            //unpause
            obj.pause = false;
            document.querySelector('.play').classList.remove('remove');
            document.querySelector('.pause').classList.add('remove');
        } else {
            //pause
            obj.pause = true;
            document.querySelector('.play').classList.add('remove');
            document.querySelector('.pause').classList.remove('remove');
        }
    })
}

init();

