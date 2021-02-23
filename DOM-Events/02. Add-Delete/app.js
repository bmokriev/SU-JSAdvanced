function addItem() {

    let input = document.querySelector('#newItemText')
    let liEl = createElement('li', input.value)

    let deleteBtn = createElement('a', '[Delete]')
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', (ev) => {
        ev.target.remove()
        console.log(ev.target.parentNode);
    })
    liEl.appendChild(deleteBtn);

    document.getElementById('items').appendChild(liEl);
    input.value = '';

    function createElement(type, content) {
        let element = document.createElement(type)
        element.textContent = content;
        return element;
    }
}