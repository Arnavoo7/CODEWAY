import { useState } from 'react'
import './App.css'
import About from './Components/About/About'
import Center from './Components/Center/Center'
import Contact from './Components/Contact/Contact'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='main'>
      <Navbar />   
      <Center />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}


export default App;
