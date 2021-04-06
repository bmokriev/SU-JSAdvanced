class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {
        if (this.capacity < 1) {
            throw Error("Not enough parking space.")
        }
        this.vehicles.push({ carModel, carNumber, payed: false });
        this.capacity--;
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        const carIndex = this.vehicles.findIndex(car => car.carNumber === carNumber);

        if (carIndex < 0) {
            throw Error("The car, you're looking for, is not found.")
        }

        const hasPayed = this.vehicles[carIndex].payed;
        if (hasPayed == false) {
            throw Error(`${carNumber} needs to pay before leaving the parking lot.`)
        }
        this.vehicles.splice(carIndex, 1);
        return `${carNumber} left the parking lot.`
    }

    pay(carNumber) {
        const carIndex = this.vehicles.findIndex(car => car.carNumber === carNumber);


        if (carIndex < 0) {
            throw Error(`${carNumber} is not in the parking lot.`)
        }

        const hasPayed = this.vehicles[carIndex].payed;
        if (hasPayed == true) {
            throw Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        this.vehicles[carIndex].payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }

    getStatistics(carNumber) {
        if (carNumber == undefined) {

            const sorted = this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel));
            let infoStr = ``;

            for (const car of this.vehicles) {
                infoStr += `\n${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`
            }



            return `The Parking Lot has ${this.capacity} empty spots left.${infoStr}`
        } else {
            const [result] = this.vehicles.filter(x => x.carNumber == carNumber)
            return `${result.carModel} == ${result.carNumber} - ${result.payed ? 'Has payed' : 'Not payed'}`
        }
    }
};

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));


// const parking = new Parking(4);
// console.log(parking.addCar('b', 'bbbbbbb'));
// console.log(parking.addCar('A', 'Aaaaaaabbbbbb'));
// console.log(parking.pay('b'));
// console.log(parking.removeCar(2));
// console.log(parking.getStatistics('bbbbbbb'));
// console.log('here');
// parking.addCar('a', 'b');