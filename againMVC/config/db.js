let mongoose = require('mongoose');

// const connection = mongoose.connect("mongodb+srv://amit:amitamit@cluster0.fxyt6.mongodb.net/infodb?retryWrites=true&w=majority&appName=Cluster0")
//mongodb+srv://amit:amitamit@cluster0.fxyt6.mongodb.net/infodb?retryWrites=true&w=majority&appName=Cluster0

require('dotenv').config()

const connection = mongoose.connect(process.env.MONGODB_URL)

// const connection = mongoose.connect("mongodb://127.0.0.1:27017/infodb")


module.exports = {connection};