function create(words) {
   const content = document.querySelector('#content')

   for (const item of words) {
      let divEl = document.createElement('div');
      let pEl = document.createElement('p');
      pEl.textContent = item;
      pEl.style.display = 'none';
      content.appendChild(divEl);
      divEl.appendChild(pEl);
   }

   content.addEventListener('click', (ev) => {
      if (ev.target.tagName === "DIV") {
         console.log(ev.target);
         ev.target.firstChild.style.display = 'block';
      }
   });
}