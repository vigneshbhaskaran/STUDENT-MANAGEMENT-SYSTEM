import { useState } from 'react'
import './teacherlogin.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
function TeachLog()
{ 
    const [temail,setTemail]=useState("");
    const [tpassword,setTpassword]=useState("");
    const [typ,setTyp]=useState("password");
    const navigate=useNavigate();
     function showpass()
     {
        setTyp("text");
     }
     function hidepass()
     {
        setTyp("password");
     }
    function redirectmain()
    {
        navigate("/teacher");
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        let obj={temail,tpassword};
        sendData(obj);
    }
    async function sendData(obj)
    { 
        try
        {
       let res=await axios.post("http://localhost:8010/teacher/login",obj);
       if(res.status===200)
       {
        alert("login is success");
        redirectmain();
       }
        }
        catch(error)
        {
            console.log(error);
            alert("emailid or password is wrong");
        }

    }
    return(
        <>
        <div>
        
        <div className="log">
        <h2>LOGIN</h2>
        <p>Login to ur account</p>
     
   
  
     <form onSubmit={handleSubmit}>
     <input type="email" placeholder="email" id="emai" name="email" value={temail} onChange={(e)=>setTemail(e.target.value)} /><br/><br/>
     <input type={typ} placeholder="password" id="pass" name="password" onChange={(e)=>setTpassword(e.target.value)} />
     {typ==="password"?
      (
         <FaEye onClick={showpass} className="trs" />
      ):
      (
         <IoEyeOff onClick={hidepass} className="trh" />  
      )
      
       
   
      }
      <br/>
      <button class="button">LOGIN</button>
    
     <p className="bot1">Dont have an account?    <span className="r">Register</span> </p>
     </form>
     </div>
     
     </div>

     

        
        
    </>
    )
}
export default TeachLog