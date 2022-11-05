import SwitcherAvatar from './SwitcherAvatar';
import CuerpoArg from '../../assets/CreatePJ/HumanoTrajeArg.png';
import RostroB from '../../assets/CreatePJ/HumanoCaraBlanca.png';
import PeloNegro from '../../assets/CreatePJ/HumanoCabelloNegro.png';
import OjosMarron from '../../assets/CreatePJ/HumanoOjosMarrones.png';

import './CreateAvatar.css';

import { useState } from 'react';
const CreateAvatar = () => {

  const [head, setHead] = useState(RostroB)
  const [nacionality, setNacionality] = useState(CuerpoArg)
  const [hair, setHair] = useState(PeloNegro)
  const [eyes, setEyes] = useState(OjosMarron)

  const [avatar, setAvatar] = useState({
    head: head,
    nacionality: nacionality,
    hair: hair,
    eyes: eyes
  })
  const createAvatar = () => {
    setAvatar({
      head: head,
      nacionality: nacionality,
      hair: hair,
      eyes: eyes
    })
    /* useDispatch(getAvatar()) */
  }


  return (
    <div className='createAvatar_container'>
      <h2> Create Avatar</h2>
      <div className="avatar_container">
        <img className='cuerpo_pj' src={nacionality} alt="" />
        <img className='rostro_pj' src={head} alt="" />
        <img className='pelo_pj' src={hair} alt="" />
        <img className='ojos_pj' src={eyes} alt="" />
      </div>

      <button onClick={()=> createAvatar()}>
        Guardar
      </button>

      
      <SwitcherAvatar
        setHead={setHead}
        setNacionality={setNacionality}
        setHair={setHair}
        setEyes={setEyes}
      />
    </div>
  )
}

export default CreateAvatar