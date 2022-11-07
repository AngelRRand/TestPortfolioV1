import SwitcherAvatar from './SwitcherAvatar';

import { cosmeticDefault } from "../../helper/images";
import { useState, useEffect, useContext } from 'react';

import './CreateAvatar.css';

const CreateAvatar = () => {


  /* console.log(avatarState) */
  const [avatar, setAvatar] = useState({
    nacionality: '',
  })


  const [nacionality, setnacionality] = useState({
    nacionality: ''
  })
  const [flag, setflag] = useState({
    flag: '',
  })
  const [skin, setskin] = useState({
    skin: ''
  })
  const [hair, sethair] = useState({
    hair: ''
  })
  const [eyes, seteyes] = useState({
    eyes:''
  })

  

  //console.log(avatar, 'AVATAR')

  return (
    <div className='createAvatar_container'>
      <h2> Create Avatar</h2>
      <div className="avatar_container">
        <img className='cuerpo_pj' src={flag.flag} alt="" />
        <img className='rostro_pj' src={skin.skin} alt="" />
        <img className='pelo_pj' src={hair.hair} alt="" />
        <img className='ojos_pj' src={eyes.eyes} alt="" />
      </div>

      <button>
        Guardar
      </button>


      <SwitcherAvatar
        setnacionality={setnacionality}
        setflag={setflag}
        setskin={setskin}
        sethair={sethair}
        seteyes={seteyes}
      />
    </div>
  )
}

export default CreateAvatar