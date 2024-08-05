const mongoose = require('mongoose');


const StudentSchema = new mongoose.Schema({
    name : {
        name : "String",
        required : true
    },
    rollno : {
        rollno : Number,
        required : true
    },
    age : {
        age : Number,
    },
    subject : {
        subject : ["C++", "Java", "Cybersecurity", "Web D"]
    }
});

const StudentModel = mongoose.model("StudentModel", StudentSchema);

module.exports = StudentModel;