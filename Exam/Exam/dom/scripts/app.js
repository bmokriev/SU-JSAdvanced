function solve() {
    const form = document.forms[0];
    const oldBooks = document.querySelector('#results div:first-child .shelf')
    const newBooks = document.querySelector('#results div:last-child .shelf')
    const total = document.querySelectorAll('h1')[1]
    let totalBGN = 0;
    total.textContent = `Total Store Profit: ${totalBGN} BGN`



    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const title = document.querySelector('input[type="text"]').value;
        const year = document.querySelector('input[placeholder="Add Year"]').value;
        const price = Number(document.querySelector('input[placeholder="Add Price"]').value)


        if (title == '' || year < 0 || price < 0) {
            return
        }

        const bookDiv = e('div', { className: 'book' })
        const titleNew = e('p', {}, `${title} [${year}]`)
        const moveBtn = e('button', {}, "Move to old section")


        moveBtn.addEventListener('click', () => moveToOld(title, year, price, bookDiv))

        bookDiv.appendChild(titleNew)


        if (year > 1999) {
            const buyBtn = e('button', {}, `Buy it only for ${price.toFixed(2)} BGN`)
            buyBtn.addEventListener('click', () => buyBook(price, bookDiv, year))
            bookDiv.appendChild(buyBtn)
            bookDiv.appendChild(moveBtn)
            newBooks.appendChild(bookDiv);
        } else {
            const buyBtn = e('button', {}, `Buy it only for ${(price * 0.85).toFixed(2)} BGN`)
            buyBtn.addEventListener('click', () => buyBook(price, bookDiv, year))
            bookDiv.appendChild(buyBtn)

            oldBooks.appendChild(bookDiv);
        }

    });

    function moveToOld(title, year, price, book) {
        book.remove()
        const bookDiv = e('div', { className: 'book' })
        const titleNew = e('p', {}, `${title} [${year}]`)
        const buyBtn = e('button', {}, `Buy it only for ${(price * 0.85).toFixed(2)} BGN`)
        bookDiv.appendChild(titleNew)
        bookDiv.appendChild(buyBtn)
        oldBooks.appendChild(bookDiv);

        buyBtn.addEventListener('click', () => {
            totalBGN += +price * 0.85;
            total.textContent = `Total Store Profit: ${totalBGN.toFixed(2)} BGN`
            bookDiv.remove()
        })
    }

    function buyBook(price, bookDiv, year) {
        if (year > 1999) {
            totalBGN += +price;
        } else {
            totalBGN += +price * 0.85

        }
        total.textContent = `Total Store Profit: ${totalBGN.toFixed(2)} BGN`
        bookDiv.remove()

    }

    // newBooks.addEventListener('click', (ev) => {
    //     // if (ev.target.tagName == "BUTTON" && ev.target.textContent.includes('Buy')) {
    //     //     console.log(5);
    //     // } else if (ev.target.tagName == "BUTTON" && ev.target.textContent.includes('Move')) {
    //     //     console.log(7);
    //     //     console.log(ev.target);
    //     // }
    // })



    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }

        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            }
        });

        return result;
    }
}