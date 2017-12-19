const mongoose = require('mongoose');
const chai = requre('chai');
const sinon = require('sinon');
const { expect } = chai;

const Kitties = require('./kitties');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });

describe('Kitties', ())