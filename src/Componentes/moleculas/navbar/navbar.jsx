import React from 'react'
import "./navbar.css"
import barra from "../../Atomos/Botones/barra.svg"
import search from "../../Atomos/Botones/search-normal.svg"
import user from "../../Atomos/Botones/user.svg"


const navbar = () => {
  return (
    <div className='contenedor'>
        <div className='iconos-princ'>

      <img src={barra} alt="" />
      <img src={search} alt="" />
        </div>

        <h1 className='marca-titulo'>Star</h1>
       
        <img className='icono-usuario' src={user} alt="" />
     

    </div>
  )
}

export default navbar
