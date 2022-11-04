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

  const [head, setHead] = useState(RostroB)
  const [nacionality, setNacionality] = useState(CuerpoArg)
  const [hair, setHair] = useState(PeloNegro)
  const [eyes, setEyes] = useState(OjosMarron)

  const [avatar, setAvatar] = useState({

  })



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
          <button onClick={() => setNacionality(CuerpoArg)}>Argentina</button>
          <button onClick={() => setNacionality(CuerpoBlv)}>Bolivia</button>
          <button onClick={() => setNacionality(CuerpoChi)}>Chile</button>
          <button onClick={() => setNacionality(CuerpoEcu)}>Ecuador</button>
          <button onClick={() => setNacionality(CuerpoPeru)}>Peru</button>
        </div>

        <div className='createAvatar_options createAvatar_container'>
          <p>Piel</p>
          <button onClick={() => setHead(RostroB)}>Blanca</button>
          <button onClick={() => setHead(RostroM)}>Morena</button>
        </div>

        <div className='createAvatar_options createAvatar_container' >
          <p>Pelos</p>
          <button onClick={() => setHair(PeloNegro)}>Negro</button>
          <button onClick={() => setHair(PeloRojo)}>Rojo</button>
          <button onClick={() => setHair(PeloRubio)}>Rubio</button>
        </div>


        <div className='createAvatar_options createAvatar_container'>
          <p>Ojos</p>
          <button onClick={() => setEyes(OjosAzules)}>Azules</button>
          <button onClick={() => setEyes(OjosVerdes)}>Verdes</button>
          <button onClick={() => setEyes(OjosMarron)}>Marrones</button>
        </div>
      </div>
    </div>
  )
}

export default CreateAvatar