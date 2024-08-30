const express = require('express');
require('dotenv').config()
const {connection} = require('./config/db');
const {TodoRouter} = require('./routes/todo.router');
var bodyParser = require('body-parser')


let app = express();
app.set('view engine', 'ejs');
app.use('/todos', TodoRouter);
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false })) // Parse Form Data


app.listen(process.env.PORT, async() => { 
    try {
        await connection;
        console.log("DB Connected!!");
        
    } catch (err) {
        console.error(err);
        
    }
    console.log(`Server Started at Port ${process.env.PORT}`);
});