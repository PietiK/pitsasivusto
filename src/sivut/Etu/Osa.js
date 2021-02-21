import React from 'react'
import './Etusivu.css'
import Pepe from '../../kuvat/pepe.jpg'

export const OsaKuva = (kuva) => {
  return (
    <div className='osalaatikko'>
      <h3 className='osaotsikko'>Pitsa / pizza</h3>
      <p className='osatavara1'> Pizza tai pitsa on yksinkertaisimmassa muodossaan uunissa 
      paistettu, litteä, usein pyöreä leipä, joka on päällystetty yleensä tomaateilla tai 
      tomaattikastikkeella, juustolla sekä muilla valinnaisilla täytteillä. 
      Yleensä kyse on avopiiraasta, mutta myös täytettyjä pizzoja (kuten calzone) tunnetaan. 
      Pizza on kansainvälisesti hyvin tunnettu ja suosittu ruokalaji, ja Suomessa se on suosittu 
      viikonloppuruoka. Juusto on usein mozzarellaa tai joskus usean juuston sekoitusta. 
      Suomalaisissa pizzerioissa juustona käytetään 
      usein edamjuustoa tai sinihomejuustoa, mutta käytetään myös mozzarellaa. (lähde: 
      <a href='https://fi.wikipedia.org/wiki/Pizza' target='_blank'>Wikipedia</a>)
      <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies faucibus risus, 
      in tempor metus finibus eget. Donec nec nibh elit. Donec egestas diam velit. 
      Integer in finibus mi. In facilisis, dui ut auctor consectetur, orci felis egestas dui, 
      in varius purus nibh non erat. Curabitur malesuada id orci eget malesuada.</p>
      <img src={Pepe} className='osapepe'/>
      <h3 className='osaotsikko2'>Pitsan historiaa   </h3>
      <p className='osatavara2'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies faucibus risus, 
      in tempor metus finibus eget. Donec nec nibh elit. Donec egestas diam velit. 
      Integer in finibus mi. In facilisis, dui ut auctor consectetur, orci felis egestas dui, 
      in varius purus nibh non erat. Curabitur malesuada id orci eget malesuada. 
      Pellentesque congue ac leo et elementum. Aliquam imperdiet ante non odio varius viverra. 
      Donec sit amet ex a ante pulvinar pellentesque. Aenean pulvinar dolor nec metus imperdiet 
      ultricies. Donec eget velit risus. Duis egestas urna elit. Praesent gravida malesuada accumsan. 
      Maecenas nisi dui, malesuada eget maximus nec,<br/><br/>  
      euismod quis massa. Phasellus ut bibendum arcu, a ornare lorem.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
      turpis egestas. Cras nec augue vitae mi condimentum placerat. Aenean eget posuere 
      tortor. Cras elementum porttitor magna, vitae tempor urna interdum vel. 
      Curabitur id condimentum massa. Ut nunc lorem, mattis sit amet turpis a, 
      sollicitudin tincidunt ipsum. Sed a malesuada risus. Pellentesque habitant 
      morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies faucibus risus, 
      in tempor metus finibus eget. Donec nec nibh elit. <br/><br/>  Donec egestas diam velit. 
      Integer in finibus mi. In facilisis, dui ut auctor consectetur, orci felis egestas dui, 
      in varius purus nibh non erat. Curabitur malesuada id orci eget malesuada. 
      Pellentesque congue ac leo et elementum. Aliquam imperdiet ante non odio varius viverra. 
      Donec sit amet ex a ante pulvinar pellentesque. Aenean pulvinar dolor nec metus imperdiet 
      ultricies. Donec eget velit risus. Duis egestas urna elit. Praesent gravida malesuada accumsan. 
      Maecenas nisi dui, malesuada eget maximus nec, 
      euismod quis massa. Phasellus ut bibendum arcu, a ornare lorem.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
      turpis egestas. Cras nec augue vitae mi condimentum placerat. Aenean eget posuere 
      tortor. Cras elementum porttitor magna, vitae tempor urna interdum vel. 
      Curabitur id condimentum massa. Ut nunc lorem, mattis sit amet turpis a, 
      sollicitudin tincidunt ipsum. Sed a malesuada risus. Pellentesque habitant 
      morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      
    </div>
  )
}

export default { OsaKuva }
