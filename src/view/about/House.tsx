import Wallpaper from '../../component/Wallpaper'
import HouseImg from '../../assets/Planet/Terra/House/House.gif'
import HouseImgGif from '../../assets/Planet/Terra/House/HouseFlora.gif'
import NubeBot from '../../assets/nubes.png'
import NubesTop from '../../assets/nubesTop.png'
import lightEffect from '../../assets/Planet/Terra/House/LuzEffectHover.gif'
import catBody from '../../assets/Planet/Terra/House/27.gif'
import cathead from '../../assets/Planet/Terra/House/27NotModif.gif'
import catheadHover from '../../assets/Planet/Terra/House/27Modif.gif'

import './House.css'
const House = () => {



    return (
        <Wallpaper
            image={HouseImg}
            imageGif={HouseImgGif}
            nubebot={NubeBot}
            nubetop={NubesTop}
            nube_bg={'nube_terra_bg'}
        >
            <div className='view_grid'>
                <div className='view_item view_me'>
                    <img src={lightEffect} alt="" />
                    <div className='view_card'>
                        <h2>Room</h2>
                        <p>In front of a window I find myself in constant contact with the sunlight.</p>
                    </div>
                </div>

                <div className='view_item view_cat'>
                    <img src={catBody} alt="" />
                    <div className='view_card'>
                        <h2>Room</h2>
                        <p>In front of a window I find myself in constant contact with the sunlight.</p>
                    </div>
                </div>
            </div>
        </Wallpaper>
    )
}

export default House