function storeCat(input) {
    let catalogue = [];

    for (const item of input) {
        let [name, price] = item.split(' : ')
        let entrie = {
            name,
            price
        }
        catalogue.push(entrie)
    }


    catalogueS = catalogue.sort((a, b) => a.name.localeCompare(b.name))
    let firstLetter = ''
    for (let i = 0; i < catalogueS.length; i++) {
        if (firstLetter !== catalogue[i].name[0]) {
            firstLetter = catalogue[i].name[0]
            console.log(firstLetter);
        }
        console.log(`  ${catalogue[i].name}: ${catalogue[i].price}`);
    }

}
storeCat(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)
