const cycleModeBtn = document.getElementById('cycle_mode');
const volumeSlider = document.getElementById('volume');
const volumeSliderWrapper = document.querySelector('.volumeSlider');
const songSlider = document.getElementById('songProgress');
const rootNode = document.querySelector('html');
const volumeBtn = document.querySelector('.volume-btn');
// record the position of the current song

let cycle_mode = 0;//0->random,1->by order
// songSlider.listen('MDCSlider:change', () => console.log(`Value changed to ${songSlider.value}`));

// init slider
let cur_vol = 50,mute_flag = false;
function volumeSliderHandler(event){
    rootNode.style.setProperty('--volume-slider-left', event.target.value + '%');
    cur_vol = event.target.value;

    if(cur_vol > 0){
        document.querySelector('#volume_off').classList.add('remove');
        document.querySelector('#volume_up').classList.remove('remove');
    } else {
        document.querySelector('#volume_off').classList.remove('remove');
        document.querySelector('#volume_up').classList.add('remove');
    }
}
volumeSlider.setAttribute('value',cur_vol);
rootNode.style.setProperty('--volume-slider-left', cur_vol + '%');
// change slider css dynamically
volumeSlider.addEventListener('change', volumeSliderHandler);
volumeSlider.addEventListener('mousemove', volumeSliderHandler);

// hide & show volume slider container
let hideVolumeSlider = (() => volumeSliderWrapper.classList.add('hide'));
let showVolumeSlider = (() => volumeSliderWrapper.classList.remove('hide'));
volumeSliderWrapper.addEventListener('mouseenter',showVolumeSlider);
volumeSliderWrapper.addEventListener('mouseleave',hideVolumeSlider);
volumeBtn.addEventListener('mouseenter', showVolumeSlider);
volumeBtn.addEventListener('mouseleave', hideVolumeSlider);
volumeBtn.addEventListener('click',(event)=>{
    if(mute_flag){
        //unmute
        mute_flag = false;
        volumeSlider.value = cur_vol;
        rootNode.style.setProperty('--volume-slider-left', (cur_vol) + '%');
        document.querySelector('#volume_off').classList.add('remove');
        document.querySelector('#volume_up').classList.remove('remove');
    } else {
        //mute
        mute_flag = true;
        volumeSlider.value = 0;
        rootNode.style.setProperty('--volume-slider-left', '0%');
        document.querySelector('#volume_off').classList.remove('remove');
        document.querySelector('#volume_up').classList.add('remove');
    }
})


let cur_pos = 0;
function songSliderHandler(event){
    rootNode.style.setProperty('--song-slider-left',event.target.value + '%');
    cur_pos = event.target.value;
}
songSlider.setAttribute('value', cur_pos);
rootNode.style.setProperty('--song-slider-left', cur_pos + '%');
// change slider css dynamically
songSlider.addEventListener('change', songSliderHandler);
songSlider.addEventListener('mousemove', songSliderHandler);


