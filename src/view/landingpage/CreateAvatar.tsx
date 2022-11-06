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

  })
  const [skin, setskin] = useState({

  })
  const [hair, sethair] = useState({

  })
  const [eyes, seteyes] = useState({

  })
  useEffect(() => {
    setAvatar(avatarState)
    if (avatarState.nacionality === 'default') {
      setnacionality({
        nacionality: cosmeticDefault.Arg.index
      })
      setflag({
        image: cosmeticDefault.Arg.index
      })
    }
  }, [])



  const create = () => {
    setAvatar({
      nacionality: avatar.nacionality,
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
        <img className='cuerpo_pj' src={avatar.flag} alt="" />
        <img className='rostro_pj' src={avatar.skin} alt="" />
        <img className='pelo_pj' src={avatar.hair} alt="" />
        <img className='ojos_pj' src={avatar.eyes} alt="" />
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