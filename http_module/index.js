const http = require('http');
const fs = require('fs');

// To see all the http response codes
// console.log(http);


let server = http.createServer((req,res) => { 
    if(req.url=="/"){
        res.end("THIS IS HOME PAGE!!")
    }
    else if(req.url=="/about"){
        res.end("<h1>This is About Endpoint!!</h1>")
    }
    else if(req.url=="/contact"){
        res.end("<h1>This is Contact Page!!</h1>")
    }
    else if(req.url=="/data"){
        fs.readFile("./db.json","utf-8", (err,data) =>{
            if(err){
                res.end("Something went wrong!!")
            }
            else{
                res.end(data);
            }
        })
    }
    else if(req.url=="/save" && req.method=="POST"){
        let str = "";
        req.on("data", (chunk) => { 
            str += chunk;
        })

        req.on("end", () => { 
            console.log(str);
        })

        res.end("Data Saved!!")
    }
    else if(req.url=="/movie"){
        // SIMPLE CODE
        // let data=fs.readFileSync("movie.txt","utf-8");
        // res.end(data);


        // STREAM CODE
        let movieStream = fs.createReadStream("./movie.txt", "utf-8");
        movieStream.pipe(res);
    }
    else{
        res.end("Page hi nhi hai!!")
    }
})

// Preference of port number must be greater than 2000 and less than 10000
server.listen(5555, () => { 
    console.log("SERVER START HAI 5555 PORT PE");
 })


 // after updating the code you need to start the server again

// but nodemon will automatically restart the server when we make changes int he code


// npx autocannon http://localhost:5555   ---> THis will tell the capacity of server that how many requests it can handle
