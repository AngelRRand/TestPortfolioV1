import { useState } from 'react';
import Container from '../../component/Container'
import Stars from '../../component/Stars'
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

  const [rotate, setRotate] = useState(false);
  const a = () => {
    console.log('has')
    setRotate(!rotate)
  }
  return (
    <Container styles='container_planet'>
      <Stars />
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          scale: 1,
          transition: { duration: 0.5, type: "spring", },
        }}
      >

        <motion.div
          animate={{rotate: rotate ? 360 : 0}}
          onClick={()=> a()}
        >
          <main className='about'>
            <h1>About</h1>
          </main>
        </motion.div>



      </motion.div>
    </Container>
  )
}

export default About