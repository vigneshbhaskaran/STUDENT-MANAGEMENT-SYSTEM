const express = require("express");
const app = express();
var cors = require("cors");
const port = 8010;
const db = require("./db.js");
const StudentModel = require("./users/student.model.js");
const TeacherModel = require("./users/teacher.model.js");
const NotesModel = require("./users/notepublish.model.js");
app.use(express.json());
app.use(cors());

app.post("/teacher/signup", async (req, res) => {
  const tname = req.body.tname;
  const tage = req.body.tage;
  const tpassword = req.body.tpassword;
  const temail = req.body.temail;
  const tcourse = req.body.tcourse;
  const tgender = req.body.tgender;
  const teaexist = await TeacherModel.findOne({ temail });
  if (teaexist) {
    return res.status(404).json({ message: "teacher already exists" });
  }

  const teacherdata = await new TeacherModel({
    tname,
    tage,
    tpassword,
    temail,
    tcourse,
    tgender,
  });
  await teacherdata.save();
  res.status(200).json({ message: "signup is ok", data: teacherdata });
});

app.post("/teacher/login", async (req, res) => {
  const temail = req.body.temail;
  const tpassword = req.body.tpassword;
  const teacherdata = await TeacherModel.find({ temail });
  if (teacherdata.length === 0)
    return res.status(404).json({ message: "teacher not found" });
  if (tpassword !== teacherdata[0].tpassword)
    return res.status(404).json({ message: "teacher not found" });
  else {
    console.log(teacherdata);
    return res
      .status(200)
      .json({ message: "login is success", data: teacherdata });
  }
});
app.get("/teacherview",async (req,res)=>{
  let teacher=await TeacherModel.find();
  res.status(200).json({message:"teacher data::",data:teacher});
})

app.post("/student/signup", async (req, res) => {
  const sname = req.body.sname;
  const sage = req.body.sage;
  const smarks = req.body.smarks;
  const spassword = req.body.spassword;
  const semail = req.body.semail;
  const scourse = req.body.scourse;
  const sgender = req.body.sgender;
  const stuexist = await StudentModel.findOne({ semail });

  if (stuexist) {
    return res.status(404).json({ message: "student exists already" });
  }

  const studentdata = await new StudentModel({
    sname,
    sage,
    spassword,
    semail,
    smarks,
    scourse,
    sgender,
  });
  await studentdata.save();
  res.status(200).json({ message: "signup is ok", data: studentdata });
  console.log(studentdata);
});

app.post("/student/login", async (req, res) => {
  const semail = req.body.semail;
  const spassword = req.body.spassword;
  const studentdata = await StudentModel.find({ semail });
  if (studentdata.length === 0)
    return res.status(404).json({ message: "student not found" });
  if (spassword !== studentdata[0].spassword)
    return res.status(404).json({ message: "student not found" });
  else res.status(200).json({ message: "login success", data: studentdata[0] });
});

app.post("/notes", async (req, res) => {
  const author = req.body.author;
  const title = req.body.title;
  const description = req.body.description;
  const notes = await new NotesModel({ author, title, description });
  await notes.save();
  console.log("notes added::", notes);
  res.status(200).json({ message: "notes added", data: notes });
});
app.get("/get-note",async (req,res)=>{
    let data=await NotesModel.find();
    res.status(200).json({message:"ALL NOTES::",data:data});
})
app.get("/view-students",async(req,res)=>{
  let stu=await StudentModel.find();
  res.status(200).json({message:"students list::",data:stu});
})

app.listen(port, function () {
  console.log("server running on port", port);
});
