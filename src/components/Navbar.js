import React, {useState} from 'react'
import '../Navbar.css'
import {
  BrowserRouter as Router,
  Switch, Route, Link
  } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar">
       <div >
          <Link to='/' className="navbar-text">
            Etusivu
          </Link>  
          <Link to='/pohja' className="navbar-text">
            Pohja
          </Link>
          <Link to='/tayte' className="navbar-text">
            Täyte
          </Link>
          <Link to='/paisto' className="navbar-text">
            Paisto
          </Link>
      </div> 
    </nav>

  )
}

export default Navbar