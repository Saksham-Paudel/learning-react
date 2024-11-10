import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import UseEffect from './UseEffect'

function App() {
  
//hello kta ho
  return (
    <>
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/useeffect' element={<UseEffect />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
