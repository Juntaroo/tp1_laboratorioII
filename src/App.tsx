import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.tsx'
import Aside from './components/Aside.tsx'
import Footer from './components/Footer.tsx'
import { Banner } from './components/Banner.tsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
    <div className='introduccion'>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Buenas</h1>
      <Banner></Banner>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Tus clicks son {count}
        </button>
      </div>
    </div>
      <Aside></Aside>
      <Footer></Footer>
    </>
  )
}

export default App
