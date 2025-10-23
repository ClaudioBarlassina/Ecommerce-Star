import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import useStore from '../../../Zustand/useStore'
import './Filtros.css'

const Filtro = () => {
  // Estado Categorias

  const Categ = useStore((state) => state.ContenidoCategoria)
  const SubCateg = useStore((state) => state.ContenidoSubcategoria)
  
  //Apertura y cierre 
const cerrar = useStore((state) => state.closeFiltro);

const handlerbutton = () => {
cerrar();
};

// Uso:
 
  return (
    <div className="filtros-contenedorGeneral">
      <div className="filtros-tituloprinc">
        <h3>FILTROS</h3>
      </div>
      <Accordion defaultActiveKey="">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Categorias</Accordion.Header>
          <Accordion.Body>
            <ul>
              {Categ.map((it, index) => (
                <li key={index}>
                  <label>
                    <input type="checkbox" checked={it.checked} /> {it.nombre}
                  </label>
                </li>
              ))}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>SubCategorias</Accordion.Header>
          <Accordion.Body>
            <ul>
              {Array.isArray(Categ) && Categ.length > 0 ? (
                SubCateg.map((it, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="checkbox"
                        checked={false}
                        onChange={() => toggleCategoria(it.checked)}
                      />{' '}
                      {it.nombre}
                    </label>
                  </li>
                ))
              ) : (
                <li>No hay categorías disponibles</li>
              )}
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Precio</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <label htmlFor="">
                  <input type="checkbox" name="" id="" /> Menos de $5000
                </label>
              </li>
              <li>
                <label htmlFor="">
                  <input type="checkbox" name="" id="" /> $5000 - $10000
                </label>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Stock</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>
                <label htmlFor="">
                  <input type="checkbox" name="" id="" /> En Stock
                </label>
              </li>
              <li>
                <label htmlFor="">
                  <input type="checkbox" name="" id="" /> Sin Stock
                </label>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className='filtro-piePagina'>

      <label htmlFor=""></label>
       <button onClick={()=>handlerbutton()}>Filtrar</button>
      </div>
    </div>
  )
}

export default Filtro
