const express = require('express');
const StudentRouter = express.Router();
const {StudentModel} = require("../models/student.model");

StudentRouter.get("/all", async (req,res) => { 
    try {
        const data = await StudentModel.find();
        res.send(data);
    } catch (error) {
        console.error("Something went Wrong!!");
        
    }
});


module.exports = {StudentRouter};
