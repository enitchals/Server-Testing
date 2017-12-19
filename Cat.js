const mongoose = require('mongoose');
const { Schema } = mongoose;

const CatSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
    },
    fact: {
        type: String,
    },
});

CatSchema.methods.meow = function() {
    const meows = ['meow', 'meooooow', 'mrrrrowl', 'prrrt', 'prrrowl'];
    const meow = meows[Math.round(Math.random(-.49, 4.49))];
    return `${this.name} says ${meow}`
}

CatSchema.statics.getAllCats = function(cb) {
    Cat.find({}, (err, cats) => {
        if (err) return cb(err);
        cb(cats);
    });
};

module.exports = mongoose.model('Cat', CatSchema);