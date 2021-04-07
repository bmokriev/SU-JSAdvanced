const describe = require('mocha').describe;
const expect = require('chai').expect;


describe('test', () => {
    it('test', () => {
        expect(1).to.equal(1);
    })

    describe('newCarCost', () => {
        it('model not supported - no discount', () => {
            expect(dealership.newCarCost('a', 1)).to.equal(1);

        })
        it('model supported - discount', () => {
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000);
            expect(dealership.newCarCost('Audi A4 B8', 10000)).to.equal(-5000);
            expect(dealership.newCarCost('Audi A4 B8', 15000)).to.equal(0);
        })

        // model is supported - discount
        // model is not supported - no discount
    })
    describe('carEquipment', () => {
        it('single input, single pick', () => {
            expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a']);
        })
        it('overload', () => {
            expect(dealership.carEquipment(['a', 'b', 'c'], [0, 2])).to.deep.equal(['a', 'c']);
        })
        it('overload 2', () => {
            expect(dealership.carEquipment(['a', 'b', 'c'], [1])).to.deep.equal(['b']);
        })

        // single input, single pick
        // extras are added - the result is as expected test overloading
    })
    describe('euroCategory', () => {
        it('< 4', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!')
        })

        it('> 4', () => {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)
        })

        it('= 4', () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
        })

        // return msg if less than 4
        // return expected discount if morew than 4
        // return expected discount when cat = 4
    })
})




let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}