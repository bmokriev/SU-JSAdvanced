function townToJSON(arr) {
    let result = []
    let [columns, ...table] = arr;
    for (const line of table) {
        let obj = {}
        let lineArr = line.split('|').filter(e => e !== '').map(e => e.trim())
        obj.Town = lineArr[0]
        let lat = +lineArr[1]
        obj.Latitude = Number(Number(lineArr[1]).toFixed(2))
        obj.Longitude = Number(Number(lineArr[2]).toFixed(2))
        result.push(obj)
    }

    console.log(JSON.stringify(result));
}
townToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)