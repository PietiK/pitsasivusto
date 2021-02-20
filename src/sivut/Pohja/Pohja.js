import React from 'react'
import { Navbar } from '../../components/Navbar.js'
import './Pohja.css'
import '../../Navbar.css'
import { OsaPohja } from './OsaPohja.js'
import { Laskuri } from './Laskuri.js'

export const Pohja = () => {
  return (
    <div className='astia'>
      <div className='eka'>
        <Navbar className='navbar' />
      </div>
      <div className='kolmas'>
        <OsaPohja />
      </div>
      
    </div>
  )
}

export default Pohja
