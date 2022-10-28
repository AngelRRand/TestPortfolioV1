import Container from '../../component/Container'
import Stars from '../../component/Stars'
import Planet from '../../assets/Planet/PlanetLavaZOOM.png'
import Señal from '../../assets/NavImg/Señal.gif'
import PlanetTemplet from '../../component/PlanetTemplet';

import { motion } from "framer-motion";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Projects.css'

var transitions = {
  house: {
    scale: 7,
    x: 350,
    y: -1150,
    transition: { duration: 6.5, type: "spring", bounce: 0 },
  },
  dream: {
    scale: 7,
    x: -1300,
    y: 650,
    transition: { duration: 6.5, type: "spring", bounce: 0 },
  },
  art: {
    scale: 7,
    x: 750,
    y: -850,
    transition: { duration: 6.5, type: "spring", bounce: 0 },
  }
}

const Projects = () => {

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
    }, 6500);
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
          name={'Education'}
          planet={Planet}
          transitionStyle={'home_transition'}
        >

          {
            !show ? (
              <div className='planet_grid'>

                <div
                  className='planet_link pointer project_youtube'
                  onClick={() => animationOn(transitions.house, 'house')}>
                  <span>Youtube</span>
                  <img src={Señal} alt="señal" />
                </div>

                <div
                  className='planet_link pointer project_henry'
                  onClick={() => animationOn(transitions.dream, 'dream')}>
                  <span>Henry</span>
                  <img src={Señal} alt="señal" />
                </div>

                <div
                  className='planet_link pointer project_udemy'
                  onClick={() => animationOn(transitions.art, 'art')}>
                  <span>Udemy</span>
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

export default Projects