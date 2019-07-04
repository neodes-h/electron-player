const { MDCRipple } = require('@material/ripple');
const { MDCSlider } = require('@material/slider');
const songSlider = new MDCSlider(document.getElementById('song'));
const volumeSlider = new MDCSlider(document.getElementById('volume_slider'));

// record the position of the current song
let cur_pos = 0;
songSlider.listen('MDCSlider:change', () => console.log(`Value changed to ${songSlider.value}`));

let cur_vol = 0;
volumeSlider.listen('MDCSlider:change', () => console.log(`Value changed to ${volumeSlider.value}`));


// add ripple effects to all the icon buttons
Array.from(document.querySelectorAll('.mdc-icon-button')).map((item)=>{
    new MDCRipple(item).unbounded = true;
})

