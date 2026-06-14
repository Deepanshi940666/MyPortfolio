import React from 'react'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'

const App = () => {
  return (
    <div>
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App