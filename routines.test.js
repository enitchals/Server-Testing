const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const expect = chai.expect;
chai.use(chaiHTTP);
congoose.connect('mongodb://localhost/kitties-test', { useMongoClient: true });

const server = require('./server');
const models = require('./models.test.js')

const testKitty = { 
    "name": "Kara",
    "color": "Grey and White",
    "breed": "Domestic Shorthair"
    "age": 7,
    "fact": "Kara is the cutest little kitty."
}

describe(`food api`, () => {
    beforeEach(() => {
        const newKitty = new Kitty(testKitty);
        newKitty.save();
    })
    afterEach(() => {
        Kitties.remove({}, (err) => {
            done();
        });
    });
})

describe(`[GET] '/kitties'`, () => {});
it('should return a list of kitties', done => {
    chai
        .request(server)
        .get('/kitties')
        .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body.text).to.be.an('array');
        })
})