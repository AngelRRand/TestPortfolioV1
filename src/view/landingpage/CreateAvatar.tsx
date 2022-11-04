import CuerpoBlv from '../../assets/CreatePJ/HumanoTrajeBlv.png';
import CuerpoArg from '../../assets/CreatePJ/HumanoTrajeArg.png';


import Rostro from '../../assets/CreatePJ/HumanoCaraBlanca.png';
import Pelo from '../../assets/CreatePJ/HumanoCabelloNegro.png';
import Ojos from '../../assets/CreatePJ/HumanoOjosVerdes.png';

import './CreateAvatar.css';

import { useEffect, useState } from 'react';

const CreateAvatar = () => {

  const [head, setHead] = useState('')
  const [nacionality, setNacionality] = useState('')
  const [eyes, setEyes] = useState('')
  const [hair, setHair] = useState('')




  const switchHead = (image: string) => {
    setHead(image)
  }


  return (
    <div className='createAvatar_container'>
      <h2> Create Avatar</h2>
      <div className="avatar_container">
          <img className='cuerpo_pj' src={head} alt="" />
          <img className='rostro_pj' src={Rostro} alt="" />
          <img className='pelo_pj' src={Pelo} alt="" />
          <img className='ojos_pj' src={Ojos} alt="" />
        </div>
      <div className='createAvatar_divide'>
        <div className='createAvatar_options createAvatar_container'>
          <p>Trajes</p>
          <button onClick={() => switchHead(CuerpoArg)}>switchArg</button>
          <button onClick={() => switchHead(CuerpoBlv)}>switchBlv</button>
          <button onClick={() => switchHead(CuerpoBlv)}>switchBlv</button>
          <button onClick={() => switchHead(CuerpoBlv)}>switchBlv</button>
          <button onClick={() => switchHead(CuerpoBlv)}>switchBlv</button>
        </div>

        <div className='createAvatar_options createAvatar_container' >
          <p>Pelos</p>
          <button onClick={() => switchHead(CuerpoArg)}>switchArg</button>
          <button onClick={() => switchHead(CuerpoBlv)}>switchBlv</button>
        </div>

        <div className='createAvatar_options createAvatar_container'>
          <p>Piel</p>
          <button onClick={() => switchHead(CuerpoArg)}>switchArg</button>
          <button onClick={() => switchHead(CuerpoBlv)}>switchBlv</button>
        </div>

        <div className='createAvatar_options createAvatar_container'>
          <p>Ojos</p>
          <button onClick={() => switchHead(CuerpoArg)}>switchArg</button>
          <button onClick={() => switchHead(CuerpoBlv)}>switchBlv</button>
        </div>
      </div>
    </div>
  )
}

export default CreateAvatar