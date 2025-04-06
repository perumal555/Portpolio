import React from 'react'
import Cantant from '../Componentes/Contant'
import About from '../Componentes/About'
import Skills from '../Componentes/Skills'
import Project from '../Componentes/Project'
import Contact from '../Componentes/Contact'
import Blogs from '../Componentes/Blogs'
import Footer from '../Componentes/Footer'

const Home = () => {  
  return (
    <div>
      <div id='cantant'>
      <Cantant />
      </div>
      <div id='about'>
         <About />
      </div>
      <div id='skill'>
        <Skills />
      </div>
      <div id='project'>
          <Project />
      </div>
      <div id='blog'>
        <Blogs />
      </div>
      <div id='contact'>
         <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Home