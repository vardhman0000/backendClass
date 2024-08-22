const express = require('express');
const {connection} = require('./config/db');
const {UserModel} = require('./models/User.model');
const {StudentRouter} = require('./router/Student.router');
require('dotenv').config()


let app = express();


app.use(express.json());
app.use("/students", StudentRouter);


app.get("/", (req,res) => { 
    res.end("This is Home Page!!")
})


app.get("/data",  (req,res) => { 
    const token = req.headers.authorization;
    try {
        if(token == "stuxnet"){
            res.status(200).send("Here's your Data!!");
        }
    } catch (err) {
        res.status(402).send("Abe Token shi leke aa!!")
    }
 });


app.post("/user/register", async (req,res) => { 
    const payload = req.body;
    try{
        const user = new UserModel(payload);
        await user.save();
        res.status(200).send("User Refgistered Successfully :) ");
    }
    catch(err){
        res.status(500).send("Something went Wrong :( ");
    }
})

app.post("/user/signin" , async (req,res) => { 
    const payload = req.body;
    try{
        let email = payload.email;
        let password = payload.password;
        const user = await UserModel.find( {email, password} );

        if(user.length > 0){
            res.status(200).send({
                message : "Signin Successful :) ",
                token : "stuxnet"
            });
        }
        else{
            res.status(402).send("Wrong Creds :( ");
        }
    }
    catch(err){
        console.error("Something Went Wrong!!");
    }
});


// This route should be at last
app.get("*", (req,res,next) => { 
    // res.send({"message" : "Invalid URL", "status" : "ERROR"});
    let err = new Error("Invalid URL");
    err.statusCode = 404;
    next(err);
});

//Global Error Handling
app.use((err,req,res,next) => { 
    res.status(err.statusCode).json({
        message : err.message,
    });
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