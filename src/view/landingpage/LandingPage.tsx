import React from 'react'
import { Link } from "react-router-dom";
import Container from '../../component/Container';
import Stars from '../../component/Stars';
const LandingPage = () => {
  return (
    <Container styles='container_landingPage'>
      <Stars/>
      <Link to={'/home'}>Home</Link>
    </Container>
  )
}

export default LandingPage