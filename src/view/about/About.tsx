import Container from '../../component/Container'
import Stars from '../../component/Stars'
import Planet from '../../assets/Planet/PlanetZOOM.png'
import Moon from '../../assets/Planet/Moon.png'
import Señal from '../../assets/NavImg/Señal.gif'

import PlanetTemplet from '../../component/PlanetTemplet';
import { motion } from "framer-motion";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './About.css'

var transitions = {
  house: {
    scale: 7,
    x: 350,
    y: -1150,
    transition: { duration: 4.5, type: "spring", bounce: 0 },
  },
  dream: {
    scale: 7,
    x: -1300,
    y: 650,
    transition: { duration: 4.5, type: "spring", bounce: 0 },
  },
  art: {
    scale: 7,
    x: 750,
    y: -850,
    transition: { duration: 4.5, type: "spring", bounce: 0 },
  }
}

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
    }, 4500);
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
        >
          <div className='about_moon'>
            <img src={Moon} alt="moon" />

          </div>
          {
            !show ? (
              <div className='planet_grid'>

                <div
                  className='planet_link pointer about_house'
                  onClick={() => animationOn(transitions.house, 'house')}>
                  <span>House</span>
                  <img src={Señal} alt="señal" />
                </div>

                <div
                  className='planet_link pointer about_dream'
                  onClick={() => animationOn(transitions.dream, 'dream')}>
                  <span>Dream</span>
                  <img src={Señal} alt="señal" />
                </div>

                <div
                  className='planet_link pointer about_art'
                  onClick={() => animationOn(transitions.art, 'art')}>
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