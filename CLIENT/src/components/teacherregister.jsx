import './teacherregister.css'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";


function TeacherRegister(){
     const [tname,setTname]=useState("");
     const [tage,setTAge]=useState("");
     const [temail,setTemail]=useState("");
     const [tpassword,setTpassword]=useState("");
     const [tcourse,setTcourse]=useState("");
     const [tgender,setTgender]=useState("");
     const [typ,setTyp]=useState("");
     const navigate=useNavigate();
     function showpass()
     {
      setTyp("text");
     }
     function hidepass()
     {
      setTyp("password");
     }
     function redirecthome()
     {
        navigate("/teacherlogin");
     }
    function handleSubmit(e)
    {e.preventDefault();
     console.log("submitted");
     let obj={tname,tage,temail,tpassword,tgender,tcourse}
     if(tpassword.length<6) 
     {
      alert("password should be min 6 characters");
      return;
     }
    sendData(obj);
    }
    async function sendData(obj)
    {
     
     try{
        let res=await axios.post("http://localhost:8010/teacher/signup",obj);
        if(res.status===200)
        {
            alert("signup is success");
            redirecthome();
        }
     }
     catch(error)
     {
        console.log(error)
     }
    }

    return(
     <>
     
     <div className="former">
     <h2 className='h'>TEACHER REGISTRATION</h2>
     <p>FILL THE BELOW DETAILS</p>
    
     <form onSubmit={handleSubmit}>
     <input type="text" placeholder="NAME" id="nam" name="name" value={tname} onChange={(e)=>setTname(e.target.value)} /><br/><br/>
     <input type="email" placeholder="email" id="emai" name="email"value={temail} onChange={(e)=>setTemail(e.target.value)}  /><br/><br/>
     <label className='lab'>DATE-OF-BIRTH</label><br/>
     <input type="date" id="do" name="dob" placeholder="date-of-birth"value={tage} onChange={(e)=>setTAge(e.target.value)}  /><br/><br/>
     
     <input type="radio" id="ma" name="gender" value="male"  onChange={(e)=>setTgender(e.target.value)} />
     <label for="ma">MALE</label>
     <input type="radio" id="fe" name="gender" value="female"  onChange={(e)=>setTgender(e.target.value)} />
     <label for="fe">FEMALE</label><br/><br/>
     
     <select id="cours" name="course"value={tcourse} onChange={(e)=>setTcourse(e.target.value)} >
      <option>-SUBJECT TAKING--</option>
      <option value="cse">COMPUTER SCIENCE</option>
      <option value="civil">CIVIL</option>
      <option value="electrical">ELECTRICAL</option>
      <option value="eee">EEE</option>
      <option value="mech">MECHANICAL</option>
      </select><br/><br/>
     
      <input type={typ} placeholder="password" id="pass" name="password"value={tpassword} onChange={(e)=>setTpassword(e.target.value)}  />
      {typ==="password"?
      (
         <FaEye onClick={showpass} className="trs" />
      ):
      (
         <IoEyeOff onClick={hidepass} className="trh" />  
      )
      
       
   
      }
      <br/>
      <button class="button">REGISTER</button>
      </form>

       
     </div>
     
     </>


    )
}
export default TeacherRegister