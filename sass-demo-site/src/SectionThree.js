import React from 'react'
import PicOne from './Section 3 Pics/2.png'
import PicTwo from './Section 3 Pics/1.png'



function SectionThree() {
    return (
        <div className="Section-3-Container">
            <div className="Section-3-Pics-Container">
                <img src={PicOne} id="PicOneSectionThree"/>
                <img src={PicTwo} id="PicTwoSectionThree"/>
            </div>

            <div className="Section-3-Info-Container">
                <div className="Section-3-Tag">About Us</div>
                <h1>The Story Behind Our Company</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut. Ut enim ad minim veniam, <br/>quis nostrud exercitation ullamco laboris nisi ut.</p>
                <button className="Section-3-Button">Learn More</button>

            </div>
            
        </div>
    )
}

export default SectionThree
