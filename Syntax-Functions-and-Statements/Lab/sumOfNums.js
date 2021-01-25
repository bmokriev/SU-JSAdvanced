function sumOfNums(num1, num2) {
    num1 = +num1;
    num2 = +num2;
    let result = 0

    for (let i = num1; i <= num2; i++) {
        result += i;
    }
    console.log(result);
}
sumOfNums('1', '5');
sumOfNums('-8', '20');