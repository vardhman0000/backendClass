const mongoose = require('mongoose');


const EmployeeSchema = new mongoose.Schema({
    emp_id : {
        type : Number,
        required : true
    },
    emp_name : {
        type : "String",
        required : true
    },
    emp_department : {
        type : "String",
        required : true
    },
    emp_salary : {
        type : Number,
        required : true
    }
});

const EmployeeModel = mongoose.model("EmployeeModel", EmployeeSchema);

module.exports = EmployeeModel;