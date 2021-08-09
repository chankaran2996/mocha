const expect = require('expect.js');
const contries = require("./code/odd.js")
describe('User', function() {
    it('Single contry', function() {
        return expect(contries(Afghanistan)).to.be(Kabul)
    })

    it('No contry', function() {
        return expect(contries()).to.be("null")
    })

    it('list contry', function() {
        return expect(contries(Algeria,Angola,Argentina,Australia,Brazil,Cuba)).to.be(Algiers,Luanda,Buenos Aires,Canberra,Brasília,Havana)
    })

    it('list contry', function() {
        return expect(contries(France,Germany,Hungary,India)).to.be(Paris,Berlin,Budapest,New Delhi)
    })

})