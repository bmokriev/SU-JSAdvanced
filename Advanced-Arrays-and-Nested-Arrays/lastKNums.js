function lastKNums(n, k) {
    let result = [1,];
    for (let i = 1; i < n; i++) {
        let index = Math.max(0, i - k)
        let next = result.slice(index).reduce((a, b) => a + b)
        result.push(next)
    }
    console.log(result);
}
lastKNums(6, 3)
lastKNums(8, 2)