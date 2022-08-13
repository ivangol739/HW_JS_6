const sliders = document.querySelector('.slider')
let sliderItems = Array.from(sliders.getElementsByClassName('slider__item'))
let num = 0
const foo = (slide1, slide2) => {
    slide1.classList.toggle('slider__item_active');
    slide2.classList.remove('slider__item_active');
}


window.addEventListener('click', event => {
    if (event.target.classList.contains('slider__arrow_next')) {
        if (num < sliderItems.length - 1) {
            foo(sliderItems[num + 1], sliderItems[num])
            num = num + 1;
        } else {
            foo(sliderItems[num - (sliderItems.length - 1)], sliderItems[num])
            num = num - (sliderItems.length - 1);
        }
    } else if (event.target.classList.contains('slider__arrow_prev')) {
        if (num > 0) {
            foo(sliderItems[num - 1], sliderItems[num])
            num = num - 1;
        } else {
            foo(sliderItems[sliderItems.length - 1], sliderItems[num])
            num = num + (sliderItems.length - 1);
        }
    }  
})