import React from 'react'
import './App.css'
import {Link} from 'react-scroll'
import {useState} from 'react'

function Navbar() {
   
const [click,setClick] = useState(false)
const handleClick = () => setClick(!click)
const closeMenu = () => setClick(false)

    return (
        <div className ="Nav-container">
            <div className="logo-container">
                <h3 className="logo">Rose Analytics</h3>
            </div>

            <div className="Nav-Buttons-Container">
                <ul>
                    <li><Link to="sectionOne" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home</Link></li>
                    <li><Link to="SectionTwo" spy={true} smooth={true} offset={2} duration={500} onClick={closeMenu}>Features</Link></li>
                    <li><Link to="SectionThree" spy={true} smooth={true} offset={1} duration={500} onClick={closeMenu}>About Us</Link></li>
                    <li><Link to="SectionFour" spy={true} smooth={true} offset={5} duration={500} onClick={closeMenu}>Pricing</Link></li>
                    <li><Link to="SectionFive" spy={true} smooth={true} offset={1} duration={500} onClick={closeMenu}>Contact Us</Link></li>
                    <li id="Contact-Button">Get Started</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
