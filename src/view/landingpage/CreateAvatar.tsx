import SwitcherAvatar from './SwitcherAvatar';

import { cosmeticDefault } from "../../helper/images";
import { useState, useEffect, useContext } from 'react';

import './CreateAvatar.css';
import AvatarContext from '../../redux/avatar/AvatarContext';
import Avatar from './Avatar';
import { ContainersA } from '../../interfaces/Interface';

const CreateAvatar = () => {

  const { avatar, putAvatar } = useContext(AvatarContext)

  const [newAvatar, setNewAvatar] = useState({})

  const [refresh, setRefresh] = useState(false)

  const [flag, setflag] = useState({
    image: '',
    nacionality: ''
  })
  const [skin, setskin] = useState({
    image: '',
    index: ''
  })

  const [hair, sethair] = useState({
    image: '',
    index: ''
  })
  const [eyes, seteyes] = useState({
    image: '',
    index: ''
  })

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
      sethair({
        index: avatar.hair.index,
        image: avatar.hair.image
      })
      seteyes({
        index: avatar.eyes.index,
        image: avatar.eyes.image
      })
    }
  }, [])

  useEffect(() => {
    if(refresh === true){
      setRefresh(false)
    }
  }, [refresh])

    
  const createAvatar = () => {
    setNewAvatar({
      flag,
      skin,
      hair,
      eyes
    })
    putAvatar(newAvatar)
  }
  
  return (
    <div className='createAvatar_container'>
      <h2> Create Avatar</h2>

      {
        !refresh ? (
          <Avatar
            flag={flag.image}
            skin={skin.image}
            hair={hair.image}
            eyes={eyes.image}
          />
        ) : (
          <Avatar
            flag={''}
            skin={''}
            hair={''}
            eyes={''}
          />
        )

      }


      <button onClick={() => createAvatar()}>
        Guardar
      </button>


      <SwitcherAvatar
        setflag={setflag}
        setskin={setskin}
        sethair={sethair}
        seteyes={seteyes}
        setRefresh={setRefresh}
      />
    </div>
  )
}

export default CreateAvatar