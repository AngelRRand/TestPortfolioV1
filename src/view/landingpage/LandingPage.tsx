import { Link } from "react-router-dom";
import Container from '../../component/Container';
import Stars from "../../component/Stars";
import './LandingPage.css'
const LandingPage = () => {
  return (
    <Container styles='container_planet'>
      <Stars/>
      <section className="landingPage">
        <Link to={'/home'}>Home</Link>
        <div>
          <h2>PJ</h2>
          <div className="landingPage_cont_pj">

          </div>
        </div>
      </section>
    </Container>
  )
}

export default LandingPage