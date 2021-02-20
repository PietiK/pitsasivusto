import React, { useState } from 'react'
import './Pohja.css'

export const Laskuri = () => {
  const [numero, setNumero] = useState(0)
  const [perkele, setPerkele] = useState(0)
  const [jauho, setJauho] = useState(0)
  const [vesi, setVesi] = useState(0)
  const [suola, setSuola] = useState(0)
  const [hiiva, setHiiva] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();   
    setPerkele(numero*250)
    setJauho(perkele * 0.624)
    setVesi(perkele * 0.356)
    setSuola(Math.round(perkele * 0.0188 * 100)/100)
    setHiiva(Math.round(perkele * 0.0012 * 100)/100)
}

  return (
    <div className='perkele'>
      <form onSubmit={handleSubmit} >
        <div>
				Haluamasi pitsojen määrä: <input onChange = {(e) => setNumero(e.target.value.replace(/\D/,''))} value = {numero}></input>
            <button type='submit'>Laske resepti</button>
			  </div>
      </form>
      <div>
      <p>Jauhoa: {jauho}g</p>
      <p>Vettä: {vesi}g</p>
      <p>Suolaa: {suola}g</p>
      <p>Hiivaa: {hiiva}g</p>
    </div>
    </div>
  )
}

export default Laskuri
