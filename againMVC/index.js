const express = require('express');
const {connection} = require('./config/db');
const {StudentModel} = require('./models/Student.model');
const {StudentRouter} = require('./router/Student.router');


let app = express();


app.use(express.json());
app.use("/students", StudentRouter);


app.get("/", (req,res) => { 
    res.end("This is Home Page!!")
})


app.listen(4444, async () => { 
    try {
        await connection; // Connect to Database on Starting the Server
        console.log("DB Connected!!");
        
    }
    catch(err){
        console.log("Connection not Established!!");
        console.error(err);
    }
    console.log("Server started at port 4444!!");
})