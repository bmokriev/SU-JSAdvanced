function aggrElms(params) {
    // sum
    let resultSum = params.reduce((a, b) => a + b);
    console.log(resultSum);

    // sum inverse values
    let resultSumInverse = params.reduce((a, b) => a + (1 / b), 0);
    console.log(resultSumInverse);

    // concat
    let resultConcat = '';
    params.forEach(e => resultConcat += String(e));
    console.log(resultConcat);
}
// aggrElms([1, 2, 3])
aggrElms([2, 4, 8, 16])