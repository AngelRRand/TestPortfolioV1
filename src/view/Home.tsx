import Container from '../component/Container'
import Stars from '../component/Stars';
import Galaxy from '../assets/galaxy.png';
import GalaxyT from '../assets/galaxyT.png';
import GalaxyB from '../assets/galaxyB.png';
import PlanetTierra from '../assets/NavImg/planetTierra.png'
import PlanetLava from '../assets/NavImg/planetLava.png'
import Planetice from '../assets/NavImg/planetIce.png'
import PlanetNet from '../assets/NavImg/planetNet.png'
import Señal from '../assets/NavImg/Señal.gif'


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import './Home.css'
const Home = () => {
  return (
    <Container styles='container_home'>
      <Stars />
      <motion.main
        className='home'
        initial={{ opacity: 0}}
        animate={{
          opacity: 1,
          transition: { duration: 1.5, type: "spring" },
        }}
      >
        <div className='container_galaxy'>
          <img className='img_galaxy' src={Galaxy} alt="" />
          <img className='img_galaxy img_galaxy_animationT' src={GalaxyT} alt="" />
          <img className='img_galaxy img_galaxy_animationB' src={GalaxyB} alt="" />
        </div>
        <div className='grid_galaxy'>
          <Link to={'/about'} className='container_señal grid_about'>
            <img src={PlanetTierra} alt="planet" className='pointer'/>
            <span className='text_señal'>About</span>
            <img src={Señal} alt="señal" className='señal pointer'/>
          </Link>
          <Link to={'/project'} className='container_señal grid_project'>
            <img src={PlanetLava} alt="planet" className='pointer'/>
            <span className='text_señal'>Project</span>
            <img src={Señal} alt="señal" className='señal pointer'/>
          </Link>
          <Link to={'/education'} className='container_señal grid_education'>
            <img src={Planetice} alt="planet" className='pointer'/>
            <span className='text_señal'>Education</span>
            <img src={Señal} alt="señal" className='señal pointer'/>
          </Link>
          <Link to={'/networks'} className='container_señal grid_networks'>
            <img src={PlanetNet} alt="planet" className='pointer'/>
            <span className='text_señal'>Networks</span>
            <img src={Señal} alt="señal" className='señal pointer'/>
          </Link>
        </div>
      </motion.main>
    </Container>
  )
}

export default Home