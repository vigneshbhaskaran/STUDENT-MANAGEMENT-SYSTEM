import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./adminlogin.css";
import i1 from "./i1.jpg";
function Adminlogin() 
{ return (
      <>
      <div>
        <h1>hello sir</h1>
  
            <div className='holder'>
                
                <input type="email" id="adminemail" placeholder="email" /><br/><br/>
                <input type="password" id="adminpassword" placeholder="password" /><br/><br/>
                <button id="adminsubmit">LOGIN</button>
            </div>

      </div>

      </>
 
    )

}
export default Adminlogin