const {StudentModel} = require("../models/student.model");

const getStudentData = async (req,res) => { 
    try {
        const data = await StudentModel.find();
        res.send(data);
    } catch (error) {
        console.error("Something went Wrong!!");
        
    }
}

module.exports = {getStudentData};