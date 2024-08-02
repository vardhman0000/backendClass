const express = require('express');
const path = require('path');
const multer = require('multer');
const upload = multer({dest : 'uploads/'})

let app = express();


// app.use(express.static(path.join(__dirname), "./index.html"))


app.get("/", (req,res) => { 
    res.send("This is Home Page!!")
});
//                                       __|__---> Name property in form tag
app.post("/uploadfile", upload.single('fileName'), (req,res,next) => { 
    res.send("File Saved!!");
});


app.listen(6000, () => { 
    console.log("Server started at Port 6000");
});