function townPop(arr) {
    let obj = {}
    for (const item of arr) {
        let [name, pop] = item.split(' <-> ')
        if (obj[name]) {
            obj[name] += +pop
        } else {
            obj[name] = +pop;
        }

    }

    for (const town in obj) {
        console.log(`${town} : ${obj[town]}`)
    }
}
townPop(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])
