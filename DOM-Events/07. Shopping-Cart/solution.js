function solve() {
   let textarea = document.querySelector('textarea')

   const cart = [];

   document.querySelector('.shopping-cart')
      .addEventListener('click', (ev) => {
         if (ev.target.className === "add-product" && ev.target.tagName == "BUTTON") {
            const product = ev.target.parentNode.parentNode;
            const title = product.querySelector('.product-title').textContent;
            const price = +product.querySelector('.product-line-price').textContent;
            console.log(`Added ${title} for ${price.toFixed(2)} to the cart.\n`);
            textarea.textContent += `Added ${title} for ${price.toFixed(2)} to the cart.\n`
            cart.push({ title, price })
         }
      })

   document.querySelector('.checkout').addEventListener('click', () => {
      const result = cart.reduce((acc, c) => {
         acc.items.push(c.title);
         acc.total += c.price;
         return acc;
      }, { items: [], total: 0 });

      textarea.value += `You bought ${result.items.join(', ')} for ${result.total.toFixed(2)}.`
   })

}