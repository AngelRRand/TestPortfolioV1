import { useEffect, useState } from 'react'
import { useContext } from 'react';
import { cosmeticDefaultGif, cosmeticMaleGif } from '../../helper/imagesGif';
import AvatarContext from '../../redux/avatar/AvatarContext';
const Perfil = () => {

    const [avatarr, setAvatar] = useState({
        nacionality: '',
        flag: '',
        skin: '',
        hair: '',
        eyes: ''
    })
    
    const { avatar } = useContext(AvatarContext)
   useEffect(() => {
        if (avatar.flag.nacionality === 'default') {
            setAvatar({
                nacionality: 'default',
                flag: cosmeticDefaultGif.Arg,
                skin: cosmeticDefaultGif.SkinB,
                hair: cosmeticDefaultGif.BlackHair,
                eyes: cosmeticDefaultGif.BrownEyes
            })
        }
        
    }, [])



    return (
        <div className='container_perfil left_perfil'>
            <div className="avatar_container">
                <img className='cuerpo_pj' src={avatarr.flag} alt="" />
                <img className='rostro_pj' src={avatarr.skin} alt="" />
                <img className='pelo_pj' src={avatarr.hair} alt="" />
                <img className='ojos_pj' src={avatarr.eyes} alt="" />
            </div>
            <h2>Horacio</h2>
        </div>
    )
}

export default Perfil