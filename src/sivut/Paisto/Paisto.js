import React from 'react'
import { Navbar } from '../../components/Navbar.js'
import { PaistoPohja } from './PaistoPohja.js'
import './Paisto.css'
import { Footer } from '../../components/Footer.js'

export const Paisto = () => {
  return (
    <div className='astia'>
      <div className='eka'>
        <Navbar className='navbar' />
      </div>
      <div className='kolmas'>
        <PaistoPohja />
      </div>
      
    </div>
  )
}

export default Paisto