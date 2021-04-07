function solve() {
    const button = document.querySelector('button');

    button.addEventListener('click', (event) => {
        const name = document.querySelector('input[type="text"]').value;
        const date = document.querySelector('input[type="datetime-local"]').value;
        const module = document.querySelector('div select').value;

        const trainings = document.querySelector('.modules');
        event.preventDefault();

        // if (name == '' || date == '' || module == 'Select module') {
        //     return
        // }



        const child = e('div', { className: 'module' },
            e('h3', {}, 'ADVANCED-MODULE'),
            e('ul', {}))
        trainings.appendChild(child)

        // e('button', { className: 'red' }, 'Del')


        console.log(1);
    });



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

};