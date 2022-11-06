import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { AvatarContext } from '../context/AvatarContext';
const Perfil = () => {

    const { avatarState } = useContext(AvatarContext)
    const [avatar, setAvatar] = useState({})
    useEffect(() => {
      if(avatarState.nacionality === 'default'){
        console.log(avatarState)
      }
    }, [avatar])
    


    return (
        <div className='container_perfil left_perfil'>
            <div className="avatar_container">
                <img className='cuerpo_pj' src={avatarState.flag} alt="" />
                <img className='rostro_pj' src={avatarState.skin} alt="" />
                <img className='pelo_pj' src={avatarState.hair} alt="" />
                <img className='ojos_pj' src={avatarState.eyes} alt="" />
            </div>
            <h2>Horacio</h2>
        </div>
    )
}

export default Perfil