const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    rollno : {
        type : Number,
        required : true,
        unique : true,
        trim : true,
    },
    name : {
        type : String,
        required : true,
    },
    year : {
        type : Number,
        required : true,
        trim : true,
        min : 1,
        max : 4,
    }

});

const StudentModel = mongoose.model('student', StudentSchema);

module.exports = {StudentModel};