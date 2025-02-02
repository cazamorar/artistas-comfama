import { MagnifyingGlass} from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import logo from '/src/assets/logo.png';

import React, { useContext } from "react";

export const Navbar = () => {

    return (
        <div>   
        <div className="navbar">
        <div className="left">
            <Link to="/">
            <div>
                <img className="navbar-logo" src={logo} alt="Logo" />
            </div>
            <div></div>
            </Link>
        </div>
        
        <div className="right">
            
            <div className="right-buttons">
            <Link to="/"></Link>  
                      
            <Link to="/home">Inicio</Link>
            <Link to="/calendario-eventos">Eventos</Link>
            <Link to="/musicos">Músicos</Link>
            <Link to="/bailarines">Bailarines</Link>
            <Link to="/fotografia-pintura">Fotografía y Pintura</Link>
              
            <>
            <Link to="/usuario">
                <MagnifyingGlass size={32} />
            </Link>
            </>            
            </div>
        </div>
        </div>
        </div>
    )
}