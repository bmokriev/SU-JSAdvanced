function cooking(num, ...tasks) {
    num = +num;

    for (const item of tasks) {
        if (item == 'chop') {
            num /= 2
        } else if (item == 'dice') {
            num = Math.sqrt(num)
        } else if (item == 'spice') {
            num += 1
        } else if (item == 'bake') {
            num *= 3
        } else if (item == 'fillet') {
            num *= 0.8
        }
        console.log(num);
    }
}
// cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')