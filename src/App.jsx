import React from 'react'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Nav/>
       <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>
        <Route path='/skills' element={<Skills/>}> </Route>
        <Route path='/projects' element={<Project/>}> </Route>
        <Route path='/resume' element={<Resume/>}> </Route>
        <Route path='/contact' element={<Contact/>}> </Route>
      </Routes>


       
      {/* <Home/> */}
      {/* <About/>
      <Skills/>
      <Project/>
      <Resume/>
      <Contact/>
       */}
     <Footer/>
    </div>
  )
}

export default App