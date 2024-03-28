import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './content.css';
import img4 from './uni.jpg'

function Con() {
  return (
    <>
    <div className="caa">
    <Container>
      <Row>
        <Col sm={6} className="aaa">
            <h3>ADMIN MANAGEMENT</h3>
            <p>ONE STOP SOLUTION TO TRACK YOUR PROGRESS</p>
            <button className="get">GET STARTED</button>
            <button className="get">GO HOME</button>
        </Col>
        <Col sm={6}>
            <img className="ii" src={img4}/>
        </Col>
      </Row>
    
    </Container>
    </div>
    </>
  );
}

export default Con;