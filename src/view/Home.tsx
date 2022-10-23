import Container from '../component/Container'
import Stars from '../component/Stars';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './Home.css'
const Home = () => {
  return (
    <Container styles='container_home'>
      <Stars />
      <motion.main
        className='home'
        initial={{ opacity: 0, }}
        animate={{
          opacity: 1,
          transition: { duration: 10.5, type: "spring" },
        }}
      >
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <h1>asd</h1>
        <Link to={'/about'}>Home</Link>
      </motion.main>
    </Container>
  )
}

export default Home