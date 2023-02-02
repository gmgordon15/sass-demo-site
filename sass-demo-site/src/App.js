import React from 'react'
import './App.css';
import Navbar from './Navbar.js'
import SectionOne from './sectionOne'
import SectionTwo from './SectionTwo.js'
function App() {
  return (
    
    <div className="big-container">
      <Navbar />
      <SectionOne/>
      <SectionTwo/>

    </div>
  )
}

export default App;
