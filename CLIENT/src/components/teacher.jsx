import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './teacher.css';
import Bot from './bottom';
import { useNavigate } from 'react-router-dom';
import { GiTeacher } from "react-icons/gi";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCircleNodes } from "react-icons/fa6";
import { BiAtom } from "react-icons/bi";
import { AiTwotoneProfile } from "react-icons/ai";
import { IoIosLink } from "react-icons/io";
import pr from './promo.mp4';



function Teach() {
const navig=useNavigate();
function redirecttl()
{
  navig('/teacherlogin')
}
function redirecttr()
{
  navig('/teacherregister')
}
function redirectnotes()
{
  navig('/addnotes');
}
function redirectviewstudents()
{
  navig('/viewstudents');
}
  return (
    <>
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><GiTeacher />TEACHER DASHBOARD</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='reg'onClick={redirecttr} >REGISTER</Nav.Link>
            <Nav.Link onClick={redirecttl}>LOGIN</Nav.Link>
            <Nav.Link >VIEW PROFILE</Nav.Link>
            <Nav.Link>ADD STUDENTS</Nav.Link>
            <Nav.Link onClick={redirectviewstudents}>VIEW STUDENTS</Nav.Link>
            <Nav.Link onClick={redirectnotes}>ADD NOTES</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className='vid'>
      <Row>
        <Col sm={4}><h3>THIS AUTOMATED SOFTWARE IS ENABLE EASE OF ACCESS TO ALL END USERS</h3></Col>
        <Col sm={8}>
        <video title="embedsPage" className='vv embed-responsive-item '  src={pr}  autoPlay loop/>
        </Col>
      </Row>
      
    </Container>

      <div className="mid">
      <Container>
      <Row>
        <Col sm={4}>
          <h4><IoIosLink className="contro" />COMPLETE CONTROL</h4>
          <p>Starting from headers through the footers, every bit of your website has been engineered for your SCHOOLS complete control.</p>
        </Col>
        <Col sm={4}>
          <h4><BiAtom className='doc' />ONLINE DOCUMENTATION</h4>
       <p> Limitless customization. Visually customize any element of your website with the security of an instant backup.</p>


        </Col>
        <Col sm={4}>
        
        <h4><FaCircleNodes className='social' />MEDIA INTEGRATION</h4>
          <p>Easy social media integrations will allow your website to seamlessly connect with all your various social media accounts.</p></Col>
      </Row>

      <Row>
        <Col sm={4}>
          <h4><IoIosLink className="contro" />COMPLETE CONTROL</h4>
          <p>Starting from headers through the footers, every bit of your website has been engineered for your SCHOOLS complete control.</p>
        </Col>
        <Col sm={4}>
          <h4><BiAtom className='doc' />ONLINE DOCUMENTATION</h4>
       <p> Limitless customization. Visually customize any element of your website with the security of an instant backup.</p>


        </Col>
        <Col sm={4}>
        
        <h4><FaCircleNodes className='social' />MEDIA INTEGRATION</h4>
          <p>Easy social media integrations will allow your website to seamlessly connect with all your various social media accounts.</p></Col>
      </Row>
      
      </Container>
      </div>
    
    
     <Bot />
    </>
  );
}

export default Teach;