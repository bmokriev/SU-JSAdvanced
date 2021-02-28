function lockedProfile() {
    const main = document.querySelector('#main')

    main.addEventListener('click', (ev) => {
        const parent = ev.target.parentNode;
        const radioUnlocked = parent.querySelector('input[value="unlock"]')

        if (radioUnlocked.checked == false) {
            return
        }

        const divEl = parent.querySelector('div');
        const isVisable = divEl.style.display === 'block';

        if (ev.target.tagName === "BUTTON" && !isVisable) {
            divEl.style.display = 'block';
            ev.target.textContent = 'Hide it'
        } else if (ev.target.tagName === "BUTTON") {
            divEl.style.display = 'none';
            ev.target.textContent = 'Show more'
        }
    });
}