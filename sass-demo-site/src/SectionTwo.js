import React from 'react'
import IconCirlce from './Icons/circle.png'
import ShapesOne from './Icons/shapes.png'
import ShapesTwo from './Icons/shapes (1).png'
import ShapesThree from './Icons/star.png'

function SectionTwo() {
    return (
        <div className="Section-2-Container" id="SectionTwo">
            <div className="features-tag">Features</div>
            <div className="title-container">
                <h1>Connect All your tools <br/>and work effeciently</h1>
                <button className="button-Section-2-Learn-More">Learn More</button>
            </div>
            <div className="card-container">

                <div className="cards" id="card-1">
                    <div className="Card-Content-Container">
                        <img src={IconCirlce} alt=""/>
                        <h3>One-Platform</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. cillum dolore.</p>
                    </div>
                   
                </div>
                <div className="cards" id="card-2">
                    <div className="Card-Content-Container">
                        <img src={ShapesOne} alt=""/>
                        <h3>Integrations</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. cillum dolore.</p>
                    </div>


                </div>
                <div className="cards" id="card-3">
                    <div className="Card-Content-Container">
                        <img src={ShapesTwo} alt=""/>
                        <h3>Analytics</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. cillum dolore.</p>
                    </div>
                </div>
                <div className="cards" id="card-4">
                <div className="Card-Content-Container">
                        <img src={ShapesThree} alt=""/>
                        <h3>Reports</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. cillum dolore.</p>
                    </div>
                </div>
            </div>
               
        </div>
               
    )
}

export default SectionTwo
