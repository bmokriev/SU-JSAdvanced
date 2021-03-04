
const { expect } = require('chai');
const sum = require('./sumOfNumbers');


describe('Sum numbers', () => {
    it('sums single number', () => {
        expect(sum([1])).to.equal(1);
    });
    it('sums two numbers', () => {
        expect(sum([1, 1])).to.equal(2);
    });
    it('sums different numbers', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });
});