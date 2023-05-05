import React from 'react';
import { Link } from 'react-router-dom';
import { FooterContainerStyled, 
LinksContainerStyled } from './FooterStyle';
import { IoLogoFacebook,IoLogoWhatsapp,IoLogoInstagram} from "react-icons/io";

const Footer = () => {
  return (
    <FooterContainerStyled>
      <LinksContainerStyled className='links'>
        <Link to='/' style={{ paddingLeft: '2rem' }}>
          <IoLogoFacebook size={"5em"}/>
        </Link>
        <Link to='/' style={{ paddingLeft: '2rem' }}>
          <IoLogoWhatsapp size={"5em"}/>
        </Link>
        <Link to='/' style={{ paddingLeft: '2rem' }}>
            <IoLogoInstagram size={"5em"}/>
        </Link>
      </LinksContainerStyled>
      <p>
       ❤️ YOU <span> EYES.NET</span>
      </p>
    </FooterContainerStyled>
  );
};

export default Footer;