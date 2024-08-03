let mongoose = require('mongoose'); // It is Asynchronous

// Connection
const main = async () => {

    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/abcd");
        console.log("Connected to MongoDB!!");
        
        // ***** Document Creation *****
        // await StudentModel.insertMany( [ { name:"someone2", rollno:8586, isMarried:true } ] )


        // ***** Creating a new object to save data *****
        let student = new StudentModel({
            name : 'someone7',
            // rollno : '8590',
            // isMarried : false,
            // year : 3
        });
        await student.save();
        console.log("Data Saved!!");



        // ***** Fetching Data from Server *****
        // let data = await StudentModel.find({rollno:8585});
        // console.log(data);
        
        // ***** Disconnecting After performing required tasks *****
        mongoose.disconnect();

    }
    catch(err) {
        console.log("Error!!");
        console.log(err);
        mongoose.disconnect()
        
    }
};

main();


// ||| Bottle Blueprint (Schema) ||| Bottle Mould (Model) |||  Bottle (Document) |||



// ******** SCHEMA (Blueprint) ********

let studentSchema = mongoose.Schema({
    name : String,
    rollno : {type:Number, required:true},
    isMarried:Boolean
},{
    versionKey : false
});



// ******** MODEL (Mould) ********

// Constructor Function --> That's why first character Capital
let StudentModel = mongoose.model("student", studentSchema);
// MongoDB will automatiacally change the name to "students" as it knows it is going to store multiple documents




/*

let student = new StudentModel({
            name : 45,   // ---> For this mongo will store ti as a string
            rollno : '8589', // --> For this mongo will see if it can be converted to integer then store else throw error, mtlb agar casting possible hai toh kr dega nhi toh error
            isMarried : false
        });

*/


// **** If some key is not defined in schema but you passed it, it will be ignored **** //
/*
    let student = new StudentModel({
            name : 'someone5',
            rollno : '8590',
            isMarried : false,
            year : 3
        });
*/



