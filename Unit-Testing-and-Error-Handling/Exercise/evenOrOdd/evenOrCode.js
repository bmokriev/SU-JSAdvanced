const describe = require('mocha').describe;
// const assert = require('chai').assert;
const expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('check isOddOrEven', () => {
    it('is undefined', () => {
        // assert.isUndefined(isOddOrEven(1), 'is undefined')
        expect(isOddOrEven(1)).to.be.undefined
    })

    it('is even', () => {
        // assert.equal(isOddOrEven('aa'), 'even', 'is even')
        expect(isOddOrEven('aa')).to.equal('even')
    })

    it('is odd', () => {
        // assert.equal(isOddOrEven('a'), 'odd', 'is odd')
        expect(isOddOrEven('a')).to.equal('odd')
    })
})