function sumFL(arr) {
    let first = Number(arr.shift())
    let last = Number(arr.pop())

    console.log(first + last);
}
sumFL(['20', '30', '40'])
sumFL(['5', '10'])