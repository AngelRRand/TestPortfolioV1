import CuerpoBlv from '../../assets/CreatePJ/HumanoTrajeBlv.png';
import CuerpoArg from '../../assets/CreatePJ/HumanoTrajeArg.png';
import CuerpoChi from '../../assets/CreatePJ/HumanoTrajeChi.png';
import CuerpoEcu from '../../assets/CreatePJ/HumanoTrajeEcu.png';
import CuerpoPeru from '../../assets/CreatePJ/HumanoTrajePeru.png';


import RostroB from '../../assets/CreatePJ/HumanoCaraBlanca.png';
import RostroM from '../../assets/CreatePJ/HumanoCaraMorena.png';


import PeloNegro from '../../assets/CreatePJ/HumanoCabelloNegro.png';
import PeloRojo from '../../assets/CreatePJ/HumanoCabelloRojo.png';
import PeloRubio from '../../assets/CreatePJ/HumanoCabelloRubio.png';


import Ojos from '../../assets/CreatePJ/HumanoOjosVerdes.png';

import './CreateAvatar.css';

import { useEffect, useState } from 'react';

const CreateAvatar = () => {

  const [head, setHead] = useState('')
  const [nacionality, setNacionality] = useState('')
  const [hair, setHair] = useState('')
  const [eyes, setEyes] = useState('')





  return (
    <div className='createAvatar_container'>
      <h2> Create Avatar</h2>
      <div className="avatar_container">
          <img className='cuerpo_pj' src={nacionality} alt="" />
          <img className='rostro_pj' src={head} alt="" />
          <img className='pelo_pj' src={Pelo} alt="" />
          <img className='ojos_pj' src={Ojos} alt="" />
        </div>




      <div className='createAvatar_divide'>
        <div className='createAvatar_options createAvatar_container'>
          <p>Trajes</p>
          <button onClick={() => setNacionality(CuerpoArg)}>switchArg</button>
          <button onClick={() => setNacionality(CuerpoBlv)}>switchBlv</button>
          <button onClick={() => setNacionality(CuerpoChi)}>switchBlv</button>
          <button onClick={() => setNacionality(CuerpoEcu)}>switchBlv</button>
          <button onClick={() => setNacionality(CuerpoPeru)}>switchBlv</button>
        </div>

        <div className='createAvatar_options createAvatar_container'>
          <p>Piel</p>
          <button onClick={() => setHead(RostroB)}>switchArg</button>
          <button onClick={() => setHead(RostroM)}>switchBlv</button>
        </div>

        <div className='createAvatar_options createAvatar_container' >
          <p>Pelos</p>
          <button onClick={() => setHair(CuerpoArg)}>switchArg</button>
          <button onClick={() => setHair(CuerpoBlv)}>switchBlv</button>
        </div>


        <div className='createAvatar_options createAvatar_container'>
          <p>Ojos</p>
          <button onClick={() => setEyes(CuerpoArg)}>switchArg</button>
          <button onClick={() => setEyes(CuerpoBlv)}>switchBlv</button>
        </div>
      </div>
    </div>
  )
}

export default CreateAvatar