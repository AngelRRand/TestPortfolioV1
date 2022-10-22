import Container from '../component/Container'
import { Link } from "react-router-dom";
import './Home.css'
const Home = () => {
  return (
    <Container styles='container_home'>
      <main className='home'>
        <h1>asd</h1>
        <Link to={'/about'}>Home</Link>
      </main>
    </Container>
  )
}

export default Home