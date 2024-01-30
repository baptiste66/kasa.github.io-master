import React from 'react'; 
import logo from "../../assets/LOGO.png";
import { NavLink } from "react-router-dom";
import '../../style/header/header.css'


export default function Header(){
  return(// if is active underlines the title
<header>
    <nav>
        <a href='/home'><img className="header__logo" src={logo} alt="logo kasa"></img></a>
        
        <div className='header__menu'>
              
             <span><NavLink  to="/home"className={({ isActive }) => (isActive ? "activated" : "notActivated")} >
              Accueil
            </NavLink></span>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "activated" : "notActivated")}>
              A Propos
            </NavLink>
        </div>
    </nav>
</header>
  )
}

