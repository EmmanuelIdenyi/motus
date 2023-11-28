import React from 'react'
import './Footer.css'

import { Logo } from '../Navbar/Logo'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="flex items-center justify-center">
        <Logo/>
      </div>
      <ul className="footer-links">
        <li><Link to='/about'>About</Link></li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <Link to="https://instagram.com/_motusapparel?igshid=NzZlODBkYWE4Ng=="><img src={instagram_icon} alt="" /></Link>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
