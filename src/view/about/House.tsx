import Wallpaper from '../../component/Wallpaper'
import HouseImg from '../../assets/Planet/Terra/House/House.gif'
import HouseImgGif from '../../assets/Planet/Terra/House/HouseFlora.gif'
import NubeBot from '../../assets/nubes.png'
import NubesTop from '../../assets/nubesTop.png'
import lightEffect from '../../assets/Planet/Terra/House/LuzEffectHover.gif'
import catBody from '../../assets/Planet/Terra/House/27.gif'
import cathead from '../../assets/Planet/Terra/House/27NotModif.gif'
import catheadHover from '../../assets/Planet/Terra/House/27Modif.gif'

import { motion } from "framer-motion";

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
            <motion.div
                className='view_grid'
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 3,duration: 3.5, type: "tween" },
                }}
                >
                <div className='view_item view_me'>
                    <img className='view_object' src={lightEffect} alt="ligth" />
                    <div className='view_card'>
                        <h2>Room</h2>
                        <p>In front of a window I find myself in constant contact with the sunlight.</p>
                    </div>
                </div>

                <div className='view_item view_cat'>
                    <img className='view_object' src={catBody} alt="cat body" />
                    <img className='view_object' src={cathead} alt="cat head" />
                    <img className='view_object' src={catheadHover} alt="cat head" />
                    <div className='view_card'>
                        <h2>My cat</h2>
                        <p>His name is twenty-seven, he is always at my house :D</p>
                    </div>
                </div>
            </motion.div>
        </Wallpaper>
    )
}

export default House