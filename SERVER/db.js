const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/teacherstudent");
var db=mongoose.connection
db.on("error",console.error.bind("error in connection"));
db.once("open",function(){
    console.log("database connection success");
})
module.exports=db;
