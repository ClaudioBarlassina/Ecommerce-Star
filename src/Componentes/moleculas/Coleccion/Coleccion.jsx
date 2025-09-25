import React from 'react'
import "../Coleccion/Coleccion.css"
import imagenColeccion from "../../Atomos/img/rectangle-29.svg"
const Coleccion = () => {
  return (
    <div className='coleccion-contenedor'>
        <img src={imagenColeccion} alt=""  className='coleccion-img'/>
      <div className='coleccion-contenedor-titulo-button'> 
       <h4>Confort</h4>
       <h2>Star Best Collections</h2>
       <p>Diseños unicos y vanguardistas te esperan
        para complementar cada uno de tus looks
       </p>
       <button className='coleccion-button'>Descubre la colección</button>
      </div>
    </div>
  )
}

export default Coleccion
