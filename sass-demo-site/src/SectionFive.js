import React from 'react'

function SectionFive() {
    return (
        <div className="section-5-container">
            <div className="section-5-title-container">
                <div className="section-5-Tag">Contact US</div>
                <h1>We are here to help. Contact us Today.</h1>
            </div>
        <div className="container-for-center">
            
       
            <div className="Contact-Form-Container">
                <div className="continer-for-divs">
                    <div className="left-side-container">
                        <div className="Full-Name-Div">
                            <label>Full Name</label>
                            <input type="text" name="" value="" placeholder="Full Name" id="name-input"></input>
                        </div>
                        <div className="Full-Name-Div">
                            <label for="email">Email</label>
                            <input type="text" name="" value="" placeholder="Email" id="email-input"></input>
                        </div>
                        <div className="Full-Name-Div">
                            <label for="email">Phone Number</label>
                            <input type="text" name="" value="" placeholder="Phone Number" id="phone-input"></input>
                        </div>
                   
                    </div >
                    <div className="right-side-container">
                         <div className="right-side-container-div">
                            <h3>Message</h3>
                            <textarea rows="" cols="" className="text-area" placeholder="Enter Message..."></textarea>
                        </div>
                    </div>
                </div>
                
                <button className="send-message-btn">Send Message</button>
               
            </div>

        </div>

        </div>
    )
}

export default SectionFive
