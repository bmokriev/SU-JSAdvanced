// const describe = require('mocha').describe;
const expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer', () => {
    describe('test mocha and chai', () => {
        it('2', () => {
            expect(1).to.equal(1);
        })
    })

    describe('addFive', () => {
        it('not a number', () => {
            expect(mathEnforcer.addFive('a')).to.be.undefined;
            expect(mathEnforcer.addFive(NaN)).to.be.NaN;
        })
        it('it works', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(1.2)).to.equal(6.2);
            expect(mathEnforcer.addFive(1)).to.equal(6);
        })

    })

    describe('subtractTen', () => {
        it('not a number', () => {
            expect(mathEnforcer.subtractTen('a')).to.be.undefined;
            expect(mathEnforcer.subtractTen(NaN)).to.be.NaN;
        })
        it('it works', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(11.2)).to.equal(1.1999999999999993);
            expect(mathEnforcer.subtractTen(40)).to.equal(30);

        })
        it('it works with negatives', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        })
    })

    describe('subtractTen', () => {
        it('not a number', () => {
            expect(mathEnforcer.sum('a', 1)).to.be.undefined;
        })
        it('not a number', () => {
            expect(mathEnforcer.sum(1, 'a')).to.be.undefined;
        })
        it('not a number', () => {
            expect(mathEnforcer.sum('a', 'a')).to.be.undefined;
        })
        it('works', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
            expect(mathEnforcer.sum(1.1, 1.2)).to.equal(2.3);
            expect(mathEnforcer.sum(100, 1000)).to.equal(1100);
        })
        it('works with -', () => {
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
        })
    })
})

