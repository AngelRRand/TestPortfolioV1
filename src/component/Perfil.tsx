import { useEffect, useState } from 'react'
import { useContext } from 'react';
import { AvatarContext } from '../context/AvatarContext';
import { cosmeticDefaultGif, cosmeticMaleGif } from '../helper/imagesGif';
const Perfil = () => {

    const { avatarState } = useContext(AvatarContext)
    const [avatar, setAvatar] = useState({
        nacionality: '',
        flag: '',
        skin: '',
        hair: '',
        eyes: ''
    })
    console.log(avatarState)
    useEffect(() => {
        setAvatar(avatarState)
        if (avatarState.nacionality === 'default') {
            setAvatar({
                nacionality: 'default',
                flag: cosmeticDefaultGif.Arg,
                skin: cosmeticDefaultGif.SkinB,
                hair: cosmeticDefaultGif.BlackHair,
                eyes: cosmeticDefaultGif.BrownEyes
            })
        }
        if (avatarState.nacionality === 'ecuador') {
            setAvatar({
                nacionality: 'ecuador',
                flag: cosmeticMaleGif.Ecu,
                skin: cosmeticDefaultGif.SkinB,
                hair: cosmeticDefaultGif.BlackHair,
                eyes: cosmeticDefaultGif.BrownEyes
            })
        }
    }, [])



    return (
        <div className='container_perfil left_perfil'>
            <div className="avatar_container">
                <img className='cuerpo_pj' src={avatar.flag} alt="" />
                <img className='rostro_pj' src={avatar.skin} alt="" />
                <img className='pelo_pj' src={avatar.hair} alt="" />
                <img className='ojos_pj' src={avatar.eyes} alt="" />
            </div>
            <h2>Horacio</h2>
        </div>
    )
}

export default Perfil