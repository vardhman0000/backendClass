const express = require('express');
const path = require('path');
const multer = require('multer');
// const upload = multer({dest : 'uploads/'}) // --> If you're not using storage instead using dest


let storage = multer.diskStorage({

    destination : function(req, file, cb){
        return cb(null, "uploads/")
    },
    filename : function(req, file, cb){
        let fn = file.fieldname + " " + (Math.random())*10 + " " + path.extname(file.originalname);
        cb(null, fn);
    }

    
})

const upload = multer({storage:storage});


let app = express();


app.get("/", (req,res) => { 
    res.send("This is Home Page!!")
});

app.get("/file", (req, res) => { 
    res.sendFile(path.join(__dirname, "./Public/index.html"))
});

//                                       __|__---> Name property in form tag
app.post("/uploadfile", upload.single('fileName'), (req,res,next) => { 
    res.send("File Saved!!");
    setTimeout(() => {
        res.redirect("/file")
    }, 2000);
    
});



// Toastify JS ----------------------------------

// import Toastify from 'toastify-js'
// import "toastify-js/src/toastify.css"



// -----------------------------------------------


app.listen(7000, () => { 
    console.log("Server started at Port 7000");
});