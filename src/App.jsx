import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from '../src/Componentes/moleculas/navbar/navbar'
import Hero from '../src/Componentes/moleculas/Hero/Hero'
import Coleccion from './Componentes/moleculas/Coleccion/Coleccion'
import Publicidad from './Componentes/moleculas/Publicidad/publicidad'
import GuiaRegalos from './Componentes/moleculas/GuiaRegalos/Guiaregalos'
import Suscripcion from './Componentes/moleculas/Suscripcion/Suscripcion'
import Footer from './Componentes/moleculas/Footer/footer'
import Productos from './Componentes/Productos/Productos'

function App() {
  return (
    <>
      <Router>
        <div className="contenedor-general">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Coleccion />
                  <Publicidad />
                  <GuiaRegalos />
                </>
              }
            />
            <Route path="/Productos" element={<Productos></Productos>} />
            <Route path="/contacto" element={''} />
          </Routes>
          <Suscripcion />
          <Footer />
        </div>

        <div className="aviso-desktop">
          Por el momento esta aplicación es solo para móviles 📱
        </div>
      </Router>
    </>
  )
}

export default App
