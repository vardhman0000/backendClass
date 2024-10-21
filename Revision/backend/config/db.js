const mongoose = require('mongoose');

const connection = mongoose.connect("mongodb://localhost:27017/g29");

module.exports = [connection];