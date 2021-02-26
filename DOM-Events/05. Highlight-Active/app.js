function focused() {
    // select all input fields
    let divs = document.querySelectorAll('input[type=text]')
        .forEach(x => {
            x.addEventListener('focus', onFocus);
            x.addEventListener('blur', onBlur);
        })

    // add event listener for focus
    // apply focused on parent
    function onFocus(ev) {
        ev.target.parentNode.classList.add('focus')
    }

    // add event listener for blured
    // remove focused on parent
    function onBlur(ev) {
        ev.target.parentNode.classList.remove('focus')
    }
}