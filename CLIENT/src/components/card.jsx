import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from './i1.jpg'
import img2 from './i2.png'
import img3 from './i3.png'
import './card.css';
import { useNavigate } from 'react-router-dom';
function Car() {
  const navi=useNavigate();
  function redirectbsc()
  {
    navi('/bsc');
  }
  return (
    <div className="ca">
    <Card style={{ width: '18rem' }} className="c1">
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>ONLINE BSC PROGRAMS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="b1" onClick={redirectbsc} >know more</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className="c1">
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>UNDERGRADUATE PROGRAMS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" >know more</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className="c1">
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>POST GRADUATE PROGRAMS</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">know more</Button>
      </Card.Body>
    </Card>
    </div>


  );
}

export default Car;