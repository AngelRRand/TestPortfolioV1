import Casco from '../assets/CreatePJ/gif/Casco.gif'; 

import './Avatar.css'

import { TempletAvatar } from '../interfaces/Interface'
import { useLocation } from "react-router-dom";


const Avatar: React.FC<TempletAvatar> = ({ flag, skin, hair, eyes, helmet }) => {

    const location = useLocation();
    const currentUrl = location.pathname.toString()
    console.log(currentUrl)
    return (
        <div className="avatar_container">
            <img className='flag_avatar' src={flag} alt="" />
            <img className='skin_avatar' src={skin} alt="" />
            <img className='hair_avatar' src={hair} alt="" />
            <img className='eyes_avatar' src={eyes} alt="" />
            {
                currentUrl === '/' || currentUrl ===  '/house' || currentUrl ===  '/art' ? (
                    <img className='casco_avatar casco_opacity' src={helmet} alt=""/>
                ): (
                        <img className='casco_avatar' src={helmet} alt=""/>
                )
            }
        </div>
    )
}

export default Avatar