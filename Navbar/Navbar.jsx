import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Logo } from './Logo';
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { Button } from './Button'

export const Navbar = ({onTap}) => {

  let [menu,setMenu] = useState("");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className={`bg-white  py-3 shadow-xl items-center box-shadow`}>
      <header>
        <nav className = "navigation">
            <Button onClick={()=>{setMenu("shop");  onTap('grey')}}><Link to='/shop' style={{ textDecoration: 'none' }}>Shop</Link>{menu==="shop"?<hr/>:<></>}</Button>
            <Button onClick={()=>{setMenu("mens");  onTap('grey')}}><Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>{menu==="mens"?<hr/>:<></>}</Button>
            <Button onClick={()=>{setMenu("womens");  onTap('grey')}}><Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>{menu==="womens"?<hr/>:<></>}</Button>
            <Button onClick={()=>{setMenu("kids");  onTap('grey')}}><Link to='/kids' style={{ textDecoration: 'none' }}>Kids</Link>{menu==="kids"?<hr/>:<></>}</Button>
        </nav>
        <div className="nav-login-cart navigation">
          {localStorage.getItem('auth-token')
          ?<button className="btnLogin-popup" onClick={()=>{localStorage.removeItem('auth-token');window.location.replace("/");  onTap('grey')}}>Logout</button>
          :<Link to='/login' style={{ textDecoration: 'none' }}><button className="btnLogin-popup">Login</button></Link>}
          <Link to="/cart"><button><i className="fa-solid fa-cart-shopping"></i></button></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </header>
      

      
    </div>
  )
}

