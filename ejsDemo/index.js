const { name } = require('ejs');
const express = require('express');
let path = require('path');
let port = 4000;

let app = express();


app.set('view engine', 'ejs');
// app.set('views', "/dirName"); // If you want to change the name of dir "views"


app.get("/", (req,res) => { 

    // Method 1 --> Using path.join function
    // let filePath = path.join(__dirname, "/views/index.html");
    // res.sendFile(filePath);

    // Method 2 --> Using __dirname in string tmeplate { ` ` }
    // res.sendFile(`${__dirname}/views/index.html`);


    res.render('index', {price : 99000, color : "Celestial Black"});
    
});

app.get("/usecases", (req,res) => { 
    res.render('usecases', {name : "Vardhman"});
});

app.get("/marks", (req,res) => { 
    let marks = req.query.marks;
    let arr = ['Vardhman', 'Stuxnet', 'Mydoom'];
    res.render('usecases', {marks : marks,name:"yeri", arr})
});

app.get("/cart", (req,res) => { 
    let arr = [
        {
            url : "https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600nw-2227567913.jpg",
            name : "Smartphone",
            price : 100000
        },
        {
            url : "https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600nw-2227567913.jpg",
            name : "Earbuds",
            price : 150000
        },
        {
            url : "https://image.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600nw-2227567913.jpg",
            name : "Smart Watch",
            price : 200000
        },

    ];
    res.render("cart", {arr});
});


app.listen(port, () => { 
    console.log(`Server Started at ${port}`);
    
})