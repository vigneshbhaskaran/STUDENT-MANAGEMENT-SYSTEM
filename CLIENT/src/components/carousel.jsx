import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css";
import i1 from "./img1.jpg";
import i2 from "./img2.jpg";
import i3 from "./img3.jpg";


function Caro() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={i1} text="First slide" className='im' />
        <Carousel.Caption>
          
          <p className='carp'>THE INSTITUTION OFFERS BEST INFRASTRUCTURE</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={i2} text="Second slide" className='im' />
        <Carousel.Caption>
          
          <p className='carp'>OUR STUDENTS HAVE HIGH SUCCESS RATE</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={i3} text="Third slide" className='im' />
        <Carousel.Caption>
          
          <p className='carp'>
            WE PROMOTE SPORTS AND CULTURAL EVENTS
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caro;