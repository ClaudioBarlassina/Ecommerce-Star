import React, { useState } from 'react'
import imagenejemplo from '../../Atomos/img/imagen-ejemplo.jpg'
import Accordion from 'react-bootstrap/Accordion'
import { ListGroup, Button, Table } from 'react-bootstrap'
import './navbar.css'
// Grafica

import barra from '../../Atomos/Botones/barra.svg'
import search from '../../Atomos/Botones/search-normal.svg'
import user from '../../Atomos/Botones/user.svg'
import cart from '../../Atomos/img/cart.png'

//Grafica Categorias
import icono from '../../Atomos/img/Group 386.svg'
import icono2 from '../../Atomos/img/plus.svg'
// Grafica Carrito
import icono3 from '../../Atomos/img/icono-basura.png'
// Estado Zustand
import useStore from '../../../Zustand/useStore.js'

// Datos Categorias
import Datos from '../../../assets/DataCateg.json'

const Navbar = () => {
  // Estados Menu
  const OpenMenu = useStore((state) => state.botonMenu)
  const CloseMenu = useStore((state) => state.closeMenu)
  const Estado = useStore((state) => state.Menu)
//  Estados Carrito
  const EstadoOpenCarrito = useStore((state)=> state.menuCarrito)
  const OpenMenuCarrito = useStore((state)=> state.OpenMenuCart)
  const CloseMenuCarrito = useStore((state)=> state.ClosemenuCarrito)



  // lista productos

  const [carrito, setCarrito] = useState([
    {
      id: 1,
      nombre: 'Reloj Pulsera',
      precio: 1200,
      cantidad: 1,
      imagen: imagenejemplo,
    },
    {
      id: 2,
      nombre: 'Pulsera Cuero',
      precio: 850,
      cantidad: 1,
      imagen: imagenejemplo,
    },
  ])


  const aumentar = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    )
  }

  const disminuir = (id) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    )
  }

  const eliminar = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id))
  }

  //  Estados SubMenu

  return (
    <div className="contenedor">
      {/* contenedor Categorias  */}
      <div className={`categorias-contenedor ${Estado ? 'open' : ''}`}>
        {/* 'categorias-contenedor' */}

        <div className="categoria-Exit">
          <p>
            EXIT <img src={icono} alt="" onClick={CloseMenu} />
          </p>
        </div>
        <div className="categoria-contenido-categorias">
          <Accordion alwaysOpen>
            {Datos.map((cat, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header className="acordeon-titulo">
                  {cat.title}
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="lista-acordeon-ul">
                    {cat.items.map((sub, i) => (
                      <li key={i} className="lista-acordeon-li">
                        <button>{sub}</button>
                      </li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>

      {/* ------------------------------ */}

      <div className="iconos-princ">
        <img src={barra} alt="" onClick={OpenMenu} />
        <img src={search} alt="" />
      </div>

      <h1 className="marca-titulo">Star</h1>
      <div className="iconos-sec">
        <img className="icono-cart"src={cart} alt="" onClick={OpenMenuCarrito} />  
        
        <img className="icono-usuario" src={user} alt="" />
      </div>
      {/* Carrito */}
      <div className={`carrito-contenedorGeneral ${EstadoOpenCarrito ? "open": ""}`}>
        {/* "carrito-contenedorGeneral" */}
        <div className="carrito-encabezado">
          <h3>Carrito</h3>
          <img src={icono} alt="" onClick={CloseMenuCarrito} />
        </div>
        <div>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
               
              
              </tr>
            </thead>

            <tbody className="carrito-table-body">
              {carrito.map((p) => (
                <tr key={p.id}>
                  <td className='conteiner-imagen'>
                    <img src={p.imagen} alt={p.nombre} width={100} className='carrito-table-body-img' />
                  </td>

                  <td>
                    <p className="producto-nombre">{p.nombre}</p>
                    <span className="producto-precio">${p.precio}</span>
                    <div className="carrito-table-body-bottons">
                      <button
                        className="carrito-table-body-button"
                        onClick={() => disminuir(p.id)}
                      >
                        -
                      </button>
                      <p>{p.cantidad}</p>
                      <button
                        className="carrito-table-body-button"
                        onClick={() => aumentar(p.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td className="boton-eliminar">
                    <button
                      className="carrito-table-body-button-eliminar"
                      onClick={() => eliminar(p.id)}
                    >
                      <img src={icono3} alt="Eliminar" />
                    </button>
                  </td>
                </tr>
              ))}
              
              {carrito.length === 0 && (
                <tr>
                  <td colSpan={3} style={{ textAlign: 'center', fontFamily:"sans-serif" }}>
                    El carrito está vacío 
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div><div className="carrito-total-subtotal-finalizar">
               <div className='carrito-subtotal'>
                <p>Subtotal</p>
                <p>$$12345</p>
               </div>
               <div className='carrito-total'>
                <p>Total</p>
                <p>$$123456</p>
               </div>
               <div className='carrito-buttons'>
                <button className='finalizar'>FINALIZAR COMPRA</button>
                <button className='seguirCom'>SEGUIR COMPRANDO</button>
               </div>
              </div>

      </div>
    </div>
  )
}

export default Navbar
