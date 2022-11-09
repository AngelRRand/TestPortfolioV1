import './Avatar.css'

import { TempletAvatar } from '../interfaces/Interface'
import { useLocation } from "react-router-dom";


const Avatar: React.FC<TempletAvatar> = ({ flag, skin, hair, eyes }) => {

    const location = useLocation();
    const currentUrl = location.pathname.toString()
    return (
        <div className={currentUrl === '/' ? "avatar_container" : "avatar_container"}>
            <img className='flag_avatar' src={flag} alt="" />
            <img className='skin_avatar' src={skin} alt="" />
            <img className='hair_avatar' src={hair} alt="" />
            <img className='eyes_avatar' src={eyes} alt="" />
            {
                currentUrl !== '/' || '/education' ||  '/projects' || '/networks' ? (
                    <></>
                ): (
                    <>
                        <img/>
                    </>
                )
            }
        </div>
    )
}

export default Avatar