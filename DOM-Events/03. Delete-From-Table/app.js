function deleteByEmail() {
    let deleteVal = document.querySelector('input[name="email"]').value.trim();
    const rows = Array.from(document.querySelectorAll('tbody tr'))

    let msg = "Not found."
    for (let row of rows) {
        if (row.children[1].textContent === deleteVal) {
            row.parentNode.removeChild(row)
            msg = "Deleted"
        }
    }

    document.querySelector('#result').textContent = msg;
}