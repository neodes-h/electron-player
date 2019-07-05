const { MDCRipple } = require('@material/ripple');
const { MDCSlider } = require('@material/slider');
const songSlider = new MDCSlider(document.getElementById('song'));

// record the position of the current song
let cur_pos = 0;
songSlider.listen('MDCSlider:change', () => console.log(`Value changed to ${songSlider.value}`));


// add ripple effects to all the icon buttons
Array.from(document.querySelectorAll('.mdc-icon-button')).map((item)=>{
    new MDCRipple(item).unbounded = true;
})

