const express = require('express');
const fs = require('fs');

let app = express();

app.use(express.json()); //middleware

app.get("/", (req,res) => { 
    res.end("HOME PAGE!!")
})


app.get("/data", (req,res) => { 
    let data = fs.readFileSync("./db.json", "utf-8");
    res.end(data);
})

app.get("/data/students", (req,res) => { 
    let data = fs.readFileSync("./db.json", "utf-8");
    let parsedData = JSON.parse(data);
    res.send(parsedData.students);

})

app.get("/data/teachers", (req,res) => { 
    let data = fs.readFileSync("./db.json", "utf-8");
    let parsedData  = JSON.parse(data);
    res.send(parsedData.teachers);
})

app.get("/student/:name", (req,res) => { 
    let name = req.params.name;
    let data = fs.readFileSync("./db.json", "utf-8");
    let parsedData = JSON.parse(data);
    let students = parsedData.students;
    let student = students.filter((ele) => { 
        if(ele.name == name){
            return true;
        } else {
            return false;
        }
    });
    res.send(student);
})

// Passing name using params
app.post("/student/save", (req,res) => { 
    console.log(req.body);
    let data = fs.readFileSync("./db.json", "utf-8");
    let parsedData = JSON.parse(data); // Parsing text -> JSON
    let students = parsedData.students; // Accessing Student Array

    let student = req.body; // Accessing request Body
    students.push(student); // Adding data in Array

    parsedData.students = students; //Updating Student Array
    fs.writeFileSync("./db.json", JSON.stringify(parsedData)) // Writing into db.json by converting json data back to text

    res.statusCode = 202; // Set the status code

    res.send("DATA SAVED!!");
})

// Passing name using Query
app.delete("/student/delete", (req,res) => { 

    let name = req.query.name;
    let data = fs.readFileSync("./db.json", "utf-8");
    let parsedData = JSON.parse(data);
    let students = parsedData.students;

    let newStudents = students.filter((ele) => { 
        if(ele.name == name){
            return false;
        }

        return true;
    });
    
    parsedData.students = newStudents;

    fs.writeFileSync("./db.json", JSON.stringify(parsedData));

    res.send("Data Deleted!!")
})


app.listen(4000, () => { 
    console.log("Server started at port 4000")
})