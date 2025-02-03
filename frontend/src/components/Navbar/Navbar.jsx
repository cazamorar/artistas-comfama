import { MagnifyingGlass} from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import style from './Navbar.module.css';
import logo from '/src/assets/logo.png';

import React, { useContext } from "react";

export const Navbar = () => {

    return (
        <div>   
        <div className={style.navbar}>
        <div>
            <Link to="/">
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div></div>
            </Link>
        </div>
        
        <div>
            
            <div className={style.navbar__content}>
                <div className={style.navbar__content__list}>
                    <Link to="/"></Link>  
                        
                    <Link to="/home" className={style.navbar__content__item}>Inicio</Link>
                    <Link to="/calendario-eventos" className={style.navbar__content__item}>Eventos</Link>
                    <Link to="/musicos" className={style.navbar__content__item}>Músicos</Link>
                    <Link to="/bailarines" className={style.navbar__content__item}>Bailarines</Link>
                    <Link to="/fotografia-pintura" className={style.navbar__content__item}>Fotografía y Pintura</Link>
                </div>
                
                <div className={style.search__icon}>
                    <Link to="/usuario" className={style.search__icon__Anchor}>
                        <MagnifyingGlass size={28} />
                    </Link>
                </div>            
            </div>
        </div>
        </div>
        </div>
    )
}