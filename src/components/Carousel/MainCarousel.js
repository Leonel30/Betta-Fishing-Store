import React from "react";
import { Carousel } from "react-bootstrap";

export const MainCarousel = () => {

    return (
        
<Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 "
      src="http://res.cloudinary.com/ddi161cze/image/upload/c_scale,h_256,w_1024/v1646270672/Betta%20Fish%20Store/nmc_tp_lynxlake_178_a7wi1h.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Todo lo mejor para tu viaje de pesca</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="http://res.cloudinary.com/ddi161cze/image/upload/c_scale,h_256,w_1024/v1646270714/Betta%20Fish%20Store/slide-1-3-xl_pfersh.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Las mejores marcas en un solo lugar</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/ddi161cze/image/upload/c_scale,h_256,w_1024/v1646270751/Betta%20Fish%20Store/fishing-lure-set-bfb541-79ab97_mma7ot.webp"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Contamos con mas de 10 años de experiencia</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>    
    )
}