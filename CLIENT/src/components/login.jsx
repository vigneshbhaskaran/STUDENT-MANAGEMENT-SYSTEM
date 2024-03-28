import "./login.css";
import Navi from "./navigation.jsx";
import Bot from "./bottom.jsx";
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
function Login() {
  const navigate = useNavigate();
  const [semail, setEmail] = useState("");
  const [spassword, setPassword] = useState("");
  const [typ,setTyp]=useState("password");
  function showpass()
  {
    setTyp("text");
  }
  function hidepass()
  {
    setTyp("password");
  }
  function redirecthome() {
    navigate("/studenthome");
  }
  function handlesubmit(e) {
    e.preventDefault();
    console.log("submit", semail, spassword);
    let obj = { semail, spassword };
    sendData(obj);
  }
  async function sendData(obj) {
    try {
      let res = await axios.post("http://localhost:8010/student/login", obj);
      console.log(res);
      if (res.status == 200) {
        alert("login success");
        redirecthome();
      }
    } catch (error) {
      alert("userid or password is wrong");
      console.log(error);
    }
  }

  return (
    <>
      <div>
        <Navi />
        <div className="log">
          <h2>LOGIN</h2>
          <p>Login to ur account</p>

          <form onSubmit={handlesubmit}>
            <input
              type="text"
              placeholder="email"
              id="emai"
              name="email"
              value={semail}
              onChange={(e) => setEmail(e.target.value)}
            />
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
              <FaEye onClick={showpass} className="eyl" />
            ):
            (
              <IoEyeOff onClick={hidepass} className="eylh" />
            )

            }

            <br />
            <button class="button">LOGIN</button>

            <p className="bot1">
              Dont have an account? <span className="r">Register</span>{" "}
            </p>
          </form>
        </div>
        <Bot />
      </div>
    </>
  );
}
export default Login;
