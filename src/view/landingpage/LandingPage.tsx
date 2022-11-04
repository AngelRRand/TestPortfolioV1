import Cuerpo from '../../assets/CreatePJ/HumanoTrajeChi.gif'
import Rostro from '../../assets/CreatePJ/HumanoCara.gif'
import Pelo from '../../assets/CreatePJ/HumanoCabelloNegro.gif'
import Ojos from '../../assets/CreatePJ/HumanoOjoMarrones.gif'
import Container from '../../component/Container';
import Stars from "../../component/Stars";


import { Link } from "react-router-dom";


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
            <img className='cuerpo_pj' src={Cuerpo} alt="" />
            <img className='rostro_pj' src={Rostro} alt="" />
            <img className='pelo_pj' src={Pelo} alt="" />
            <img className='ojos_pj' src={Ojos} alt="" />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default LandingPage