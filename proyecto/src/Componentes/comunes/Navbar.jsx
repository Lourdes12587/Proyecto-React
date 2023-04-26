import React, {useState} from "react";
import styled from 'styled-components'
import BurguerButton from "./BurguerButton"

function Navbar (){

    const [clicked, setClicked] = useState(false)
    console.log(clicked)

    const handleClick = () =>{
        //cuando esta true lo pasa a false y vice versa
        setClicked(!clicked)
    }

    return (
        <>
            <NavContainer>
                <h2>BERLIN<span>.NET</span></h2>
                <div className= {`links ${clicked ? 'active' : ''}`}>
                    <a href="/">Home</a>
                    <a href="/">Nuevas Noticias</a>
                    <a href="/">Registrate</a>
                    <a href="/">Iniciar Sesion</a>
                </div>
                <div className='burguer'>
                    <BurguerButton clicked ={clicked} handleClick={handleClick}/>
                </div>     
            </NavContainer>
        </>
    )
}

export default Navbar

//Agrego Estilos
const NavContainer = styled.nav`
    h2{
        color: white;
        font-weight: 400;
        span{
            font-weight: bold;
        }

    }
    padding: .4rem;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        color: white;
        text-decoration: none;
        margin-right: 1rem;
    }
     
    .links{
        position: absolute;
        top:-700px;
        left:-2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .6s ease;
        a{
            color: white;
            font-size: 2rem;
            display: block;
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: white;
                display: inline;
            }
            
            
        }
    }
    // para traer los links al centro cuando los activemos
    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a{
            color: white; 
        }
    }

    //boton desaparezca
    .burguer{
        @media(min-width:768px){
            display:none;
        }
    }
`


