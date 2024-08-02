let mongoose = require('mongoose'); // It is Asynchronous

// Connection
const main = async () => {

    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/abcd");
        console.log("Connected to MongoDB!!");
        
        // Document Creation
        await StudentModel.insertMany( [ { name:"Vardhman Jain", rollno:2513, isMarried:false } ] )
        console.log("Data Saved!!");

    }
    catch {
        console.log("Error!!");
    }
};

main();


// ||| Bottle Blueprint (Schema) ||| Bottle Mould (Model) |||  Bottle (Document) |||



// ******** SCHEMA (Blueprint) ********

let studentSchema = mongoose.Schema({
    name : String,
    rollno : Number,
    isMarried:Boolean
});



// ******** MODEL (Mould) ********

// Constructor Function --> That's why first character Capital
let StudentModel = mongoose.model("student", studentSchema);
// MongoDB will automatiacally change the name to "students" as it knows it is going to store multiple documents



