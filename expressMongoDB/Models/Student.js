const mongoose = require('mongoose');


const StudentSchema = new mongoose.Schema({
    name : {
        type : "String",
        required : true
    },
    rollno : {
        type : Number,
        required : true
    },
    is_married : {
        type : Boolean,
        default: false
    }
    // age : {
    //     age : Number,
    // },
    // subject : {
    //     subject : ["C++", "Java", "Cybersecurity", "Web D"]
    // }
});

const StudentModel = mongoose.model("StudentModel", StudentSchema);

module.exports = StudentModel;