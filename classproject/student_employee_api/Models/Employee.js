const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({

    name : { type : String, required : true },
    emp_id : { type : Number, required : true },
    department : { type : String, required : true },
    isManager : { type : Boolean, required : true }

});

const ManagementSchema = new mongoose.Schema({

    manager_name : { type : String, required : true },
    department : { type : String, required : true },
    employees : { type : mongoose.Schema.Types.ObjectId, ref : "EmployeeSchema" }

});

const EmployeeModel = mongoose.model("EmployeeModel", EmployeeSchema);
const ManagementModel = mongoose.model("ManagementModel", ManagementSchema);

module.exports = { EmployeeModel, ManagementModel };