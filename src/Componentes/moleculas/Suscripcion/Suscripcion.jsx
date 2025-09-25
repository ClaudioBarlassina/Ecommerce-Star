import React from 'react'
import './Suscripcion.css'

const Suscripcion = () => {
  return (
    <div className="suscripcion-contenedor">
      <div className="suscripcion-texto">
        <h2>Recibi lo ultimo de STAR</h2>
        <p>
          {' '}
          Sé la primera en enterarte de nuestras nuevas colecciones, promociones
          exclusivas e inspiración para tu estilo.
        </p>
      </div>
      <div className="suscripcion-envio">
        <input
          type="text"
          className="suscripcion-envio-input"
          placeholder="Enter email address"
        />
        <button className="suscripcion-envio-button">SUSCRIBIRME</button>
      </div>
    </div>
  )
}

export default Suscripcion
