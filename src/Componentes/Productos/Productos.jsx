import React, { useEffect } from 'react'
import './Productos.css'
import Card from '../moleculas/Card/Card'
// Datos Prueva
// import Data from '../../assets/Data.json'
import useStore from '../../Zustand/useStore'

const Productos = () => {


const Data = useStore((state) => state.Productos)
const ProductosBD = useStore((state) => state.fetchProductos)
const Categoria = useStore(state => state.Categoria)
const Subcategorias = useStore(state => state.SubCategoria)

useEffect(()=>{
  ProductosBD()
},[ProductosBD])




  return (
    <div className="productos-contenedorgeneral">
      <div className="productos-titulo">
        <h3>{Categoria}</h3>
        <h5>{Subcategorias}</h5>
        <p>Un complemento ideal para destacar tu personalidad</p>
      </div>
      <div className="productos-filtro">
        <button className="productos-filtro-boton">FILTRO</button>
      </div>
      <div className="productos-articulos">
        <div className="productos-articulos-items">
          
          {Data.map((item, index) => (
          
            <Card
              key={index}
              imagenes={item.imagenes_productos}
              nombre={item.nombre}
              precio={item.precio}
            ></Card>
          ))}
        </div>
      </div>
      {/* <div>publicidad</div> */}
    </div>
  )
}

export default Productos
