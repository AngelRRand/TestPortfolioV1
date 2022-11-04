
import Container from '../../component/Container';
import Stars from "../../component/Stars";


import { Link } from "react-router-dom";


import './LandingPage.css'
import CreateAvatar from './CreateAvatar';
const LandingPage = () => {
  return (
    <Container styles='container_planet'>
      <Stars/>
      <section className="landingPage">
        <Link to={'/home'}>Home</Link>
        
        <CreateAvatar/>

      </section>
    </Container>
  )
}

export default LandingPage