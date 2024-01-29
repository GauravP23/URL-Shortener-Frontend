import { useState } from 'react'
import "./components/MainPage"
import './App.css'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Layout from './Layout'
import Dashboard from './components/Dashboard/Home'
import Home from './components/Dashboard/Home'
import Links from './components/Dashboard/Links'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Home />

    </>
  )
}

export default App
