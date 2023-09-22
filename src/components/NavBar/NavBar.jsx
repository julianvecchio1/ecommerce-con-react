import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Contacto</li>
        <li><CartWidget /></li>
      </ul>
    </nav>
  )
}

export default NavBar