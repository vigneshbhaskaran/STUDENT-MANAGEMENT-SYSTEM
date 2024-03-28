const mongoose=require("mongoose");
const studentschema=mongoose.Schema({
    sname:{
         type:String
    },
    sage:{
        type:String
    },
    smarks:{
        type:Number
    },
    semail:{
        type:String
    },
    spassword:{
        type:String
    },
    scourse:
    {
        type:String
    },
    sgender:
    {
        type:String
    }
},{timestamp:true})
const studentmodel=mongoose.model("student-datas",studentschema);
module.exports=studentmodel;