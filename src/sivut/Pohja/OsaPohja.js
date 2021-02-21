import React from 'react'
import './Pohja.css'
import taikina from '../../kuvat/taikina.jfif'
import { Laskuri } from './Laskuri.js'

export const OsaPohja = () => {
  return (
    <div className='pohjalaatikko'>
      <h3 className='pohjaotsikko'>Pitsapohjan valmistus</h3>
      
      <p className='pohjatavara1'> Pitsataikinan valmistukseen kannattaa käyttää hyviä raaka-aineita ja olla kärsivällinen.
      Pitsataikinaan ei tarvita muuta kuin jauhoja, vettä, hiivaa ja suolaa. Taikinaan voi myös halutessaan lisätä hieman
      öljyä, joka voi auttaa pohjan rapeaksi paistamisessa. Taikinan jauhoiksi kannattaa käyttää pitsoihin erityisesti
      tarkoitettuja pitsajauhoja. Taikinan kannattaa antaa kohota rauhassa jääkaapissa ainakin 12 tuntia, jonka jälkeen
      taikina on venyvää ja se paistuu hyvin. Ensimmäisillä kerroilla pohjan pyöreäksi muotoileminen voi olla haastavaa
      mutta tekemällä oppii eikä se ole lopulta kovin vaikeaa.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies faucibus risus, 
      in tempor metus finibus eget. Donec nec nibh elit. Donec egestas diam velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies faucibus risus, 
      in tempor metus finibus eget. Donec nec nibh elit. Donec egestas diam velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies faucibus risus, 
      in tempor metus finibus eget. Donec nec nibh elit. Donec egestas diam velit. </p>
      <p className='laskurivierus'>Tässä on laskuri, jolla voit laskea kuinka paljon mitäkin ainesosaa
      tarvitset taikinaan. Syötä tekstikenttään kuinka monta pitsaa haluat tehdä ja laskuri
      laskee sinulle reseptin. Laskurin mukaan yhden pitsan suuruisen taikinan paino on 250grammaa. <br/><br/>
      Sekoita hiiva kädenlämpöiseen veteen, ja anna sen liueta. Tämän jälkeen sekoita muut ainekset nesteeseen ja vaivaa 
      noin kymmenen minuuttia. Donec nec nibh elit. Donec egestas diam velit. 
      Integer in finibus mi. In facilisis, dui ut auctor consectetur, orci felis egestas dui, 
      in varius purus nibh non erat. Curabitur malesuada id orci eget malesuada.Donec nec nibh elit. Donec egestas diam velit. 
      Integer in finibus mi. In facilisis, dui ut auctor consectetur, orci felis egestas dui, 
      in varius purus nibh.</p>
      <Laskuri className='laskuri'/>
      
      <img src={taikina} className='taikina'/>
      <h3 className='pohjaotsikko2'>Pitsapohjan kohotus</h3>
      <p className='pohjatavara3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies faucibus risus, 
      in tempor metus finibus eget. Donec nec nibh elit. Donec egestas diam velit. 
      Integer in finibus mi. In facilisis, dui ut auctor consectetur, orci felis egestas dui, 
      in varius purus nibh non erat. Curabitur malesuada id orci eget malesuada.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies faucibus risus, 
      in tempor metus finibus eget. Donec nec nibh elit. Donec egestas diam velit. 
      Integer in finibus mi. In facilisis, dui ut auctor consectetur, orci felis egestas dui, 
      in varius purus nibh non erat. Curabitur malesuada id orci eget malesuada. Donec nec nibh elit. Donec egestas diam velit. 
      Integer in finibus mi. In facilisis, dui ut auctor consectetur, orci felis egestas dui, 
      in varius purus nibh non erat.</p>
      
    </div>
  )
}

export default { OsaPohja }
