import { TempletAvatar } from '../interfaces/Interface'
import { useLocation } from "react-router-dom";
const Avatar: React.FC<TempletAvatar> = ({flag, skin, hair, eyes}) => {
    
    const location = useLocation();
    return (
        <div className={location.pathname.toString() === '/' ? "avatar_container" : "avatar_container"}>
            <img className='cuerpo_pj' src={flag} alt="" />
            <img className='rostro_pj' src={skin} alt="" />
            <img className='pelo_pj' src={hair} alt="" />
            <img className='ojos_pj' src={eyes} alt="" />
        </div>
    )
}

export default Avatar