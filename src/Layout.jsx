import React from "react"
import NavbarWithMegaMenu from './components/Navbar'
import Footer from "./components/Footer"
import {Outlet} from  "react-router-dom"


function Layout(){
  return(
    <>
    <NavbarWithMegaMenu/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout