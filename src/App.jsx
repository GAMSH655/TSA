import React from 'react'
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Skills from './Components/Skills'
import Experiences from './Components/Experiences'
import Review from "./Components/Review"
import Contact from './Components/Contact'
import Scroll from './Hooks/Sroll'
import { ThemeProvider } from './Contexts/ThemeContext'
const App = () => {
  return (
    <>
    <ThemeProvider>
    <Scroll/>
       <Header/>
       <Hero/>
       <About/>
       <Skills/>
       <Experiences/>
       < Review/>
       <Contact/>
    </ThemeProvider>
    
    </>
  )
}

export default App