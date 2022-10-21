import { useLocation, Route, Routes } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import './App.css'
import Home from "./view/Home";
function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
