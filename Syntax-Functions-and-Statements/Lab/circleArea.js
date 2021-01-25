function circleArea(input) {
    let radius = 0;
    if (typeof (input) == 'number') {
        radius = +input;
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof (input)}.`);
        return
    }

    const area = Math.PI * radius ** 2;
    console.log(area.toFixed(2));
}
circleArea(5)
circleArea(true)