import React from 'react'
import pic1 from './pics/demo-pic-1.png'
import './App.css'

function SectionOne() {
    return (
        <div className="section-1-container">
            <div className="info-container">
                <h2>All Marketing <br/>Anatlytics in one place.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
               <div className="button-container-1">
                <button className="section-1-button" id="getStarted">Get Started</button>
                <button className="section-1-button">Get in Touch</button>
                </div>
            </div>

            <div className="Picture-Div">
                <div className="picture-1"></div>
                <div className="picture-2"></div>
                <div className="picture-3"></div>
                <div className="picture-4"></div>
            </div>
        </div>
    )
}

export default SectionOne
