import { Link } from "react-router-dom";
import Container from '../../component/Container';
import Stars from "../../component/Stars";
import './LandingPage.css'
const LandingPage = () => {
  return (
    <Container styles='container_landingPage'>
      <Stars/>
      <section className="landingPage">
        <Link to={'/home'}>Home</Link>
      </section>
    </Container>
  )
}

export default LandingPage