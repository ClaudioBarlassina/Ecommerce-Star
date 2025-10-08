import React from 'react'
import "./Card.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'

import img1 from "../../Atomos/img/relojEje1.jpg"
import img2 from "../../Atomos/img/relojEje2.jpg"
import img3 from "../../Atomos/img/relojEje3.jpg"

const Card = ( ) => {
  return (
    <div className='card-contenedorgeneral'>
       <Carousel controls={true} indicators={false} interval={null}>
      <Carousel.Item>
        <img src={img1} alt="" className='card-img'/>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="" className='card-img' />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="" className='card-img' />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <div className='card-conjunto-texto'>

      <small className='card-nombre'>Reloj pulsera con maya de cuero</small>
      <small className='card-precio'>$1500</small>
      </div>
   
    </div>
  )
}

export default Card
