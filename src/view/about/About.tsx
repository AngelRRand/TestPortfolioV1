import { useState } from 'react';
import Container from '../../component/Container'
import Stars from '../../component/Stars'
import { motion } from "framer-motion";
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

  const [transition, setTransition] = useState();

  return (
    <Container styles='container_planet'>
      <Stars />
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{
          scale: 1,
          transition: { duration: 0.5, type: "spring", },
        }}
        exit={
          transition
        }
      >

      </motion.div>
      <main>
        <h1>About</h1>
      </main>
    </Container>
  )
}

export default About