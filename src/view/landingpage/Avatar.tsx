import React from 'react'
import { TempletAvatar } from '../../interfaces/Interface'

const Avatar: React.FC<TempletAvatar> = ({flag, skin, hair, eyes}) => {
    
    
    return (
        <div className="avatar_container">
            <img className='cuerpo_pj' src={flag} alt="" />
            <img className='rostro_pj' src={skin} alt="" />
            <img className='pelo_pj' src={hair} alt="" />
            <img className='ojos_pj' src={eyes} alt="" />
        </div>
    )
}

export default Avatar