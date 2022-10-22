import Home from "./view/Home";
import LandingPage from "./view/landingpage/LandingPage";
import Nav from "./component/Nav";
import Stars from "./component/Stars";


import { useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import './App.css'

function App() {
  const location = useLocation();
  return (
    <div className={location.pathname.toString() === '/home' ? '' : 'app_overflow'}>
      <AnimatePresence>
        <Stars/>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AnimatePresence>
      <Nav/>
    </div>
  );
}

export default App;
