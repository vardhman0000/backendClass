const connection  = require('./config/db');
const express = require("express");
const { StudentRouter } = require('./routes/student.router');
const port = 5000

const app = express();
app.use(express.json())
app.use("/student", StudentRouter);


app.get("/", (req,res) => { 
    res.status(200).send('This is Home Page');
 });


app.listen(port, async () => { 
    try {
        await connection;
        console.log(`Server Started on port ${port}`);
        console.log("DB Connected!!");
        
    } catch (error) {
        console.error("Connection Error!!");
    }
})