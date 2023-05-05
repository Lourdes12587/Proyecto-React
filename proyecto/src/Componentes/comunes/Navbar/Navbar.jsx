import React from 'react'
import { IconLogo, NavbarContainer, NavbarWrapper} from './NavbarStyle'
import { GiBoltEye } from "react-icons/gi";
import { Link, Outlet } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <NavbarContainer>
            <NavbarWrapper>
                <IconLogo style={{ marginLeft: '10rem'}}>
                    <GiBoltEye size={"5em"}/>
                        YOU EYES.(NET)
                </IconLogo>
                <section>
                    <Outlet/>
                </section>
                <div>
                    <Link to="/Home">HOME</Link>
                    <Link to="/Secciones">ULTIMAS NOTICIAS</Link>
                    <Link to="/Secciones">SECCIONES</Link>
                    <Link to="/Contacto">CONTACTO</Link>
                </div>
            </NavbarWrapper>
        </NavbarContainer>

    </div>
  )
}

export default Navbar
