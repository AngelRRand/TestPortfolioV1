import Container from '../../component/Container'
import Stars from '../../component/Stars'
import Planet from '../../assets/Planet/PlanetLavaZOOM.png'
import Señal from '../../assets/NavImg/Señal.gif'
import PlanetTemplet from '../../component/PlanetTemplet';

import { motion } from "framer-motion";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Projects.css'
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
        className='view_planet'
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


        </PlanetTemplet>
      </motion.main>
    </Container>
  )
}

export default Projects