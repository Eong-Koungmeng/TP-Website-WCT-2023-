import { useState } from 'react';
import {Carousel, Image} from 'react-bootstrap';
import "./Carousels.css"

function ControlledCarousel({slides}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} >
      {slides.map((slide, slideIndex)=>(
        <Carousel.Item key={slideIndex} interval={slide.interval}>
          <Image
              className="d-block w-100"
              src={slide.image} // Replace this with your actual image path
              alt={slide.title}
              width="1920"
              height="540"
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.subTitle}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )) }
    </Carousel>
  );
}

export default ControlledCarousel;