function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function solve(area, vol, input) {
    const figures = JSON.parse(input);
    const result = [];

    for (const item of figures) {
        let areaS = area.call(item)
        let volS = vol.call(item)

        result.push({ area: areaS, volume: volS })
    }

    return result;
}
const example = `[
{ "x": "1", "y": "2", "z": "10" },
{ "x": "7", "y": "7", "z": "10" },
{ "x": "5", "y": "2", "z": "10" }
]`


console.log(solve(area, vol, example));

