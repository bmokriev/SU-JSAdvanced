const describe = require('mocha').describe;
const expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('check charLookup', () => {
    it('undefined checks', () => {
        expect(lookupChar(1, 1)).to.be.undefined;
        expect(lookupChar('a', 'a')).to.be.undefined;
    })

    it('index checks', () => {
        expect(lookupChar('a', -1), 'less').to.equal("Incorrect index")
        expect(lookupChar('a', 1), 'more').to.equal("Incorrect index")
    })

    it('result check', () => {
        expect(lookupChar('a', 0)).to.equal("a")
    })
})