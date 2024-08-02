const express = require('express');

let todosRouter = express.Router();

todosRouter.get("/", (req,res) => { 
    res.send("This is for all todos")
});
todosRouter.get("/1", (req,res) => { 
    res.send("This is for todos 1")
});
todosRouter.post("/delete", (req,res) => { 
    res.send("SAVED!!")
});

module.exports = (todosRouter);