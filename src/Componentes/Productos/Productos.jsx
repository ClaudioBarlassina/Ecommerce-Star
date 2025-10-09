import React from 'react'
import './Productos.css'
import Card from '../moleculas/Card/Card'
// Datos Prueva
import Data from '../../assets/Data.json'

const Productos = () => {
  return (
    <div className="productos-contenedorgeneral">
      <div className="productos-titulo">
        <h3>Relojes</h3>
        <p>Un complemento ideal para destacar tu personalidad</p>
      </div>
      <div className="productos-filtro">
        <button className="productos-filtro-boton">FILTRO</button>
      </div>
      <div className="productos-articulos">
        <div className="productos-articulos-items">
          {console.log(Data)}
          {Data.map((item, index) => (
            <Card
              key={item.id}
              imagenes={item.image}
              nombre={item.nombre}
              precio={item.precio}
            ></Card>
          ))}
        </div>
      </div>
      <div>publicidad</div>
    </div>
  )
}

export default Productos
