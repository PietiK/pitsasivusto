import React from 'react'
import '../Footer.css'
import {
  BrowserRouter as Router,
  Switch, Route, Link
  } from "react-router-dom"


export const Footer = () => {
  return (
    <div className='footer-container'>
      <div  className='footer-link'>
        
        <Link to='/' ><p>Etusivu</p></Link>
        <Link to='/pohja'><p>Pohja</p></Link>
        <Link to='/tayte'><p>Täyte</p></Link>
        <Link to='/paisto'><p >Paisto</p></Link>
      </div>
      <div className='footer-text'>
        <p className='kak'>Ota yhteyttä</p>
        <p >Pertti Pirjo</p>
        <p >Puh.nro: 0501234567</p>
        <p >email: pitsa@pitseria.fi</p>
      </div>
    </div>
  )
}

export default Footer