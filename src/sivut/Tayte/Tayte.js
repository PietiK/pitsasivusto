import React from 'react'
import { Navbar } from '../../components/Navbar.js'
import { TaytePohja } from './TaytePohja.js'
import './Tayte.css'

export const Tayte = () => {
  return (
    <div className='astia'>
      <div className='eka'>
        <Navbar className='navbar' />
      </div>
      <div className='kolmas'>
        <TaytePohja />
      </div>
      
    </div>
  )
}

export default Tayte