import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import i5 from "./img3.jpg";
import './navigation.css'
import { useNavigate } from 'react-router-dom';
import { AiFillAmazonCircle } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

function Navi() {
  const navigate=useNavigate();
  function redirectlogin()
  {
    navigate('/login')
  }
  function redirectregister()
  {
    navigate('/register')
  }
  function redirecthome()
  {
    navigate('/')
  }
  function redirectteacher()
  {
    navigate('/teacher')
  }
  function redirectstudent()
  {
    navigate('/studenthome')
  }
  function redirectadmin()
  {
    navigate('/admin');
  }
  
  return ( 
    <>
     
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" onClick={redirecthome}><FaUniversity />STUDENT MANAGEMENT</Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link   onClick={redirectteacher}><h5 className="abb" ><GiTeacher />TEACHER</h5></Nav.Link>
            <Nav.Link   onClick={redirectstudent}><h5 className="abb" ><PiStudentBold />STUDENT</h5></Nav.Link>
            <Nav.Link   onClick={redirectadmin}><h5 className="abb" ><MdAdminPanelSettings />ADMIN</h5></Nav.Link>
           
          </Nav>
          <hr/>
        </Container>
       
      </Navbar>

      
    </>
  );
}

export default Navi;