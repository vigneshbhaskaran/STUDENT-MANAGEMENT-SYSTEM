import Nav from 'react-bootstrap/Nav';
import "./admin.css";
import i11 from "./lock.png";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navig=useNavigate();
  function redirectadminlogin()
  {
    navig('/adminlogin');
  }
  function redirectviewstudent()
  {
    navig('/viewstudents');
  }
  function redirectviewteacher()
  {
    navig('/viewteacher');
  }
  
  return (
    <>
    <h1 className='head'>ADMIN</h1>
    <Nav defaultActiveKey="/home" className="flex-column ff ">
      <Nav.Link className='al d'>DASHBOARD</Nav.Link>
      <hr className='hrc'/>
     
      <Nav.Link  className='al' onClick={redirectadminlogin} ><img src={i11} className='i12' />LOGIN</Nav.Link>
      <hr className='hrc'/>
      <Nav.Link  className='al'onClick={redirectviewteacher} >VIEW TEACHER<i class="bi bi-universal-access" ></i></Nav.Link>
      <hr className='hrc'/>
      <Nav.Link  className='al'>ADD TEACHER</Nav.Link>
      <hr className='hrc'/>
      <Nav.Link  className='al' onClick={redirectviewstudent}>VIEW STUDENT</Nav.Link>
      <hr className='hrc'/>
      <Nav.Link  className='al'>ADD STUDENT</Nav.Link>
      <hr className='hrc'/>
    </Nav>
    
    <h4 className='info'>&copy;site developed by INFO solutions &#64;2024</h4>
    </>
  );
}

export default Admin;