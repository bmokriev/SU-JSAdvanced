function addItem() {

    let input = document.querySelector('#newItemText').value
    let liEl = createElement('li', input)

    let deleteBtn = createElement('a', '[Delete]')
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', (ev) => {
        ev.target.remove()
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