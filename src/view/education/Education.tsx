import Container from '../../component/Container'
import Stars from '../../component/Stars'
import Planet from '../../assets/Planet/PlanetZOOM.png'
import Señal from '../../assets/NavImg/Señal.gif'
import PlanetTemplet from '../../component/PlanetTemplet';

import { motion } from "framer-motion";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Education.css'
const Education = () => {

  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [animation, setAnimation] = useState({});

  return (
    <Container styles='container_planet'>
      <Stars />
      <motion.main
        className='education'
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

        </PlanetTemplet>
      </motion.main>
    </Container>
  )
}

export default Education