import "./register.css";
import Navi from "./navigation";
import Bot from "./bottom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";



function Register() {
  const [typ,setTyp] = useState("password");
const [sname, setName] = useState("");
const [semail, setEmail] = useState("");
const [spassword, setPassword] = useState("");
const [sage, setAge] = useState("");
const [scourse, setCourse] = useState("");
const [sgender, setGender] = useState("");
  const navigate = useNavigate();
  function redirectlogin() {
    navigate("/login");
  }
  function showpass()
{
  setTyp("text");
}
function hidepass()
{
  setTyp("password");
}
  

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted", sname, semail, spassword, sage, scourse, sgender);
    if (spassword.length < 6) {
      alert("password should be min 6 characters");
      return;
    }
    let obj = { sname, semail, spassword, sage, scourse, sgender };
    sendData(obj);
  }
  async function sendData(obj) {
    try {
      let res = await axios.post("http://localhost:8010/student/signup", obj);
      console.log(res);
      if (res.status == 200) {
        alert("student registration is success");
        redirectlogin();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navi />
      <div className="former">
        <h2 className="h">STUDENT REGISTRATION</h2>

        <p>FILL THE BELOW DETAILS</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="NAME"
            id="nam"
            name="name"
            value={sname}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="email"
            id="emai"
            name="email"
            value={semail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label for="do" className="dob">
            DATE-OF-BIRTH
          </label>
          <br />
          <input
            type="date"
            id="do"
            name="dob"
            placeholder="date-of-birth"
            value={sage}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <br />

          <input
            type="radio"
            id="ma"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="ma">MALE</label>
          <input
            type="radio"
            id="fe"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          <label for="fe">FEMALE</label>
          <br />
          <br />

          <select
            id="cours"
            name="course"
            value={scourse}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option>--SELECT A COURSE--</option>
            <option value="cse">COMPUTER SCIENCE</option>
            <option value="civil">CIVIL</option>
            <option value="electrical">ELECTRICAL</option>
            <option value="eee">EEE</option>
            <option value="mech">MECHANICAL</option>
          </select>
          <br />
          <br />

          <input
            type={typ}
            placeholder="password"
            id="passwor"
            name="password"
            value={spassword}
          
            onChange={(e) => setPassword(e.target.value)}
          />
            {typ==="password"?
            ( 
              <FaEye onClick={showpass} className="eyes" />
              
            ):
            (
             <IoEyeOff onClick={hidepass} className="eyeh" />
            )
              
               }
          <br />
          <button class="button">REGISTER</button>
        </form>
      </div>
      <Bot />
    </>
  );
}
export default Register;
