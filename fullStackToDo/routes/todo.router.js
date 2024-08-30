const express = require('express')
const TodoRouter = express.Router();
const {TodoModel} = require('../models/todo.model');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

TodoRouter.use(bodyParser.urlencoded({ extended: false }))

TodoRouter.get("/", async (req,res) => { 
    try {
        const data = await TodoModel.find();
        console.log(data);
        res.render('index', {arr : data});
    } catch (error) {
        console.error();
        res.render('error');
    }
});

TodoRouter.get("/addtodo", (req,res) => { 
    res.render('add', {});
})

TodoRouter.post("/create", async (req,res) => { 
    let {name} = req.body; // Need to destructure and shoul be same with the name of input field
    console.log(name);
    
    try {
        let todo = TodoModel({name});
        await todo.save();
        res.redirect('/todos');
    } catch (error) {
        console.error(error);
        
        res.render('error')
    }
});


module.exports = {TodoRouter};