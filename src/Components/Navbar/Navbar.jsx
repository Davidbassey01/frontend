import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

import { Link } from 'react-router-dom'
const Navbar = () => {

    const[menu,setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Sole Elegance</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("shoes")}}><Link style={{textDecoration: 'none'}} to='/shoes'>Shoes</Link>{menu==="shoes"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("sneakers")}}><Link style={{textDecoration: 'none'}} to='/sneakers'>Sneakers</Link>{menu==="sneakers"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("sandals")}}><Link style={{textDecoration: 'none'}} to='/sandals'>Sandals/Slides</Link>{menu==="sandals"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="cart" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
export default Navbar