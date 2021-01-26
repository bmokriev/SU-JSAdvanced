function sameNums(num) {
    let total = 0;
    const arr = String(num).split('');
    let isSame = true;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            isSame = false;
        }

        total += +arr[i]
    }

    console.log(isSame);
    console.log(total);
}
sameNums(2222222)
sameNums(1234)