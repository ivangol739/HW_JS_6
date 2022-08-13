const menu = document.querySelectorAll('.menu__link');
    
menu.forEach(function(el) {
    el.onclick = function() {
        let menuParant = el.closest('.menu__item');
        let menuSub = menuParant.querySelector('.menu_sub');
        if (menuSub != null) {
            if (menuSub.className.includes('menu_active')) {
                menuSub.className = 'menu menu_sub';
            }
            else {
                menuSub.className = 'menu menu_sub menu_active';
            }
    
            let menuAllSub = document.querySelectorAll('.menu_sub');
            menuAllSub.forEach(function(elSub) {
                if (menuSub != elSub) {
                    elSub.className = 'menu menu_sub';
                }
            });
            return false;
        }
    }
});