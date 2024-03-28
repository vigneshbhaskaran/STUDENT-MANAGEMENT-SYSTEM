var mongoose=require("mongoose");
const blogschema=mongoose.Schema({
 author:
 {
    type:String
 },
 title:
 {
    type:String
 },
 description:
 {
    type:String
 }
},{timestamp:true})
const notesmodel=mongoose.model("notes",blogschema);
module.exports=notesmodel;