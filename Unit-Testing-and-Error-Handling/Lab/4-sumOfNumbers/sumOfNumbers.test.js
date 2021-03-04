
const { expect } = require('chai');
const sum = require('./sumOfNumbers');


describe('Sum numbers', () => {
    it('sums single number', () => {
        expect([1]).to.equal(1);
    });
});