import React from 'react'

import Accordion from 'react-bootstrap/Accordion';
import './navbar.css'
// Grafica
import Categorias from '../modulos/Categorias/Categorias.jsx'
import barra from '../../Atomos/Botones/barra.svg'
import search from '../../Atomos/Botones/search-normal.svg'
import user from '../../Atomos/Botones/user.svg'
import cart from "../../Atomos/img/cart.png"
//Grafica Categorias
import icono from '../../Atomos/img/Group 386.svg'
import icono2 from '../../Atomos/img/plus.svg'

// Estado Zustand
import useStore from '../../../Zustand/useStore.js'

// Datos Categorias
import Datos from '../../../assets/DataCateg.json'

const Navbar = () => {
  // Estados Menu
  const OpenMenu = useStore((state) => state.botonMenu)
  const CloseMenu = useStore((state) => state.closeMenu)
  const Estado = useStore((state) => state.Menu)

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
        

 <Accordion alwaysOpen >
      {Datos.map((cat, index) => (
        <Accordion.Item eventKey={index.toString()} key={index}>
          <Accordion.Header className='acordeon-titulo'>{cat.title}</Accordion.Header>
          <Accordion.Body>
            <ul className='lista-acordeon-ul'>
              {cat.items.map((sub, i) => (
                <li key={i} className='lista-acordeon-li'>
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
<div className='iconos-sec'>
       <img className="icono-cart "src={cart} alt="" />
      <img className="icono-usuario" src={user} alt="" />
</div>
    </div>
  )
}

export default Navbar
