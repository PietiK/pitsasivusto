import React from 'react'
import './Tayte.css'
import juusto from '../../kuvat/juusto.jpg'
import kana from '../../kuvat/kana.jpeg'

export const TaytePohja = () => {
  return (
    <div className='taytelaatikko'>
      <h3 className='tayteotsikko'>Pitsan täyttäminen</h3>
      <img src={juusto} className='juusto'/>
      <p className='taytetavara1'> Pitsapohjan päälle laitetaan useimmiten tomaattikastiketta, juustoa ja jonkinnäköiset
      täytteet. Täytteiksi voi valita niin lihaa, kuin kasviksiakin, jotku laittavat jopa hedelmiä pitsaan.
      Eräs hyvin suosittu ja kiistanalainen täyte on ananas. Ympäri maailman väitellään siitä, kuuluuko
       ananas pitsaan. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies faucibus risus, 
      in tempor metus finibus eget. Donec nec nibh elit. Donec egestas diam velit. 
      Integer in finibus mi. In facilisis, dui ut auctor consectetur, orci felis egestas dui, 
      in varius purus nibh non erat. Curabitur malesuada id orci eget malesuada. Donec nec nibh elit. Donec egestas diam velit. 
      Integer in finibus mi. In facilisis, dui ut auctor consectetur, orci felis egestas dui, 
      in varius purus nibh non erat. Curabitur malesuada id orci eget malesuada. </p>
      <p className='taytetavara2'/>
      <h3 className='tayteotsikko2'>Paljon vaihtoehtoja</h3>
      <img src={kana} className='kana'/>
      <p className='taytetavara3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies faucibus risus, 
      in tempor metus finibus eget. Donec nec nibh elit. Donec egestas diam velit. 
      Integer in finibus mi. In facilisis, dui ut auctor consectetur, orci felis egestas dui, 
      in varius purus nibh non erat. Curabitur malesuada id orci eget malesuada.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies faucibus risus, 
      in tempor metus finibus eget. Donec nec nibh elit. Donec egestas diam velit. 
      Integer in finibus mi. In facilisis, dui ut auctor consectetur, orci felis egestas dui, 
      in varius purus nibh non erat. Curabitur malesuada id orci eget malesuada.</p>
      
    </div>
  )
}

export default TaytePohja