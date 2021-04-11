class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;
        this.roomCapacity = {
            single: Math.floor(this.capacity * 0.5),
            double: Math.floor(this.capacity * 0.3),
            maisonette: Math.floor(this.capacity * 0.2)
        }
    }

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135
        }
    }

    rentARoom(clientName, roomType, nights) {
        if (this.roomCapacity[roomType] < 1) {
            let result = `No ${roomType} rooms available!`
            Object.entries(this.roomCapacity)
                .filter(([type, cap]) => type !== roomType)
                .forEach(([t, c]) => {
                    result += ` Available ${t} rooms: ${c}.`
                });
            return result
        }
        let bookinN = this.currentBookingNumber
        let client = {
            clientName,
            roomType,
            nights,
            bookinN
        }

        this.bookings.push(client)
        let msg = `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber}.`
        this.currentBookingNumber++;
        this.roomCapacity[roomType]--;
        return msg;
    }

    checkOut(currentBookingNumber) {

        let [client] = this.bookings.filter(e => e.bookinN == currentBookingNumber)

        if (client == undefined) {
            return `The booking ${currentBookingNumber} is invalid.`
        }

        let total = client.nights * this.roomsPricing[client.roomType];
        this.roomCapacity[client.roomType]++;
        let bookingIndex = this.bookings.indexOf(client);
        this.bookings.splice(bookingIndex, 1)

        let msg = `We hope you enjoyed your time here, Mr./Mrs. ${client.clientName.toFixed(2)}. The total amount of money you have to pay is ${total} BGN."`

        return msg
    }

    report() {
        let result = `${this.name} DATABASE:
--------------------`

        this.bookings.forEach(e => {
            result += `\nbookingNumber - ${e.bookinN}
clientName - ${e.clientName}
roomType - ${e.roomType}
nights - ${e.nights}
----------`
        })

        return result
    }

}

// let hotel = new Hotel('HotUni', 10);
// console.log(hotel.rentARoom('Peter', 'single', 4));
// console.log(1111111111111111111111);
// console.log(hotel.checkOut(1));
// console.log(1111111111111111111111);
// console.log(hotel);
// console.log(hotel.rentARoom('Robert', 'double', 4));
// console.log(hotel.rentARoom('Geroge', 'maisonette', 6));

let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

console.log(hotel.report());

