const express = require('express');
const StudentRouter = express.Router();
const { getStudentData } = require('../controller/student.controller');
const { SaveStudent } = require('../controller/saveStudent.controller');
const { DeleteStudent } = require('../controller/DeleteStudent.controller');
const { Gracemarks } = require('../controller/GraceMarks.controller');

StudentRouter.get("/all", getStudentData);

StudentRouter.post("/save", SaveStudent);

StudentRouter.delete("/deleteStudent/:id", DeleteStudent);

StudentRouter.patch("/grace", Gracemarks);


module.exports = {StudentRouter};
