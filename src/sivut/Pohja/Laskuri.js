import React, { useState } from 'react'
import './Pohja.css'

export const Laskuri = () => {
  const [numero, setNumero] = useState(0)
  const [tempnum, settempnum] = useState(0)
  const [jauho, setJauho] = useState(0)
  const [vesi, setVesi] = useState(0)
  const [suola, setSuola] = useState(0)
  const [hiiva, setHiiva] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();   
    settempnum(numero*250)
    setJauho(tempnum * 0.624)
    setVesi(tempnum * 0.356)
    setSuola(Math.round(tempnum * 0.0188 * 100)/100)
    setHiiva(Math.round(tempnum * 0.0012 * 100)/100)
}

  return (
    <div className='laskukone'>
      <form onSubmit={handleSubmit} >
        <div className='taustatausta'>
				Syötä haluamasi pitsojen määrä: <input inputMode='numeric' onChange = {(e) => setNumero(e.target.value.replace(/\D/,''))} value = {numero}></input>
            <button type='submit'>Laske resepti</button>
			  </div>
      </form>
      <div className='lukutausta'>
      <p>Jauhoa: {jauho}g</p>
      <p>Vettä: {vesi}g</p>
      <p>Suolaa: {suola}g</p>
      <p>Hiivaa: {hiiva}g</p>
    </div>
    </div>
  )
}

export default Laskuri
