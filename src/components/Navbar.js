import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';
import { GiFullPizza } from 'react-icons/gi';
import { CgMenu } from 'react-icons/cg'
import { TiTimes } from 'react-icons/ti';
import { IconContext } from 'react-icons/lib';

export function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <GiFullPizza className='navbar-icon' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <TiTimes /> : <CgMenu />}
            </div>
            <div className={click ? 'nav-menu active' : 'nav-menu'}>
              <br className='nav-item5'/>
                <Link exact to='/' className='nav-links' onClick={closeMobileMenu}>
                <p className='nav-item nav-item1'>Etusivu</p>
                </Link>
              
                <Link to='/pohja' className='nav-links'onClick={closeMobileMenu}>
                <p className='nav-item nav-item2'>Pohja</p>
                </Link>
                <Link to='/tayte'className='nav-links' onClick={closeMobileMenu}>
                  <p className='nav-item nav-item3'>Täyte</p>
                </Link>
              
                <Link to='/paisto' className='nav-links' onClick={closeMobileMenu}>
                  <p className='nav-item nav-item4'>Paistaminen </p>
                </Link>
          </div>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;



/*import React, {useState} from 'react'
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

export default Navbar*/