const mongoose = require('mongoose');
const chai = requre('chai');
const sinon = require('sinon');
const { expect } = chai;

const Cat = require('./Cat');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });

describe('Cat', ())