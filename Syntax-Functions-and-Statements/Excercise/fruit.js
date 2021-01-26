function fruit(type, weight, pPKilogr) {
    let weightK = +weight / 1000
    pPKilogr = +pPKilogr;

    let total = weightK * pPKilogr

    console.log(`I need $${total.toFixed(2)} to buy ${weightK.toFixed(2)} kilograms ${type}.`);
}
fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)