import './App.css'
import Navbar from "../src/Componentes/moleculas/navbar/navbar"
import Hero from "../src/Componentes/moleculas/Hero/Hero"
import Coleccion from './Componentes/moleculas/Coleccion/Coleccion'
import Publicidad from './Componentes/moleculas/Publicidad/publicidad'
import GuiaRegalos from "./Componentes/moleculas/GuiaRegalos/Guiaregalos"
import Suscripcion from './Componentes/moleculas/Suscripcion/Suscripcion'
import Footer from './Componentes/moleculas/Footer/footer'

function App() {


  return (
    <>
    <div className='contenedor-general'>
     <Navbar></Navbar>
     <Hero></Hero>
     <Coleccion></Coleccion>
     <Publicidad></Publicidad>
     <GuiaRegalos></GuiaRegalos>
     <Suscripcion></Suscripcion>
     <Footer></Footer>
    </div>
    <div className="aviso-desktop">
        Por el momento esta aplicación es solo para móviles 📱
      </div>
    </>
  )
}

export default App
