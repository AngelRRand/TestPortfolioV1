import Wallpaper from '../../component/Wallpaper';
import ArtImg from '../../assets/Planet/Terra/Dream/Moon.png';
import ArtGif from '../../assets/Planet/Terra/Dream/Moon.gif';
import NubeBot from '../../assets/nubes.png';
import NubesTop from '../../assets/nubesTop.png';
import Stars from '../../component/Stars';
import Container from '../../component/Container';

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
              <motion.p
                initial={{ y: 10000 }}
                animate={{
                  y: 0,
                  transition: { duration: 16, type: "ease" },
                }}
              > I am a person who dreams :D </motion.p>
              <motion.p
                initial={{ y: 10000 }}
                animate={{
                  y: 0,
                  transition: { duration: 18, type: "ease" },
                }}
              > I dream of traveling to Europe and Asia. </motion.p>
              <motion.p
                initial={{ y: 10000 }}
                animate={{
                  y: 0,
                  transition: { duration: 20, type: "ease" },
                }}
              > I dream of being able to get married, have a family and a dog. </motion.p>
              <motion.p
                initial={{ y: 10000 }}
                animate={{
                  y: 0,
                  transition: { duration: 22, type: "ease" },
                }}
              > I dream of having a house on a mountain. </motion.p>
          </div>
        </motion.div>
      </Wallpaper>

    </Container>
  )
}

export default Dream