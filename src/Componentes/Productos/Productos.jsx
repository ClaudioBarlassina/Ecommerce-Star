import React, { useEffect } from 'react'
import './Productos.css'
import Card from '../moleculas/Card/Card'
// Datos Prueva
// import Data from '../../assets/Data.json'
import useStore from '../../Zustand/useStore'
import Filtro from '../moleculas/Filtro/Filtro'

const Productos = () => {

// Estados Zustand
const Data = useStore((state) => state.Productos)
const ProductosBD = useStore((state) => state.fetchProductos)
const Categoria = useStore(state => state.Categoria)
const Subcategorias = useStore(state => state.SubCategoria)
const ContenidoCategoria = useStore(state => state.fetchCategoria)
const ContenidoSubcategoria = useStore(state => state.fetchSubCategoria)
const Open = useStore(state => state.openFiltro)
const Estado = useStore(state => state.EstadoFiltro)


useEffect(()=>{
  ProductosBD(),
  ContenidoCategoria();
  ContenidoSubcategoria()
},[ProductosBD], [ContenidoCategoria], [ContenidoSubcategoria])

const toggleFiltro = () => {
   Open()
  };

  return (
    <div className="productos-contenedorgeneral">
      <div className={`filtro-contenedorEnProd ${Estado ? "openfiltro" : ""}`}>

      <Filtro ></Filtro>
      </div>
      <div className="productos-titulo">
        <h3>{Categoria}</h3>
        <h5>{Subcategorias}</h5>
        <p>Un complemento ideal para destacar tu personalidad</p>
      </div>
      <div className="productos-filtro">
        <button className="productos-filtro-boton" onClick={toggleFiltro}>FILTRO</button>
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
