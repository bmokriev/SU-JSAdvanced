function solve() {
  let text = document.getElementById('text').value.toLowerCase();
  // let text = "this is an example".toLowerCase();
  let type = document.getElementById('naming-convention').value;
  // let type = "Pascal Case"
  let resultEl = document.getElementById('result')

  if (type !== "Camel Case" && type !== "Pascal Case") {
    resultEl.textContent = 'Error!'
    return
  }
  let textArr = text.split(' ');

  for (let i = 0; i < textArr.length; i++) {
    if (i == 0 && type === "Camel Case") {
      continue;
    }
    textArr[i] = textArr[i][0].toUpperCase() + textArr[i].slice(1)
  }

  let result = textArr.join('')

  resultEl.textContent = result;
}