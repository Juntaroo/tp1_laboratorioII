import './Navbar.css'

function Navbar() {
    return(
        <>
        <body>
            <header className="header">
                <nav>
                    <ul className="nav-links">
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Proyectos</a></li>
                        <li><a href="#">Informacion</a></li>
                    </ul>            
                </nav>
                <a className="btn" href="#"><button>Contacto</button></a>
            </header>
        </body>
            
        </>
    )
  }
  export default Navbar