const express = require('express');
const port = 4500;
let app = express();


//Connection
const mongoose = require('mongoose');
const StudentModel = require('./Models/Student');
const url = "mongodb://127.0.0.1:27017/studentdb";





// Middleware
app.use(express.json());

// Method Chaining
mongoose.connect(url, {
    useNewUrlParser:true, // builds string connection as url is given in string format
    useUnifiedTopology:true // maps server in a proper topology
}).then(() => { 
    StudentModel.insertMany([
        {
            name:"Vardhman Jain",
            rollno:2513,
            age:19
        }
    ])
}).then(() => { 
    console.log("Data Inserted!!");
}).catch(err => console.error("Data not Inserted!!", err))



app.get("/", (req,res) => { 
    res.send("This is Home Page!!")
    // let data = StudentModel.find()
});

// app.post("/saveStudent", (req,res) => { 
//     let student = new StudentModel({
//         name:"Stuxnet",
//         rollno:85,
//         age:19
//     });
//     student.save()
//     res.send("Stuxnet Saved!!")
// });


/*
    1, Data comes from req.body
    2. Data initiated to model class
    3. Data saved in DB
*/

app.post("/saveStudent", async (req,res) => { 
    let student = new StudentModel(req.body);
    try{
        const result = student.save();
        res.status(200).send(result);
    }
    catch(err){
        res.status(400).send(err);
    }
 });



app.listen(port, () => { 
    console.log(`Server Started at Port ${port}!!`);
})


