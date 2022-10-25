import Container from '../../component/Container'
import Stars from '../../component/Stars'
import Planet from '../../assets/Planet/PlanetZOOM.png'
import Señal from '../../assets/NavImg/Señal.gif'

import { motion } from "framer-motion";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './About.css'

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
    }, 6500);
  }
  return (
    <Container styles='container_planet'>
      <Stars />
      <motion.main
        className='about'
        initial={{ scale: 0, x: -3000 }}
        animate={{
          scale: 1,
          x: 0,
          transition: { duration: 1.5, type: "spring", },
        }}

      >



        <motion.div
          className='about_img'
          animate={show === false ? {} : animation}
        >
          <h1>About</h1>
          <img src={Planet} alt="planet" />
        </motion.div>
        

        {
          !show ? (
            <div className='about_grid'>

              <div
                className='about_link pointer about_house'
                onClick={() => animationOn(transitions.house, 'house')}>
                <span>House</span>
                <img src={Señal} alt="señal" />
              </div>

              <div
                className='about_link pointer about_dream'
                onClick={() => animationOn(transitions.dream, 'dream')}>
                <span>Dream</span>
                <img src={Señal} alt="señal" />
              </div>

              <div
                className='about_link pointer about_art'
                onClick={() => animationOn(transitions.art, 'art')}>
                <span>Art</span>
                <img src={Señal} alt="señal" />
              </div>

            </div>
          ) : (
            <></>
          )
        }
        
        <motion.div
          className='about_transition'
          initial={{ opacity: 0 }}
          animate={show === false ? {} : { opacity: 1,  transition: { duration: 5.8, type: "spring" }}}

        ></motion.div>



      </motion.main>
    </Container>
  )
}

export default About