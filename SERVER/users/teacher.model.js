const mongoose=require("mongoose");
const teacherschema=mongoose.Schema({
    tname:{
         type:String
    },
    tage:{
        type:String
    },
    temail:{
        type:String
    },
    tpassword:{
        type:String
    },
    tcourse:
    {
        type:String
    },
    tgender:
    {
        type:String
    }
    
},{timestamps:true})
const teachermodel=mongoose.model("teacher-datas",teacherschema);
module.exports=teachermodel;