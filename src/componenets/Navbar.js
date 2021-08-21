import React, { useState } from 'react'
import Logo from '../images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';

import './NavbarStyles.css'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <header className="header">
            <nav className="navbar">
                <div className='logo'>
                    <img src={Logo} alt="" />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <a href="/" class="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#pricing" class="nav-link">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a href="#faq" class="nav-link">FAQ</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" class="nav-link">Contact</a>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (
                        <FaTimes size={30} style={{ color: '#ffffff' }} />
                    ) : (
                            <FaBars size={30} style={{ fill: '#ffffff' }} />
                        )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
