import Container from '../../component/Container'
import Stars from '../../component/Stars'

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



  return (
    <Container styles='container_planet'>
      <Stars />
      <main>
        <h1>About</h1>
      </main>
    </Container>
  )
}

export default About