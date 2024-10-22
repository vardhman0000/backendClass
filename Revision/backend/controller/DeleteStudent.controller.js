const {StudentModel} = require("../models/student.model");

const DeleteStudent = async (req,res) => { 
    let id = req.params.id;
    console.log(id);
    try {
        let data = await StudentModel.findByIdAndDelete({_id:id});
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send("Something Went Wrong!!");
    }
};

module.exports = {DeleteStudent};