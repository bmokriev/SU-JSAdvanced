function mathOperations(x, y, operator) {
    let result = 0;
    switch (operator) {
        case '+': result = x + y; break;
        case '-': result = x - y; break;
        case '/': result = x / y; break;
        case '*': result = x * y; break;
        case '%': result = x % y; break;
        case '**': result = x ** y; break;
    }
    console.log(result);
}
mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')