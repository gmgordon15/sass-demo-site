import React from 'react'
import CheckMark from './Icons/check.png'

function SectionFour() {
    return (
        <div className="Section-4-Container">
            <div className="Section-4-Title-Container">
                <div className="Pricing-Tag">Pricing</div>
                <h1>Our Plans</h1>
            </div>

            <div className="Section-4-Card-Container">
                <div className="Section-4-Card-1">
                    <div className="Card-Title">
                        <h4>Small Business</h4>
                        <div className="card-tag">Basic</div>
                    </div>

                    <div className="discription-container">
                        <h3>$99.99</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </div>

                    <div className="list-container">
                        <ul>
                            <div class="list-items"><img src={CheckMark}/>Advanced analytics</div>
                            <div class="list-items"><img src={CheckMark}/>100.000 tracked visits</div>
                            <div class="list-items"><img src={CheckMark}/>Monthly reports</div>
                            <div class="list-items"><img src={CheckMark}/>Mobile app</div>
                            <div class="list-items"><img src={CheckMark}/>Normal support</div>
                        </ul>
                    </div>

                </div>



                <div className="Section-4-Card-2">
                    <div className="Card-Title">
                        <h4>Growth</h4>
                        <div className="card-tag">Basic</div>
                    </div>

                    <div className="discription-container">
                        <h3>$299.99</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </div>

                    <div className="list-container">
                        <ul>
                            <div class="list-items"><img src={CheckMark}/>Advanced analytics</div>
                            <div class="list-items"><img src={CheckMark}/>100.000 tracked visits</div>
                            <div class="list-items"><img src={CheckMark}/>Monthly reports</div>
                            <div class="list-items"><img src={CheckMark}/>Mobile app</div>
                            <div class="list-items"><img src={CheckMark}/>Normal support</div>
                        </ul>
                    </div>

                </div>


                <div className="Section-4-Card-3">
                    <div className="Card-Title">
                        <h4>Enterprise</h4>
                        <div className="card-tag">Basic</div>
                    </div>

                    <div className="discription-container">
                        <h3>$499.99</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </div>

                    <div className="list-container">
                        <ul>
                            <div class="list-items"><img src={CheckMark}/>Advanced analytics</div>
                            <div class="list-items"><img src={CheckMark}/>100.000 tracked visits</div>
                            <div class="list-items"><img src={CheckMark}/>Monthly reports</div>
                            <div class="list-items"><img src={CheckMark}/>Mobile app</div>
                            <div class="list-items"><img src={CheckMark}/>Normal support</div>
                        </ul>
                    </div>

                </div>
                
            </div>
            
        </div>
    )
}

export default SectionFour
