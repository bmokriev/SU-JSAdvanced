function solve() {
  let input = document.querySelector('#input').value;
  let output = document.querySelector('#output');
  console.log(input);
  input
    .match(/(?:\s*)([^.!?]+[.!?]+)/g)
    .reduce((acc, curr, i) => {
      if (i % 3 == 0) {
        acc.push([curr.trim()])
      } else {
        acc[acc.length - 1].push(curr)
      }
      return acc;
    }, [])
    .forEach(p => {
      let par = document.createElement('p');
      par.textContent = p;
      output.appendChild(par)
    });

}