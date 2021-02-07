function calorieObj(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i += 2) {
        obj[arr[i]] = +arr[i + 1]
    }
    console.log(obj);
}
calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
calorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])