import Container from '../../component/Container'
import Stars from '../../component/Stars'
import Planet from '../../assets/Planet/PlanetZOOM.png'
import Señal from '../../assets/NavImg/Señal.gif'
import PlanetTemplet from '../../component/PlanetTemplet';


import { motion } from "framer-motion";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Education = () => {

  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [animation, setAnimation] = useState({});

  return (
    <Container styles='container_planet'>
<Stars />
    </Container>
  )
}

export default Education