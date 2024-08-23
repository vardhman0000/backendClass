const express = require('express');
const {connection} = require('./config/db');
const {UserModel} = require('./models/User.model');
const {StudentRouter} = require('./router/Student.router');
require('dotenv').config()
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


let app = express();


app.use(express.json());
app.use("/students", StudentRouter);


app.get("/", (req,res) => { 
    res.end("This is Home Page!!")
})


app.get("/data",  (req,res) => { 
    const token = req.headers.authorization;
    try {
        jwt.verify(token, 'coffee', function(err, decoded) {
            console.log(decoded.class) // g29
            if(decoded){
                res.status(200).send("Yeh lo aapka Data :) ")
            }
            else{
                res.status(402).send(":( Token galat hai :(");
            }
        });
    } catch (err) {
        res.status(402).send("Abe Token shi leke aa!!")
    }
});


app.post("/user/register", async (req,res) => { 
    const {name, email, password, mobile} = req.body;
    // const payload = req.body;
    try{

        bcrypt.hash(password, 5, async (err, hash) => {
            console.log(hash);
            const user = new UserModel({name, email, password:hash, mobile});
            await user.save();
            res.status(200).send("User Refgistered Successfully :) ");
        });

    }
    catch(err){
        res.status(500).send("Something went Wrong :( ");
    }
})

app.post("/user/signin" , async (req,res) => { 
    const {email, password} = req.body;
    try{

        const user = await UserModel.find( {email} );

        if(user.length > 0){

            bcrypt.compare(password, user[0].password, function(err, result) {
                if(result){
                    var token = jwt.sign({ class: 'g29' }, 'coffee', { expiresIn: '1h' });
                    res.status(200).send({
                        message : "Signin Successful :) ",
                        token : token
                    });
                }
                else{
                    res.status(402).send("Wrong Password :( ");
                }
            });

        }
        else{
            res.status(402).send("Wrong Creds!!")
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