import React from 'react'
import './Pohja.css'
import Pepe from '../../kuvat/pepe.jpg'
import { Laskuri } from './Laskuri.js'

export const OsaPohja = () => {
  return (
    <div className='laatikko'>
      <h3 className='otsikko'>Pitsako vittu</h3>
      <p className='tavara1'> Pizza tai pitsa on yksinkertaisimmassa muodossaan uunissa 
      paistettu, litteä, usein pyöreä leipä, joka on päällystetty yleensä tomaateilla tai 
      tomaattikastikkeella, juustolla sekä muilla valinnaisilla täytteillä. 
      Yleensä kyse on avopiiraasta, mutta myös täytettyjä pizzoja (kuten calzone) tunnetaan. 
      Pizza on kansainvälisesti hyvin tunnettu ja suosittu ruokalaji, ja Suomessa se on suosittu 
      viikonloppuruoka. Juusto on usein mozzarellaa tai joskus usean juuston sekoitusta. 
      Suomalaisissa pizzerioissa juustona käytetään 
      usein edamjuustoa tai <br/><br/>sinihomejuustoa, mutta käytetään myös mozzarellaa. (lähde: Wikipedia) kuten calzone) tunnetaan. 
      Pizza on kansainvälisesti hyvin tunnettu ja suosittu ruokalaji, ja Suomessa se on suosittu 
      viikonloppuruoka. Juusto on usein mozzarellaa tai joskus usean juuston sekoitusta. kuten calzone) tunnetaan. 
      Pizza on kansainvälisesti hyvin tunnettu ja suosittu ruokalaji, ja Suomessa se on suosittu 
      viikonloppuruoka. Juusto on usein mozzarellaa tai joskus usean juuston sekoitusta. </p>
      <Laskuri className='tavara2'/>
      <h3 className='otsikko2'>Pitsako vittu</h3>
      <img src={Pepe} className='pepe'/>
      <p className='tavara3'>sissa pizzerioissa juustona käytetään 
      usein edamjuustoa tai sinihomejuustoa, mutta käytetään myös mozzarellaa. (lähde: Wikipedia) kuten calzone) tunnetaan. 
      Pizza on kansainvälisesti hyvin tunnettu ja suosittu ruokalaji, ja Suomessa se on suosittu 
      viikonloppuruoka. Juusto on usein mozzarellaa tai <br/><br/>joskus usean juuston sekoitusta. kuten calzone) tunnetaan. 
      Pizza on kansainvälisesti hyvin tunnettu ja suosittu ruokalaji, ja Suomessa se on suosittu 
      viikonloppuruoka. Juusto on usein mozzarellaa tai joskus usean juuston sekoitusta</p>
      
    </div>
  )
}

export default { OsaPohja }
