import {React} from 'react'
import { Navbar } from './Components/Navbar/Navbar';
import { Logo } from './Components/Navbar/Logo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";

import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import women_banner from "./Components/Assets/banner_women.png";
import men_banner from "./Components/Assets/banner_mens.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import LoginSignup from "./Pages/LoginSignup";
import { Link } from 'react-router-dom'
import Footer from './Components/Footer/Footer';
import { Main } from './MainScreen';
import { CheckOut } from './Components/Checkout/CheckOut';
import { useState } from 'react';
import { About } from './Pages/About';
function App() {
  const [backGround, setBackGround] = useState('')


  return (
    <div style={{backgroundColor: `${backGround}`}}>
      
      <Router>
        <Link to='/'>
          <div className='flex items-center justify-center h-[7%]' onClick={()=> {setBackGround('')}}>
            <Logo/>
          </div>
        </Link>
      
        <Navbar onTap={setBackGround} />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/shop" element={<ShopCategory category="" />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="/login" element={<LoginSignup/>} />
          <Route path="/about" element={<About/>} />

        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App;
