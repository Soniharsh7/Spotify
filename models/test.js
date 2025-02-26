const mongoose = require("mongoose");

var testSchema= mongoose.Schema({
    title:String,
    data:String
})

module.exports=mongoose.model("test",testSchema);
