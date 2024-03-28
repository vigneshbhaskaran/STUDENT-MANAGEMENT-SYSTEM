import Table from "react-bootstrap/Table";
import { useState,useEffect } from "react";
import axios from "axios";
function Viewteacher() {
    const[teacher,setTeacher]=useState([]);
    useEffect(function(){
     getData();
    },[])
    async function getData()
    {
        try{
          let res=await axios.get("http://localhost:8010/teacherview");
          setTeacher(res.data.data);
          console.log(teacher);
        }
        catch(error)
        {
            console.log("error");
        }
    }
  return (
   <>
   <div>
    <h1>hiii</h1>

   <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>AGE</th>
          <th>EMAIL</th>
          <th>COURSE</th>
          <th>GENDER</th>
        </tr>
      </thead>
      <tbody>
        {teacher.map((teach,index)=>{
         return (
            <tr key={index}>
            <td>{index+1}</td>
            <td>{teach.tname}</td>
            <td>{teach.tage}</td>
            <td>{teach.temail}</td>
            <td>{teach.tcourse}</td>
            <td>{teach.tgender}</td>

            </tr>
         )
        })}
      </tbody>
    </Table>


    </div>
   </>

  )

}

export default Viewteacher