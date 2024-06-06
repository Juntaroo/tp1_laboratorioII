import './Aside.css'
import '../../public/imagendeflexbox.jpg'

function Aside() {
  
    return (
      <>
      <div className='row'>
        <aside>
          <div className='cajita'>
            <p>Aside</p>
          </div>
          <div className='cajita'>
            <p>Aside 2</p>
          </div>
          <div className='cajita'>
            <p>Aside 3</p>
          </div>
          <div className='cajita'>
            <p>Aside 4</p>
          </div>
          <div className='cajita'>
            <p>Aside 5</p>
          </div>
        </aside>
        <section className='main-body'>
          <p>
          El Módulo de Caja Flexible, comúnmente llamado flexbox, fue diseñado como un modelo unidimensional de layout, y como un método que pueda ayudar a distribuir el espacio entre los ítems de una interfaz y mejorar las capacidades de alineación
          </p>
          <img className='imgflex' src="imagendeflexbox.jpg" alt="imagenflexbox" />
        </section>
      </div>
      </>
    )
  }
  
  export default Aside


