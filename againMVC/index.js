const express = require('express');
const {connection} = require('./config/db');
const {StudentModel} = require('./models/Student.model');
const {StudentRouter} = require('./router/Student.router');
require('dotenv').config()

let app = express();


app.use(express.json());
app.use("/students", StudentRouter);


app.get("/", (req,res) => { 
    res.end("This is Home Page!!")
})


app.listen(process.env.PORT, async () => { 
    try {
        await connection; // Connect to Database on Starting the Server
        console.log("DB Connected!!");
        
    }
    catch(err){
        console.log("Connection not Established!!");
        console.error(err);
    }
    console.log(`Server started at port ${process.env.PORT}!!`);
})