import Container from '../../component/Container'
import Stars from '../../component/Stars'
import Planet from '../../assets/Planet/PlanetZOOM.png'
import Señal from '../../assets/NavImg/Señal.gif'

import PlanetTemplet from '../../component/PlanetTemplet';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { transition } from '../../helper/transitions'
import './About.css'


const About = () => {

  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [animation, setAnimation] = useState({});
  const animationOn = (animations: object, rute: string) => {
    setShow(!show)
    setAnimation(animations)
    setTimeout(function () {
      setAnimation({});
      navigate(`/${rute}`)
      setShow(false)
    }, 2000);
  }
  return (
    <Container styles='container_planet'>
      <Stars />
      <motion.main
        className='planet'
        initial={{ scale: 0, x: -3000 }}
        animate={{
          scale: 1,
          x: 0,
          transition: { duration: 1.5, type: "spring", },
        }}

      >

        <PlanetTemplet
          show={show}
          animation={animation}
          name={'About'}
          planet={Planet}
          transitionStyle={'home_transition'}
          moon={true}
          animationOn={animationOn}
        >
           
          {
            !show ? (
              <div className='planet_grid'>

                <div
                  className='planet_link pointer about_house'
                  onClick={() => animationOn(transition.house, 'house')}>
                  <span>House</span>
                  <img src={Señal} alt="señal" />
                </div>


                <div
                  className='planet_link pointer about_art'
                  onClick={() => animationOn(transition.art, 'art')}>
                  <span>Art</span>
                  <img src={Señal} alt="señal" />
                </div>

              </div>
            ) : (
              <></>
            )
          } 
        </PlanetTemplet>

      </motion.main>
    </Container>
  )
}

export default About