/* Nacionality */
import CuerpoBlv from '../../assets/CreatePJ/HumanoTrajeBlv.png';
import CuerpoArg from '../../assets/CreatePJ/HumanoTrajeArg.png';
import CuerpoChi from '../../assets/CreatePJ/HumanoTrajeChi.png';
import CuerpoEcu from '../../assets/CreatePJ/HumanoTrajeEcu.png';
import CuerpoPeru from '../../assets/CreatePJ/HumanoTrajePeru.png';
/* Body */
import RostroB from '../../assets/CreatePJ/HumanoCaraBlanca.png';
import RostroM from '../../assets/CreatePJ/HumanoCaraMorena.png';
/* Hair */
import PeloNegro from '../../assets/CreatePJ/HumanoCabelloNegro.png';
import PeloRojo from '../../assets/CreatePJ/HumanoCabelloRojo.png';
import PeloRubio from '../../assets/CreatePJ/HumanoCabelloRubio.png';
/* Eyes */
import OjosAzules from '../../assets/CreatePJ/HumanoOjosAzules.png';
import OjosVerdes from '../../assets/CreatePJ/HumanoOjosVerdes.png';
import OjosMarron from '../../assets/CreatePJ/HumanoOjosMarrones.png';

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
          <img className='pelo_pj' src={hair} alt="" />
          <img className='ojos_pj' src={eyes} alt="" />
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
          <button onClick={() => setHair(PeloNegro)}>switchArg</button>
          <button onClick={() => setHair(PeloRojo)}>switchBlv</button>
          <button onClick={() => setHair(PeloRubio)}>switchBlv</button>
        </div>


        <div className='createAvatar_options createAvatar_container'>
          <p>Ojos</p>
          <button onClick={() => setEyes(OjosAzules)}>switchArg</button>
          <button onClick={() => setEyes(OjosVerdes)}>switchArg</button>
          <button onClick={() => setEyes(OjosMarron)}>switchBlv</button>
        </div>
      </div>
    </div>
  )
}

export default CreateAvatar