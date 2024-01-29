import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Home from './components/Dashboard/Home.jsx';
import Links from './components/Dashboard/Links.jsx';
import QrCode from './components/Dashboard/QrCode.jsx';
import Layout from './Layout'
import BarGraph from './components/Dashboard/Charts/BarGraph.jsx';
import Analytics from './components/Dashboard/Analytics.jsx';

import Login from './components/login.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="" element={<Layout/>} >
    <Route path='' element={<Analytics />} />,
    //  <Route path='about' element={<About />} />
    //  <Route path='Pricing'  element={<Pricing/>}/>
    /* <Route path='solution'  element={<Solution/>}/> */
     <Route path='login'  element={<Login/>}/>
    //  <Route path='*' element={<div>Not Found</div>}/>  

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(

  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>

)
