function magicMetrics(arr) {
    let isMagic = true;
    let magicSum = arr[0].reduce((a, b) => a + b);

    // check horizontaly
    for (let i = 1; i < arr.length; i++) {
        let sum = arr[i].reduce((a, b) => a + b);
        if (sum !== magicSum) {
            isMagic = false;
            console.log(isMagic)
            return
        }
    }

    // check verticaly
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let x = 0; x < arr.length; x++) {
            sum += arr[x][i]
        }
        if (sum !== magicSum) {
            isMagic = false;
            console.log(isMagic)
            return
        }

    }

    console.log(isMagic);


}
magicMetrics([[1, 0, 0],
[0, 0, 1],
[0, 1, 2]]
)