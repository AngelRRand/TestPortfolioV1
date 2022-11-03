import Wallpaper from '../../component/Wallpaper'
import ArtImg from '../../assets/Planet/Terra/Art/ArtBackground.png'
import ArtGif from '../../assets/Planet/Terra/Art/ArtPajaros.gif'
import NubeBot from '../../assets/nubes.png'
import NubesTop from '../../assets/nubesTop.png'
import Brightness from '../../assets/Planet/Terra/Art/brightness.gif'

import { motion } from "framer-motion";

import './Art.css'
const Art = () => {
  return (
    <Wallpaper
      image={ArtImg}
      imageGif={ArtGif}
      nubebot={NubeBot}
      nubetop={NubesTop}
      nube_bg={'nube_terra_bg'}
    >
      <motion.div
        className='view_grid'
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 3, duration: 3.5, type: "tween" },
        }}
      >
        <div className='view_item view_planet'>
          <img className='view_object' src={Brightness} alt="ligth" />
          <div className='view_card'>
            <h2>Planet</h2>
            <p>In front of a window I find myself in constant contact with the sunlight.</p>
          </div>
        </div>

        <div className='view_item view_happyDog'>
          <img className='view_object' src={Brightness} alt="cat body" />
          <div className='view_card'>
            <h2>The happy dog</h2>
            <p>His name is twenty-seven, he is always at my house :D</p>
          </div>
        </div>

        <div className='view_item view_catSleep'>
          <img className='view_object' src={Brightness} alt="cat body" />
          <div className='view_card'>
            <h2>Sleep cat</h2>
            <p>His name is twenty-seven, he is always at my house :D</p>
          </div>
        </div>
      </motion.div>
    </Wallpaper>
  )
}

export default Art