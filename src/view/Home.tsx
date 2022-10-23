import Container from '../component/Container'
import Stars from '../component/Stars';
import Galaxy from '../assets/galaxy.png';
import GalaxyT from '../assets/galaxyT.png';
import GalaxyB from '../assets/galaxyB.png';



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
        {/* <Link to={'/about'}>Home</Link> */}
        <div className='grid_galaxy'>

          <Link to={'/about'} className='container_pointer'>
            <img src="" alt="planet" />
            <h4>About</h4>
            <img src="" alt="pointer" className='pointer pointer_about'/>
          </Link>
          {/* <Link to={'/project'} className='container_pointer'>
            <img src="" alt="planet" />
            <h4>Project</h4>
            <img src="" alt="pointer" className='pointer'/>
          </Link>
          <Link to={'/education'} className='container_pointer'>
            <img src="" alt="planet" />
            <h4>Education</h4>
            <img src="" alt="pointer" className='pointer'/>
          </Link>
          <Link to={'/networks'} className='container_pointer'>
            <img src="" alt="planet" />
            <h4>Networks</h4>
            <img src="" alt="pointer" className='pointer'/>
          </Link> */}

        </div>
      </motion.main>
    </Container>
  )
}

export default Home