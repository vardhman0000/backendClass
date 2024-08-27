const express = require('express');
const StudentRouter = express.Router();
const {StudentModel} = require('../models/Student.model');


StudentRouter.post("/add", async (req,res) => { 
    let payload = req.body;
    try{
        const student = new StudentModel(payload);
        await student.save();
        res.status(200).send("Student Saved!!");
    }
    catch(err){
        res.status(500).send("Something Went Wrong!!");
        console.error(err);
        
    }
});


StudentRouter.get("/", async (req,res) => { 
    try{
        let data = await StudentModel.find();
        res.status(200).send(data);
    }
    catch(err){
        res.status(402).send("Something Went Wrong!!")
    }
});


StudentRouter.delete("/delete/:id", async (req,res) => { 
    let id = req.params.id;
    try{
        await StudentModel.findByIdAndDelete(id);
        res.status(200).send("Deleted!!")
    }
    catch(err){
        res.status(500).send("Error Occured!!")
    }
 });


 // This route should be at last
StudentRouter.get("*", (req,res,next) => { 
    // res.send({"message" : "Invalid URL", "status" : "ERROR"});
    let err = new Error("Students Bhag jao yaha se");
    err.statusCode = 404;
    next(err);
});

//Global Error Handling
StudentRouter.use((err,req,res,next) => { 
    res.status(err.statusCode).json({
        message : err.message,
    });
});


module.exports = {StudentRouter};