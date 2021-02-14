function rectangle(x, h, c) {
    let color = c[0].toUpperCase() + c.slice(1)
    return {
        width: x,
        height: h,
        color,
        calcArea: function () {
            return this.width * this.height / 2
        }
    }
}
let rect = rectangle(4, 5, 'red');
// console.log(rect.width);
// console.log(rect.height);
// console.log(rect.color);
console.log(rect.calcArea());
