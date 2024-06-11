import './App.css'
import Navbar from './components/Navbar.tsx'
import Body from './components/Body.tsx'
import Footer from './components/Footer.tsx'


function App() {

  return (
    <>
     <div className='pantalla'>
       <Navbar></Navbar>
        <div className='introduccion'>
          <h1 className='titulo'>Product Designer</h1>
          <section className='myself'>Hello, my name is Julian Godoy and I'm here to talk about myself and my skills about the tasks of a programmer</section>
        </div>
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
