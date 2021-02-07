function lowestPrice(input) {
    let data = {}

    for (const item of input) {
        let [town, product, price] = item.split(' | ')
        price = +price;
        if (!data[product]) {
            data[product] = []
        }
        data[product].push({ price, town });
    }

    for (const item in data) {
        data[item].sort((a, b) => a.price - b.price);
        console.log(`${item} -> ${data[item][0].price} (${data[item][0].town})`);
    }

}
lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)
