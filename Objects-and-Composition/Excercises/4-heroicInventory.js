function heroicInv(arr) {
    const inv = [];

    for (const item of arr) {
        let [name, level, itemsStr] = item.split(' / ')
        items = itemsStr ? itemsStr.split(', ') : []
        level = +level;
        let hero = {
            name,
            level,
            items
        }
        inv.push(hero)
    }

    return JSON.stringify(inv);
}
let result = ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']

console.log(heroicInv(result));