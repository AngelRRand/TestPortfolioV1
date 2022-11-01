import Wallpaper from '../../component/Wallpaper';
import ArtImg from '../../assets/Planet/Terra/Dream/Moon.png';
import ArtGif from '../../assets/Planet/Terra/Dream/Moon.gif';
import NubeBot from '../../assets/nubes.png';
import NubesTop from '../../assets/nubesTop.png';
import Stars from '../../component/Stars';
import Container from '../../component/Container';

import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion";

import './Dream.css'
const Dream = () => {
  return (
    <Container styles='container_planet'>
      <Stars></Stars>
      <Wallpaper
        image={ArtImg}
        imageGif={ArtGif}
        nubebot={NubeBot}
        nubetop={NubesTop}
        nube_bg={'nube_terra_bg'}
      >
        <motion.div
          className='dream_container_text'
          initial={{ y: 10000 }}
          animate={{
            y: 0,
            transition: { duration: 10, type: "ease" },
          }}
        >
          <div className='dream_text'>

            <Typewriter
              options={{
                strings: `asdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
                autoStart: true,
                loop: false,
                delay: 150,
                wrapperClassName: 'text_typing',
              }}
            />
          </div>
        </motion.div>
      </Wallpaper>

    </Container>
  )
}

export default Dream