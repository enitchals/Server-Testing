const mongoose = require('mongoose');
const { Schema } = mongoose;

const KittySchema = new Schema({
    name: {},
    color: {},
    age: {},
    fact: {},
})