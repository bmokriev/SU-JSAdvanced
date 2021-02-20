function search() {
   // select els
   let input = document.querySelector('#searchText').value;
   let count = 0;
   let resultText = document.querySelector('#result');

   // search through them
   // underline them
   let towns = Array.from(document.querySelectorAll('li'))
      .forEach(el => {
         if (el.textContent.toLowerCase().includes(input.toLowerCase())) {
            el.style.fontWeight = 'bold';
            el.style.textDecoration = 'underline';
            count++;
         }
      });

   // print num of matches
   resultText.textContent = `${count} matches found`
}
