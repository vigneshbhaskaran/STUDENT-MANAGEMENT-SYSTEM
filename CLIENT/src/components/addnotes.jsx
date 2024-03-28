import { useState } from "react";
import axios from "axios";
import "./addnotes.css";
function Addnotes() {
     const [author,setAuthor] =useState("");
     const [title,setTitle]=useState("");
     const [description,setDescription]=useState("");

    function handlesubmit(e)
    {
        e.preventDefault();
        let obj={author,title,description};
        sendData(obj);
        console.log(obj);
    }
    async function sendData(obj)
    {
        try{
            let res=await axios.post("http://localhost:8010/notes",obj);
            if(res.status===200)
            {
                alert("new note is being published");
            }
         
        }
        catch(error)
        {
            console.log(error);
        }
    }

    return(
        <>
        <div className="add">
        <div className="notes">
        <h2>ADD A NOTE</h2>
        <form onSubmit={handlesubmit}>
            <input  className="no" type="text" value={author} placeholder="AUTHOR NAME" onChange={(e)=>setAuthor(e.target.value)}/><br/><br/>
            <input className="no" type="text" value={title} placeholder="TITLE" onChange={(e)=>setTitle(e.target.value)} /><br/><br/>
            <input  className="no" type="text" value={description} placeholder="DESCRIPTION" onChange={(e)=>setDescription(e.target.value)} /><br/><br/> 
            <button className="sub">Submit</button>
        </form>
        </div>
        </div>
        </>
    )
}
export default Addnotes;