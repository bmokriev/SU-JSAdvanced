function addItem() {
    let input = document.querySelector('#newItemText').value
    let list = document.querySelector('#items')


    let li = document.createElement('li');
    li.textContent = input;
    list.appendChild(li);
    document.querySelector('#newItemText').value = ''
}