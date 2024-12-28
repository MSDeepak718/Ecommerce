import React from 'react'
import './Footer.css';
import logo from '../assets/logo.png';
import instagram_icon from '../assets/instagram_icon.png';
import pintester_icon from '../assets/pintester_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="footer">
        <div className="logo">
            <img src={logo} alt=""/>
            <p>GUCCI</p>
        </div>
        <ul className="links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="social-icons">
            <div className="icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="copyright">
            <hr/>
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer