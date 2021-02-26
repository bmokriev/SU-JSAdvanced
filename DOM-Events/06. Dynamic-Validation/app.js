function validate() {
    let email = document.getElementById('email')
        .addEventListener('change', (ev) => {
            let reg = /^[a-z]+@[a-z]+\.[a-z]+$/
            if (reg.test(ev.target.value)) {
                ev.target.classList.remove('error')
            } else {
                ev.target.classList.add('error')
            }
        })
}