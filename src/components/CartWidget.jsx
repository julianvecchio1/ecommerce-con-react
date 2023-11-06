import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const CartWidget = () => {
  
  const {cantidadEnCarrito} = useContext(CartContext);
  
    return (
    <div>
        <Link to="/carrito"><ShoppingCartIcon />
        <span className="numerito">{cantidadEnCarrito()}</span>
        
        </Link>
    </div>
  )
}

export default CartWidget