function sortNums(arr) {
    let sorted = arr.sort((a, b) => a - b)
    let result = [];
    let length = arr.length

    for (let i = 0; i < length; i++) {
        if (i % 2 == 0) {
            let num = sorted.shift();
            result.push(num)
        } else {
            let num = sorted.pop();
            result.push(num)

        }
    }
    return result
}
console.log(sortNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))