const express = require('express');
const fs = require('fs');
const path = require('path');
const studentsRouter = require('./Router/students.router')
const todosRouter = require('./Router/todos.router');

const timeLogger = require('./MiddleWare/timeLogger.middleware')
const reqLogger = require('./MiddleWare/reqLogger.middleware');

let app = express() ;


// Types of creating variable
// Camel Case --> firstWord (Capitalize 1st letter of words except 1st word)
// Snake Case --> second_word (using underscores)


//MIDDLEWARE ---> Will work for everything below it


// console.log(__dirname + "/index.js") // ---> Will print absolute path of current directory
// console.log(path.join(__dirname, "/public")); // ---> in windows / -> \ the slash will change 


// Custom Middlewares
app.use( timeLogger );
app.use( reqLogger ) ;


// Passing a ststic file in a response
app.use(express.static(path.join(__dirname, "/public"))) ;


// Creating Router --> Managing endpoints effectively
app.use("/students",studentsRouter);
app.use("/todos", todosRouter)



app.use( (req,res,next) => { 
    console.log(1);
    next();
    console.log(2);
} );

app.use( (req,res,next) => { 
    console.log(3);
    next();
    console.log(4);
} );



app.get("/", (req,res) => { 
    console.log("This is Home Page");
    res.send("This is Home Page!!");
});
app.get("/about", (req,res) => { 
    console.log("This is About Page");
    res.send("This is About Page!!");
});
app.get("/contact", (req,res) => { 
    console.log("This is Contact Page");
    res.send("This is Contact Page!!");
});


// Accessing a static file through a route
app.get("/static", (req,res) => { 
    let pathToFile = path.join(__dirname, "/public/index.html");
    res.sendFile(pathToFile);
});





app.listen(4000, () => { 
    console.log("Server statred at Port 4000");
});