import { Outlet } from "react-router-dom"
import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
/**
 * Manages the layout of each page in the website.
 * @returns the Layout of our pages.
 */
const Layout = () => {
  return (
    <main>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default Layout