import React, {useState} from 'react'
import { IconLogo, NavbarContainer, NavbarWrapper, Menu, MenuItem, IconLogoMobile} from './NavNuevoStyled'
import { GiBoltEye } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { FaBars,  FaTimes } from "react-icons/fa";

const NavNuevo = () => {

    const [click, setClick] = useState(false);

    const ChangeClick = () => {
        setClick(!click);

    };

    return (
    <div>
        <NavbarContainer>
            <NavbarWrapper>
                <IconLogo>
                    <GiBoltEye size={"4em"}/>
                    YOU EYES.(NET)
                </IconLogo>

                <IconLogoMobile onClick={() => ChangeClick()}>
                    {click ? <FaTimes /> : <FaBars />}
                </IconLogoMobile>

                <Menu click={click}>
                    <MenuItem onClick={() => ChangeClick()}>
                        <Link to="/Home">HOME</Link>
                    </MenuItem>
                    <MenuItem onClick={() => ChangeClick()}>
                        <Link to="/Secciones">SECCIONES</Link>
                    </MenuItem>
                    <MenuItem onClick={() => ChangeClick()}>    
                        <Link to="/Contacto">CONTACTO</Link>
                    </MenuItem>
                </Menu>
            </NavbarWrapper>
        </NavbarContainer>
    </div>
  )
}

export default NavNuevo