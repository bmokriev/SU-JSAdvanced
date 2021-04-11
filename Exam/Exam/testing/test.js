const describe = require('mocha').describe;
const expect = require('chai').expect;
const assert = require('chai').assert;


describe('test', () => {
    it('test', () => {
        expect(1).to.equal(1);
    })

    describe('stringSlicer', () => {
        it('4 char', () => {
            expect(stringOperations.stringSlicer('abcd')).to.equal('abc...')
        })
        it('empty str', () => {
            expect(stringOperations.stringSlicer('')).to.equal('...')
        })
        it('1', () => {
            expect(stringOperations.stringSlicer('a')).to.equal('a...')
        })
        it('2 char', () => {
            expect(stringOperations.stringSlicer('ab')).to.equal('ab...')
        })
        it('3 char', () => {
            expect(stringOperations.stringSlicer('abc')).to.equal('abc...')
        })
    })
    describe('wordChecker', () => {
        it('not included', () => {
            expect(stringOperations.wordChecker('a', 'for me')).to.equal('a not found!');
            expect(stringOperations.wordChecker('A', 'for me')).to.equal('a not found!');
        })
        it('included once', () => {
            expect(stringOperations.wordChecker('car', 'a car')).to.equal('car');
            expect(stringOperations.wordChecker('car', 'car')).to.equal('car');
            expect(stringOperations.wordChecker('cAr', 'CAR')).to.equal('car');
        })
        it('included twice', () => {
            expect(stringOperations.wordChecker('car', 'a car car')).to.equal('car');
        })
        it('included in another word', () => {
            expect(stringOperations.wordChecker('car', 'a carshow')).to.equal('car');
            expect(stringOperations.wordChecker('cAr', 'a caRshow')).to.equal('car');

        })

    })
    describe('printEveryNthElement', () => {
        it('error number', () => {
            expect(() => stringOperations.printEveryNthElement(NaN, [])).to.throw();
            expect(() => stringOperations.printEveryNthElement('a', [])).to.throw();
        })
        it('error arr', () => {
            expect(() => stringOperations.printEveryNthElement(1, '')).to.throw();
            expect(() => stringOperations.printEveryNthElement(1, {})).to.throw();
        })
        it('works', () => {
            expect(stringOperations.printEveryNthElement(1, [1])).to.deep.equal([1]);
            expect(stringOperations.printEveryNthElement(2, [1, 2])).to.deep.equal([1]);
            expect(stringOperations.printEveryNthElement(1, [1, 2, 3])).to.deep.equal([1, 2, 3]);
        })
    })
})


const stringOperations = {
    stringSlicer: function (str) {
        return str.slice(0, 3) + '...';
    },
    wordChecker: function (word, text) {
        word = word.toLowerCase().trim();
        text = text.toLowerCase();

        if (text.includes(word)) {
            return word;
        } else {
            return `${word} not found!`;
        }
    },
    printEveryNthElement: function (n, arr) {
        n = Number(n);

        if (isNaN(n) || !Array.isArray(arr)) {
            throw new Error('The input is not valid!');
        }

        const outputArray = [];

        for (let i = 0; i < arr.length; i += n) {
            outputArray.push(arr[i]);
        }
        return outputArray;
    }
};
