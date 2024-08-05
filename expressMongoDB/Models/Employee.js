const mongoose = require('mongoose');


const EmployeeSchema = new mongoose.Schema({
    emp_id : {
        emp_id : Number,
        required : true
    },
    emp_name : {
        emp_name : "String",
        required : true
    },
    emp_department : {
        emp_department : "String",
        required : true
    },
    emp_salary : {
        emp_salary : Number,
        required : true
    }
});

const EmployeeModel = mongoose.model("EmployeeModel", EmployeeSchema);

module.exports = EmployeeModel;