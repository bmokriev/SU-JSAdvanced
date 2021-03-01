function solve() {
    const fields = document.querySelectorAll('tbody input');
    const checkBtn = document.querySelector('tfoot tr button');
    const clearBtn = document.querySelector('tfoot tr button:last-child');
    const table = document.querySelector('table')
    const checkText = document.querySelector('#check')

    checkBtn.addEventListener('click', checkTable)
    clearBtn.addEventListener('click', clearTable)

    function checkTable() {

        if (isCorrect()) {
            table.style.border = '2px solid green';
            checkText.style.color = 'green';
            checkText.textContent = "You solve it! Congratulations!";
        } else {
            table.style.border = '2px solid red';
            checkText.style.color = 'red';
            checkText.textContent = "NOP! You are not done yet...";
        }
    }

    function clearTable() {
        for (const item of fields) {
            item.value = '';
            checkText.textContent = '';
            table.style.border = 'none'
        }
    }

    function isCorrect() {
        const matrix = [
            [+fields[0].value, +fields[1].value, +fields[2].value],
            [+fields[3].value, +fields[4].value, +fields[5].value],
            [+fields[6].value, +fields[7].value, +fields[8].value]
        ]

        let isSudomu = true;
        for (let i = 1; i < matrix.length; i++) {
            let row = matrix[i];
            let col = matrix.map(row => row[i]);
            if (col.length != new Set(col).size || row.length != new Set(row).size) {
                isSudomu = false;
                return isSudomu;
            }
        }

        return isSudomu;
    }
    // console.log(checkBtn);
    // console.log(clearBtn);
    console.log(fields);
    // console.log(checkArr);

}