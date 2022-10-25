import Container from '../../component/Container'
import Stars from '../../component/Stars'
import Planet from '../../assets/Planet/PlanetZOOM.png'
import Señal from '../../assets/NavImg/Señal.gif'


import { useState } from 'react';
import { motion } from "framer-motion";
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
    y: -450,
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
      /* navigate(`/${rute}`) */
      setShow(false)
    }, 6500);
  }
  console.log(show)
  return (
    <Container styles='container_planet'>
      <Stars />
      <motion.main
        className='about'
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { duration: 0.5, type: "spring", },
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
                onClick={() => animationOn(transitions.dream, 'art')}>
                <span>Art</span>
                <img src={Señal} alt="señal" />
              </div>

            </div>
          ) : (
            <></>
          )
        }

      </motion.main>
    </Container>
  )
}

export default About