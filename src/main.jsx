import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { Route,RouterProvider ,createBrowserRouter,createRoutesFromElements  } from 'react-router-dom'
import MainPage from './components/MainPage'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Layout from './Layout'
import Login from './components/login.jsx';
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} >
      <Route path='' element={<MainPage />}/>
     {/* <Route path='about' element={<About />} /> */}
     <Route path='Pricing'  element={<Pricing/>}/>
     {/* <Route path='solution'  element={<Solution/>}/> */}
     <Route path='login'  element={<Login/>}/>
     <Route path='*' element={<div>Not Found</div>}/>  
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router}/>
    </ThemeProvider>
  </React.StrictMode>
)
