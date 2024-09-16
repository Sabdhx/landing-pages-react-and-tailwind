import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import path from "./images/Path.png"
import AfterHero from './pages/AfterHero'
import SecondAfter from './pages/SecondAfter'
import Last from './pages/Last'
import Footer from './pages/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='relative'>
    <img src={path} alt="" className='absolute ml-[20%] z-0 w-[80%] h-[100vh]'/>
    </div>
   <Navbar/>
   <Hero/>
   <AfterHero/>
   <SecondAfter/>
   <Last/>
   <Footer/>
    </>
  )
}

export default App
