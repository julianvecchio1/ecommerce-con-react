import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  )
}

export default NavBar