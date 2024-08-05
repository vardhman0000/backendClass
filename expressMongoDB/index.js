const express = require('express');
const port = 4500;
let app = express();


//Connection
const mongoose = require('mongoose');
const StudentModel = require('./Models/Student');
const url = "mongodb://127.0.0.1:27017/Student_Database";



// Middleware
app.use(express.json());

mongoose.connect(url, )



app.get("/", (req,res) => { 
    res.send("This is Home Page!!")
});



app.listen(port, () => { 
    console.log(`Server Started at Port ${port}!!`);
})


