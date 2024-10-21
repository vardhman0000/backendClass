const {StudentModel} = require("../models/student.model");


const SaveStudent = async (req,res) => { 
   let {rollno, name, year} = req.body;
   console.log(rollno, name, year);
    try {
        let student = StudentModel({rollno, name, year});
        await student.save();
        res.status(200).send("Student Saved Successfully!!");
    } catch (error) {
        res.send("Try Again Later!!")
    }
 }

 module.exports = {SaveStudent};    