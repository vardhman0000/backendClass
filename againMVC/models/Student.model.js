const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : Number,
    is_married : Boolean
});


const StudentModel = mongoose.model("student", StudentSchema); // Collection Name and schema

module.exports = {StudentModel};