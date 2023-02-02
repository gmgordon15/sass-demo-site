import React from 'react'
import './App.css';
import Navbar from './Navbar.js'
import SectionOne from './sectionOne'
import SectionTwo from './SectionTwo.js'
import SectionThree from './SectionThree.js'
import SectionFour from './SectionFour.js'


function App() {
  return (
    
    <div className="big-container">
      <Navbar />
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>

    </div>
  )
}

export default App;
