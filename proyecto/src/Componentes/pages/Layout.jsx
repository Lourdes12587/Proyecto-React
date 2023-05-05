import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <main>
        <section>
            <Outlet/>
        </section>
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/Secciones">Secciones</Link>
            <Link to="/Contacto">Contacto</Link>
        </nav> 
    </main>
  )
}

export default Layout
