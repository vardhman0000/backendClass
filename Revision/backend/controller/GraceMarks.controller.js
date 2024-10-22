const {StudentModel} = require("../models/student.model");

const Gracemarks = async (req,res) => { 
    const {id, marks} = req.query;
    try {
        let student = await StudentModel.findById({_id:id});
        student.marks = student.marks + (+marks);
        await StudentModel.findByIdAndUpdate({_id:id, student});
        console.log(student.marks);
        await student.save();
        
        res.status(200).send(student)
    } catch (error) {
        res.send("Something went Wrong!!");
    }
 }
 
 module.exports = {Gracemarks};