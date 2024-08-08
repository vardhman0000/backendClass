const express = require('express');
const mongoose = require('mongoose');
const {EmployeeModel, ManagementModel} = require('./Models/Employee');

const port = 5000;
const url = "mongodb://127.0.0.1:27017/employee_mgmt";

let app = express();
app.use(express.json());

mongoose.connect(url, { useNewUrlParser : true, useUnifiedTopology: true })
// .then(() => { 
//     EmployeeModel.insertMany([
//         {
//             name : "Vardhman Jain",
//             emp_id : 85,
//             department : "CyberSec",
//             isManager : true
//         }
//     ])
// }).then(() => { 
//     console.log("Data Inserted !!")
// }).catch(err => console.error("Data not Inserted!!", err));



/* 

    1. Post(Create)                                  -> /employees 
    2. GET(All Employees)                            ->  /employees
    3. GET(Employee based on Object ID)              -> /employees/:id
    4. Update                                        -> /employee/:id
    5. Delete                                        -> /delete/:id

    1. Post(Create)                                  -> /management
    2. GET(All Management)                           -> /managements
    3. GET(Management based on Object ID)            -> /management/:id

*/

// **** #1. Post (Create) -> /employees **** //
app.post("/employees", async (req,res) => { 
    try {
        
    } catch (error) {
        
    }
});


// **** #2. GET (All Employees) -> /getemp **** //
app.get("/getemp", async (req,res) => { 
    try {
        
    } catch (error) {
        
    }
});


// **** #3. GET (EMployee based on Object Id) -> /emp/:id **** //
app.get("/getemp/:id", async (req,res) => { 
    try {
        let id = req.params.id ;
    } catch (error) {
        
    }
});


// **** #4. PUT (Update) -> /employee/:id **** //
app.put("/uptemp/:id", async (req,res) => { 
    try {
        
    } catch (error) {
        
    }
});


// **** #5. DELETE (Delete Employee) -> /delete/:id **** //
app.delete("/delete/:id", async (req,res) => { 
    try {
        
    } catch (error) {
        
    }
});


// **** #6. POST (Set Management) -> /management **** //
app.post("/management", async (req,res) => { 
    try {
        
    } catch (error) {
        
    }
});


// **** #7. GET (All Management) -> /managements **** //
app.get("/managements", async (req, res) => { 
    try {
        
    } catch (error) {
        
    }
});


// **** #8. GET (Get management based on object id) -> /management/:id **** //
app.get("/management/:id", async (req,res) => { 
    try {
        
    } catch (error) {
        
    }
});



app.listen(port, () => { 
    console.log(`Server started at port ${port}`);
})