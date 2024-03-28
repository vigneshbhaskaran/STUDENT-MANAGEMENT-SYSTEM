import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./studenthome.css";
import Bot from "./bottom.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Login from "./login.jsx";
import Register from "./register.jsx";
import { useNavigate } from 'react-router-dom';
import { FaRegRegistered } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";

function StudentHome() {
  const navigate=useNavigate();
  function redirectstudlog()
  {
    navigate('/login')
  }
  function redirectstudreg()
  {
    navigate('/register')
  }
  function redirectnotes()
  {
    navigate('/viewnotes');
  }
  return (
    <>
      <div className="sttop">
        <h2 className="head">STUDENT MANAGEMENT</h2>
      </div>
      <Container className="mode">
        <Row className="moder">
          <Col sm={3} className="sthome">
            
              <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link className="stl" onClick={redirectstudreg}><FaRegRegistered />REGISTER</Nav.Link>
                <hr />
                <Nav.Link className="stl" onClick={redirectstudlog}><AiOutlineLogin />LOGIN</Nav.Link>
                <hr />
                <Nav.Link className="stl">PROFILE</Nav.Link>
                <hr />
                <Nav.Link className="stl">MARKS</Nav.Link>
                <hr />
                <Nav.Link className="stl">TIMETABLE</Nav.Link>
                <hr />
                <Nav.Link className="stl" onClick={redirectnotes}>VIEW NOTES</Nav.Link>
              </Nav>
            
          </Col>

          <Col sm={3}>
                 <div className="not">
                  <h2 className="noth">NOTIFICATIONS</h2>
          
                 <h6 className="notp">EXAMS FOR BSC STUDENTS COMMENCE ON 17-FEB-23</h6>
                  <hr/>
                
                 <h6 className="notp"> CANDIDATES ARE REQUESTED TO ENTER THE EXAM HALL WITH HALL
                  TICKET AND ID CARDS</h6><hr/>
                
                
                 <h6 className="notp"> THE AWARD CEREMONY IS HAPPENING ON 12TH OF THIS MONTH</h6>
                  </div>
                
          </Col>

          <Col sm={3}>
                 <div className="app">
                  <h2 className="apph">APPLICATION & FEES</h2>
          
                 <h6 className="appp">EXAMS FOR BSC STUDENTS COMMENCE ON 17-FEB-23</h6>
                  <hr/>
                
                 <h6 className="appp"> CANDIDATES ARE REQUESTED TO ENTER THE EXAM HALL WITH HALL
                  TICKET AND ID CARDS</h6><hr/>
                
                
                 <h6 className="apppp"> THE AWARD CEREMONY IS HAPPENING ON 12TH OF THIS MONTH</h6>
                  </div>
                
          </Col>

          <Col sm={3}>
                 <div className="extra">
                  <h2 className="extrah">CULTURAL</h2>
          
                 <h6 className="extrap">EXAMS FOR BSC STUDENTS COMMENCE ON 17-FEB-23</h6>
                  <hr/>
                
                 <h6 className="extrap"> CANDIDATES ARE REQUESTED TO ENTER THE EXAM HALL WITH HALL
                  TICKET AND ID CARDS</h6><hr/>
                
                
                 <h6 className="extrap"> THE AWARD CEREMONY IS HAPPENING ON 12TH OF THIS MONTH</h6>
                  </div>
                
          </Col>

        

         


        </Row>
       </Container>

      <Bot />
    </>
  );
}

export default StudentHome;
