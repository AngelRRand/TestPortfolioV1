import { Link } from "react-router-dom";
import Container from '../../component/Container';
import './LandingPage.css'
const LandingPage = () => {
  return (
    <Container styles='container_landingPage'>
      <section className="landingPage">
        <Link to={'/home'}>Home</Link>
      </section>
    </Container>
  )
}

export default LandingPage