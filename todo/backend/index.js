const express = require('express');
const fs = require('fs');
const cors = require('cors');

let app = express(); // MIDDLEWARE
app.use(express.json());

app.use(cors()); // Handling CORS ERR


app.get("/todos", (req,res) => { 
    let data = fs.readFileSync("./db.json", "utf-8");
    let parsedData = JSON.parse(data);
    let todos = parsedData.todos;
    res.send(todos);
});

app.post("/todos/add", (req,res) => { 
    // console.log(req.body)

    let data = fs.readFileSync("db.json", "utf-8");
    let parsedData = JSON.parse(data);
    let todos = parsedData.todos;

    let todo = req.body;
    todos.push(todo);

    parsedData.todos = todos;

    fs.writeFileSync("./db.json", JSON.stringify(parsedData))

    res.send("Data Saved!!")
});

app.delete("/todos/delete/:id", (req,res) => { 
    let id = req.params.id;
    console.log(id);

    let data = fs.readFileSync("./db.json", "utf-8");
    let parsedData = JSON.parse(data); // Datatype -> Object
    let todos = parsedData.todos; // DataType -> Array
    let newTodo = todos.filter((ele) => { 
        if(ele.id == id){
            return false;
        } else{
            return true;
        }
    })

    parsedData.todos = newTodo;

    fs.writeFileSync("./db.json", JSON.stringify(parsedData));
    
    res.send("Data Deleted Successfully!!")
});

// app.post("/todos/:id/toggle", (req,res) => { 
//     let id = req.params.id;
//     console.log(id);

//     let data = fs.readFileSync("./db.json", "utf-8");
//     let parsedData = JSON.parse(data);
//     let todos = parsedData.todos;
//     let todo = todos.filter((ele) => { secon
        
//     });
//     res.send("SENT");
// })

app.put("/todos/toggle/:id", (req,res) => { 
    let id = req.params.id;
    console.log(id);
    let data = fs.readFileSync("./db.json", "utf-8");
    let parsedData = JSON.parse(data);
    let todos = parsedData.todos;
    // let newTodo = todos.filter((ele) => { 
    //     if(ele.id == id){
    //         ele.isCompleted = !ele.isCompleted;
    //         return ele;
    //     }
    //     else{
    //         res.send("Item not found!!");
    //         return ele;
    //     }
    // });

    let newTodo = todos.map((ele) => { 
        if(ele.id == id){
            ele.isCompleted = !ele.isCompleted;
            return ele;
        }
        else{
            return ele;
        }
    });



    parsedData.todos = newTodo;

    fs.writeFileSync("./db.json", JSON.stringify(parsedData));

    res.send("Status Updated!!");
})




app.listen(6500, () => { 
    console.log("Server Started at 6500!!");
})