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
   /* useEffect(() => {
        if (avatar.flag.nacionality === 'default') {
            setAvatar({
                nacionality: 'default',
                flag: cosmeticDefaultGif.Arg,
                skin: cosmeticDefaultGif.SkinB,
                hair: cosmeticDefaultGif.BlackHair,
                eyes: cosmeticDefaultGif.BrownEyes
            })
        }
        if(avatar.flag.index === 'bolivia'){
            if(avatar.skin.index === 'skinblanca'){
                setAvatar({
                    nacionality: 'bolivia',
                    flag: cosmeticMaleGif.Blv,
                    skin: cosmeticMaleGif.SkinB,
                    hair: cosmeticMaleGif.BlackHair,
                    eyes: cosmeticMaleGif.BrownEyes
                })
            }
            if(avatar.skin.index === 'skinNegra'){
                setAvatar({
                    nacionality: 'bolivia',
                    flag: cosmeticMaleGif.Blv,
                    skin: cosmeticMaleGif.SkinM,
                    hair: cosmeticMaleGif.BlackHair,
                    eyes: cosmeticMaleGif.BrownEyes
                })
            }
        }
        if(avatar.flag.index === 'chile'){
            if(avatar.skin.index === 'skinblanca'){
                setAvatar({
                    nacionality: 'chile',
                    flag: cosmeticMaleGif.Chi,
                    skin: cosmeticMaleGif.SkinB,
                    hair: cosmeticMaleGif.BlackHair,
                    eyes: cosmeticMaleGif.BrownEyes
                })
            }
            if(avatar.skin.index === 'skinNegra'){
                setAvatar({
                    nacionality: 'chile',
                    flag: cosmeticMaleGif.Chi,
                    skin: cosmeticMaleGif.SkinM,
                    hair: cosmeticMaleGif.BlackHair,
                    eyes: cosmeticMaleGif.BrownEyes
                })
            }
        }
    }, []) */

    console.log(avatar)

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