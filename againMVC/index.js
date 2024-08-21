const express = require('express');
const {connection} = require('./config/db');
const {StudentModel} = require('./models/Student.model');
const {StudentRouter} = require('./router/Student.router');
require('dotenv').config()

let app = express();


app.use(express.json());
app.use("/students", StudentRouter);

//Global Error Handling
app.use((err,req,res,next) => { 
    res.status(err.statusCode).json({
        message : err.message,
    });
});

app.get("/", (req,res) => { 
    res.end("This is Home Page!!")
})

app.get("*", (req,res,next) => { 
    // res.send({"message" : "Invalid URL", "status" : "ERROR"});
    let err = new Error("Invalid URL");
    err.statusCode = 404;
    next(err);
});


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