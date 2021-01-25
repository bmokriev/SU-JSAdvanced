function squareOfStars(param) {
    if (param == undefined) {
        param = 5;
    }

    for (let i = 0; i < param; i++) {
        let line = ''
        for (let x = 0; x < param; x++) {
            line += '* '
        }
        console.log(line);
    }
}
// squareOfStars(1)
// squareOfStars(2)
// squareOfStars(5)
squareOfStars()