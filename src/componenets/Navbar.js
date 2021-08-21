import React, { useState } from 'react'
import Logo from '../images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";

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
                        <Link to="header"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} class="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="pricing"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} href='#pricing' class="nav-link">Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="faq"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} href="#faq" class="nav-link">FAQ</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} href="#contact" class="nav-link">Contact</Link>
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
