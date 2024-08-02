const express = require('express');
const cowsay = require('cowsay');

let app = express();

app.get("/", (req,res) => { 
    res.end("This is Home Page!!")
})

app.get("/cow", (req,res) => { 
    res.end(cowsay.say({
        text:"I'm a COW", 
        e : "xx",
        T : " U"
    }))
})


app.listen(4444, () => { 
    console.log("Server started at port 6666!!");
})
