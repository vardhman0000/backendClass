const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
    name : {type : String, required : true},
    isCompleted : {type : Boolean, default : false}
});

const TodoModel = mongoose.model("todo", TodoSchema);

module.exports = {TodoModel};