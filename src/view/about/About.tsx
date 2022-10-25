import Container from '../../component/Container'
import Stars from '../../component/Stars'
import Planet from '../../assets/Planet/PlanetZOOM.png'
import Señal from '../../assets/NavImg/Señal.gif'


import { useState } from 'react';
import { motion } from "framer-motion";

import './About.css'
var transitions = {
  me: {
    scale: 7,
    x: 350,
    y: -1150,
    transition: { duration: 6.5, type: "spring", bounce: 0 },
  },
  dream: {
    scale: 7,
    x: -500,
    y: 1100,
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

  const [animation, setAnimation] = useState(false);
  const [houseA, setHouseA] = useState({
    scale: 7,
    x: 350,
    y: -1150,
    transition: { duration: 6.5, type: "spring", bounce: 0 }
  })

  const animationOn = () => {


    setAnimation(!animation)


    setTimeout(function(){
      console.log("Hola Mundo");
      setAnimation(!animation);
  }, 2000);


  }
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
          animate={animation === false ? {} : houseA}
        >
          <h1>About</h1>
          <img src={Planet} alt="planet" />
        </motion.div>

          {
            !animation ? (
              <div className='about_grid'>
                
                <div className='about_link pointer about_house' onClick={() => animationOn()}>
                  <span>House</span>
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