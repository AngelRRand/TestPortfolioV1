import Home from "./view/Home";
import About from "./view/about/About";
import Projects from "./view/projects/Projects";
import Education from "./view/education/Education";
import Networks from "./view/networks/Networks";
import LandingPage from "./view/landingpage/LandingPage";

import Nav from "./component/Nav";

import { useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import './App.css'

function App() {
  const location = useLocation();
  return (
    <div className={location.pathname.toString() === '/home' ? '' : 'app_overflow'}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Projects />} />
          <Route path="/projects" element={<Education />} />
          <Route path="/networks" element={<Networks />} />
        </Routes>
      </AnimatePresence>
      <Nav/>
    </div>
  );
}

export default App;
