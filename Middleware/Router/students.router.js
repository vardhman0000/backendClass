const express = require('express');

let studentsRouter = express.Router();


studentsRouter.get("/", (req,res) => { 
    res.send("This is for students")
});
studentsRouter.get("/1", (req,res) => { 
    res.send("This is for students 1")
});
studentsRouter.delete("/delete", (req,res) => { 
    res.send("Student Deleted")
});

module.exports = (studentsRouter);