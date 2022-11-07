import SwitcherAvatar from './SwitcherAvatar';

import { cosmeticDefault } from "../../helper/images";
import { useState, useEffect, useContext } from 'react';

import './CreateAvatar.css';
import AvatarContext from '../../redux/avatar/AvatarContext';

const CreateAvatar = () => {

  const { avatar, putAvatar } = useContext(AvatarContext)

  const [newAvatar, setNewAvatar] = useState({})

  const [flag, setflag] = useState({
    image: '',
    nacionality: ''
  })
   const [skin, setskin] = useState({
    image: '',
    index: ''
   })

   /*
   const [hair, sethair] = useState({
     hair: ''
   })
   const [eyes, seteyes] = useState({
     eyes: ''
   }) */
   //console.log(avatar)
  useEffect(() => {
    console.log('HPASD')
    if (avatar.flag.nacionality === 'default') {
      setflag({
        nacionality: avatar.flag.nacionality,
        image: avatar.flag.image
      })
      setskin({
        index: avatar.skin.index,
        image: avatar.skin.image
      })
    }
  }, [])
  //console.log(skin.image)
  
  const createAvatar = () => {
    setNewAvatar({
      flag,
      skin
    })
    putAvatar(newAvatar)
  }
  console.log(avatar, 'ESTADOOO')
  return (
    <div className='createAvatar_container'>
      <h2> Create Avatar</h2>
      <div className="avatar_container">
        <img className='cuerpo_pj' src={flag.image} alt="" />
        <img className='rostro_pj' src={skin.image} alt="" />


        {/* <img className='pelo_pj' src={hair.hair} alt="" />
        <img className='ojos_pj' src={eyes.eyes} alt="" /> */} 
      </div>

      <button onClick={()=> createAvatar()}>
        Guardar
      </button>


      <SwitcherAvatar
        setflag={setflag}
        setskin={setskin}
        /* sethair={sethair}
        seteyes={seteyes} */
      />
    </div>
  )
}

export default CreateAvatar