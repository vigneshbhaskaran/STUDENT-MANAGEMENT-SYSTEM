import './bottom.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Bot() {
  return (
    <div className="bbb" >
    <Container>
      <Row>
        <Col sm={6} className="t">
            <h2>ADMIN MANAGEMENT</h2>
            <p>Easily track your progress</p>
        
        </Col>
        <Col sm={2}>
            <p>INFO</p>
            <p>GUIDE</p>
            <p>CAREERS</p>
        </Col>
        <Col sm={2}>
            <p>ACADEMICS</p>
            <p>RESEARCH</p>
            <p>ALUMNI</p>
        </Col>
        <Col sm={2}>
            <p>PORTFOLIO</p>
            <p>GALLERY</p>
            <p>ACHIEVEMENTS</p>
        </Col>
      </Row>
      <hr/>

      <Row>
        <Col className="ad">
            
        <h4>&copy; ADMIN MANANGEMENT &#64;2024</h4>
        
        </Col>
        </Row>
      
    </Container>
    </div>
  );
}

export default Bot;