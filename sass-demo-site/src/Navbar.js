import React from 'react'
import './App.css'

function Navbar() {
    return (
        <div className ="Nav-container">
            <div className="logo-container">
                <h3 className="logo">Logo</h3>
            </div>

            <div className="Nav-Buttons-Container">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li id="Contact-Button">Get Started</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
