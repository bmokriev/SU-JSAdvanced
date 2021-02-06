function listNames(arr) {
    let sorted = arr.sort((a, b) => a.localeCompare(b))
    for (let i = 0; i < arr.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }
}
listNames(["John", "Bob", "Christina", "Ema"])