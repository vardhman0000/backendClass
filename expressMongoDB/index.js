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
})
// .then(() => { 
//     StudentModel.insertMany([
//         {
//             name:"Vardhman Jain",
//             rollno:2513,
//             age:19
//         }
//     ])
// }).then(() => { 
//     console.log("Data Inserted!!");
// }).catch(err => console.error("Data not Inserted!!", err))







/*
1, Data comes from req.body
2. Data initiated to model class
3. Data saved in DB
*/

// **** CREATE **** //
app.post("/saveStudent", async (req,res) => { 
    let student = new StudentModel(req.body); // 1 , 2
    try{
        const result = student.save(); // 3
        res.status(200).send(result);
    }
    catch(err){
        res.status(400).send(err);
    }
});

// **** READ **** //
app.get("/readData/:name", async (req,res) => { 
    try{
        let name = req.params.name;
        let data = await StudentModel.find( {name : name} );
        res.send(data);

        // let student = new StudentModel.find(req.params.name); // --> This is ORM Approach --> ORM is Object Relation Mapping --> Advanced Queries can't be applied on ORM Approach
        // console.log(student); 
        // res.send(student);
    }
    catch(err){
        res.send(err)
    }
});

// **** UPDATE **** //
app.put("/update/:rollno", async (req,res) => { 
    try{
        let rollno = req.params.rollno;
        let name = req.body.name;
        await StudentModel.updateOne( {rollno:rollno} , {$set : {name:name}} );
        res.send("Data Updated!!")
    }
    catch(err){
        res.send(err);
    }
})

// **** DELETE **** //
app.delete("/delete/:rollno", async (req,res) => { 
    try{
        let rollno = req.params.rollno;
        await StudentModel.deleteOne({rollno:rollno});
        res.send("Data Deleted!!")
    }
    catch(err){
        res.send(err);
    }
});


app.listen(port, () => { 
    console.log(`Server Started at Port ${port}!!`);
})


