import { useState } from 'react'
 import "./components/MainPage" 
import './App.css'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
         <Navbar/>
         <MainPage/>  
          
         <Footer/>
        
      
    </>
  )
}

export default App
