const describe = require('mocha').describe;
const expect = require('chai').expect;
const assert = require('chai').assert;

let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}





describe("Tests …", function () {
    describe('1', () => {
        it('2', () => {
            expect('a').to.equal('a')
        })
    })

    describe('makeAnOrder', () => {
        const input1 = { pizzaName: 'a', orderedDrink: 'b' };
        const input2 = { orderedDrink: 'b' };
        const input3 = { pizzaName: 'a' };
        const input4 = {};


        it('error', () => {
            assert.throw(() => pizzUni.makeAnOrder(input2), 'You must order at least 1 Pizza to finish the order.');
            assert.throw(() => pizzUni.makeAnOrder(input4), 'You must order at least 1 Pizza to finish the order.');
        })


        it('result', () => {
            // expect(pizzUni.makeAnOrder(input1)).to.equal('You just ordered a and b.')
            assert.equal(pizzUni.makeAnOrder(input1), 'You just ordered ${input1.pizzaName} and ${input1.orderedDrink}.')

        })
    })
});
