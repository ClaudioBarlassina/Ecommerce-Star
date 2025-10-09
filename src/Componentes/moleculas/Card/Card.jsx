import React from 'react'
import "./Card.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'



const Card = ({ imagenes = [], nombre, precio }) => {
  return (
    <div className='card-contenedorgeneral'>
      <Carousel controls={true} indicators={false} interval={null}>
        {imagenes.map((img, index) => (
          <Carousel.Item key={index}>
            <img src={img} alt={nombre} className='card-img' />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className='card-conjunto-texto'>
        <small className='card-nombre'>{nombre}</small>
        <small className='card-precio'>${precio}</small>
      </div>
    </div>
  )
}


export default Card
