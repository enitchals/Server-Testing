const mongoose = require('mongoose');
const chai = require('chai');
const chaiHTTP = require('chai-http');
const expect = chai.expect;
chai.use(chaiHTTP);
congoose.connect('mongodb://localhost/Cats-test', { useMongoClient: true });

const server = require('./server');
const models = require('./models.test.js')

const testCat = { 
    "name": "Kara",
    "color": "Grey and White",
    "age": 7,
    "fact": "Kara is the cutest little kitty."
}

describe(`cat api`, () => {
    beforeEach(() => {
        const newCat = new Cat(testCat);
        newCat.save();
    })
    afterEach(() => {
        Cats.remove({}, (err) => {
            done();
        });
    });
})

describe(`[GET] '/cats'`, () => {});
it('should return a list of kitties', done => {
    chai
        .request(server)
        .get('/kitties')
        .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body.text).to.be.an('array');
        })
})