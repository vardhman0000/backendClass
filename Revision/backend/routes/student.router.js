const express = require('express');
const StudentRouter = express.Router();
const { getStudentData } = require('../controller/student.controller');
const { SaveStudent } = require('../controller/saveStudent.controller');

StudentRouter.get("/all", getStudentData);

StudentRouter.post("/save", SaveStudent);


module.exports = {StudentRouter};
