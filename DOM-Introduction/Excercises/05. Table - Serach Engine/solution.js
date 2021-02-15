function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const rows = document.querySelectorAll('tbody tr')
   function onClick() {
      let input = document.querySelector('#searchField').value;

      for (const row of rows) {
         if (row.textContent.includes(input)) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      }

   }
}