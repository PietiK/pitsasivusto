import React from 'react'
import './Paisto.css'
import uuni from '../../kuvat/pitsauuni.jpg'
import pitsauuni from '../../kuvat/uuni.jpg'

export const PaistoPohja = () => {
  return (
    <div className='laatikko'>
      <h3 className='otsikko'>Pitsan paistaminen</h3>

     

      <p className='tavara1'> Pitsa paistetaan perinteisesti puulämmitteisessä uunissa, 
      mutta kotioloissa sen paistaminen onnistuu myös tavallisessa uunisessa. Jos pohjasta
      haluaa kotonakin hieman enemmän pitseriasta saatavan pitsan tyylisen niin paistamiseen
      kannattaa käyttää pitsakiveä tai vastaavaa. Kotioloissa uuni kannattaa lämmittää niin kuumaksi
      kuin se vain menee ja esilämmittää siellä myös pitsakivi, jotta pohja kypsyy nopeasti
      ja siitä tulee mahdollisimman rapea.<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Integer id convallis nulla. Mauris ac diam ut magna consectetur convallis et quis turpis. 
      Phasellus mi mauris, elementum at porttitor nec, vehicula id felis. Suspendisse lacus mi, 
      bibendum ut felis ac, consequat laoreet lacus. Vivamus ut consequat turpis. Proin neque velit, 
      ultricies eget commodo ut, consectetur sit amet nunc. Duis mattis eleifend sollicitudin. 
      Cras eget sagittis felis. Sed non odio quis metus aliquet ultricies vel id ligula. 
      Nulla vulputate augue non leo auctor vehicula. In maximus nec lacus non consequat. 
      Proin arcu ipsum, porttitor nec neque in, ultrices dictum elit. Quisque auctor dolor rutrum 
      tellus mollis tincidunt nec at magna. In sagittis mi ac sapien finibus, nec viverra purus 
      pellentesque.</p>
      <div  className='uuni'><img src={uuni} alt='uuni'/></div>
      <p className='tavara2'> Vivamus ut consequat turpis. Proin neque velit, 
      ultricies eget commodo ut, consectetur sit amet nunc. Duis mattis eleifend sollicitudin. 
      Cras eget sagittis felis. Sed non odio quis metus aliquet ultricies vel id ligula. 
      Nulla vulputate augue non leo auctor vehicula. In maximus nec lacus non consequat. 
      Proin arcu ipsum, porttitor nec neque in, ultrices dictum elit. Quisque auctor dolor rutrum 
      tellus mollis tincidunt nec at magna. In sagittis mi ac sapien finibus, nec viverra purus 
      pellentesque.
      <br/><br/> Vivamus ut consequat turpis. Proin neque velit, 
      ultricies eget commodo ut, consectetur sit amet nunc. Duis mattis eleifend sollicitudin. 
      Cras eget sagittis felis. Sed non odio quis metus aliquet ultricies vel id ligula. 
      Nulla vulputate augue non leo auctor vehicula. In maximus nec lacus non consequat. 
      Proin arcu ipsum, porttitor nec neque in, ultrices dictum elit. Quisque auctor dolor rutrum 
      tellus mollis tincidunt nec at magna. In sagittis mi ac sapien finibus, nec viverra purus 
      pellentesque.
      <br/><br/> Vivamus ut consequat turpis. Proin neque velit, 
      ultricies eget commodo ut, consectetur sit amet nunc. Duis mattis eleifend sollicitudin. 
      Cras eget sagittis felis. Sed non odio quis metus aliquet ultricies vel id ligula. 
      Nulla vulputate augue non leo auctor vehicula. In maximus nec lacus non consequat. 
      Proin arcu ipsum, porttitor nec neque in, ultrices dictum elit. Quisque auctor dolor rutrum 
      tellus mollis tincidunt nec at magna. In sagittis mi ac sapien finibus, nec viverra purus 
      pellentesque.</p>

      <h3 className='otsikko2'>Aito pitsauuni</h3>

      <img src={pitsauuni} alt='pitsauuni' className='pitsauuni'/>

      <p className='tavara3'> Vivamus ut consequat turpis. Proin neque velit, 
      ultricies eget commodo ut, consectetur sit amet nunc. Duis mattis eleifend sollicitudin. 
      Cras eget sagittis felis. Sed non odio quis metus aliquet ultricies vel id ligula. 
      Nulla vulputate augue non leo auctor vehicula. In maximus nec lacus non consequat. 
      Proin arcu ipsum, porttitor nec neque in, ultrices dictum elit. Quisque auctor dolor rutrum 
      tellus mollis tincidunt nec at magna. In sagittis mi ac sapien finibus, nec viverra purus 
      pellentesque. <br/><br/> Vivamus ut consequat turpis. Proin neque velit, 
      ultricies eget commodo ut, consectetur sit amet nunc. Duis mattis eleifend sollicitudin. 
      Cras eget sagittis felis. Sed non odio quis metus aliquet ultricies vel id ligula. 
      Nulla vulputate augue non leo auctor vehicula. In maximus nec lacus non consequat. 
      Proin arcu ipsum, porttitor nec neque in, ultrices dictum elit. Quisque auctor dolor rutrum 
      tellus mollis tincidunt nec at magna. 
       </p>
      
    </div>
  )
}

export default PaistoPohja