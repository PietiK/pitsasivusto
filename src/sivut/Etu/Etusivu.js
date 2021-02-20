import React from 'react'
import { Navbar } from '../../components/Navbar.js'
import '../../Navbar.css'
import { OsaKuva } from './Osa.js'
import { Footer } from '../../components/Footer.js'
import { Sankari } from '../../components/Sankari.js'
import './Etusivu.css'
import '../../index.css'

export const Etusivu = () => {
  return (
    <div className='etusivu-container'>
      <Sankari />
        <Navbar className='etusivu-item-2'/>
      <div className='etusivu-item-3'>
        <OsaKuva className='osakuva'></OsaKuva>
      </div>
    </div>
  )
}

export default Etusivu
