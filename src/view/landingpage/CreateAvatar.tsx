import CuerpoBlv from '../../assets/CreatePJ/HumanoTrajeBlv.png';
import CuerpoArg from '../../assets/CreatePJ/HumanoTrajeArg.png';
import Rostro from '../../assets/CreatePJ/HumanoCaraBlanca.png';
import Pelo from '../../assets/CreatePJ/HumanoCabelloNegro.png';
import Ojos from '../../assets/CreatePJ/HumanoOjosVerdes.png';

import './CreateAvatar.css';

import { useEffect, useState } from 'react';

const CreateAvatar = () => {

  const [head, setHead] = useState('')
 



  const switchHead = (image: string) => {
    setHead(image)
  }
  
  
  return (
    <div className='createAvatar_container'>
      <h2> Create Avatar</h2>
      <div>
        <button onClick={() => switchHead(CuerpoArg)}>switchArg</button>
        <button onClick={() => switchHead(CuerpoBlv)}>switchBlv</button>
      </div>
      <div className="avatar_container">
          <img className='cuerpo_pj' src={head} alt="" />
          <img className='rostro_pj' src={Rostro} alt="" />
          <img className='pelo_pj' src={Pelo} alt="" />
          <img className='ojos_pj' src={Ojos} alt="" />
        </div>
    </div>
  )
}

export default CreateAvatar