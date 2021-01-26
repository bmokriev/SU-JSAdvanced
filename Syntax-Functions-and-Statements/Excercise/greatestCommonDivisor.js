function gcd(num1, num2) {
    let smalest = Math.min(num1, num2);
    let biggestDiv = 1

    for (let i = 2; i <= smalest; i++) {
        if (num1 % i == 0 && num2 % i == 0) {
            biggestDiv = i;
        }
    }
    console.log(biggestDiv);
}
gcd(18, 9)
gcd(2154, 458)