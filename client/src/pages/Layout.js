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
    <div className="d-flex text-white wd-bg flex-column container-fluid">
        <Navbar/>
        <main className="bg-dark flex-grow-1 mt-5 pt-4">
        <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout