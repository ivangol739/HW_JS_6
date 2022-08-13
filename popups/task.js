const popupStart = document.getElementById('modal_main');
const popupClose = document.querySelectorAll('.modal__close');

popupStart.className = 'modal modal_active';
popupClose.forEach(function(elem) {
    elem.onclick = function() {
        this.closest('.modal').className = 'modal';
        if (this.className.includes('btn_danger')) {
            document.getElementById('modal_success').className = 'modal modal_active';
        }
    }
});

