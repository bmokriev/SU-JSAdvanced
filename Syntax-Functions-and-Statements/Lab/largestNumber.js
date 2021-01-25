function largestNum(num1, num2, num3) {
    let largest = Number.MIN_SAFE_INTEGER
    let numArr = [num1, num2, num3]

    for (const num of numArr) {
        if (num > largest) {
            largest = num
        }
    }
    console.log(`The largest number is ${largest}.`);
}
largestNum(5, -3, 16)
largestNum(-3, -5, -22.5)