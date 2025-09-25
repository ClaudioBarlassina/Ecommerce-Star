import React from 'react'
import "../Publicidad/publicidad.css"
import imagenAceros from "../../Atomos/img/image 4.png"

const publicidad = () => {
  return (
    <div className="publicidad-contenedor">
      <div className="publicidad-texto">
        <h2>100% Acero Quirúrgico</h2>
        <p>
          Diseñadas para durar y para destacar, nuestras joyas de 100% acero
          quirúrgico te dan la libertad de expresarte. Sumérgete en un mundo de
          color y elige tu joya ideal: el lujo del dorado, la elegancia del
          plateado, la rebeldía del negro o la dulzura del nuevo acero rosado.
          ¿Cuál de estos tonos contará tu historia hoy
        </p>
      </div>
      <img src={imagenAceros} alt="" className='publicidad-img' />
    </div>
  )
}

export default publicidad
