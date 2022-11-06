import SwitcherAvatar from './SwitcherAvatar';

import { cosmeticDefault } from "../../helper/images";
import { AvatarContext } from '../../context/AvatarContext'
import { useState, useEffect, useContext } from 'react';

import './CreateAvatar.css';

const CreateAvatar = () => {


  const { avatarState } = useContext(AvatarContext)
  const [avatar, setAvatar] = useState({
    nacionality: '',
    flag: '',
    skin: '',
    hair: '',
    eyes: ''
  })


  const [nacionality, setnacionality] = useState({
    nacionality: ''
  })
  const [flag, setflag] = useState({
    flag: ''
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
  useEffect(() => {
    setAvatar(avatarState)
    if (avatarState.nacionality === 'default') {
      setnacionality({
        nacionality: cosmeticDefault.Arg.index
      })
      setflag({
        flag: cosmeticDefault.Arg.image
      })
      setskin({
        skin: cosmeticDefault.SkinB.image
      })
      sethair({
        hair: cosmeticDefault.BlackHair.image
      })
      seteyes({
        eyes: cosmeticDefault.BrownEyes.image
      })
    }
  }, [])



  const create = () => {
    setAvatar({
      nacionality: nacionality.nacionality,
      flag: avatar.flag,
      skin: avatar.skin,
      hair: avatar.hair,
      eyes: avatar.eyes
    })
    /* useDispatch(getAvatar()) */
  }


  return (
    <div className='createAvatar_container'>
      <h2> Create Avatar</h2>
      <div className="avatar_container">
        <img className='cuerpo_pj' src={flag.flag} alt="" />
        <img className='rostro_pj' src={skin.skin} alt="" />
        <img className='pelo_pj' src={hair.hair} alt="" />
        <img className='ojos_pj' src={eyes.eyes} alt="" />
      </div>

      <button onClick={() => create()}>
        Guardar
      </button>


      <SwitcherAvatar
        setAvatar={setAvatar}
      />
    </div>
  )
}

export default CreateAvatar