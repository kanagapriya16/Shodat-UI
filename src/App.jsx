import "./App.css";
import ContactPage from "./Components/ContactPage/ContactPage";
import Home from "./Components/HomePage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlatformPage from "./Components/PlatformPage/PlatformPage";
import SolutionAi from "./Components/SolutionAI/SolutionAi";
import ShodatAI from "./Components/ShodatAI/ShodatAI";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar1/Navbar";
import FinalFooter from "./Components/Footer/FinalFooter";

function App() {
  return (
    <>
      <Router>
        {" "}
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/solutionAI" element={<SolutionAi />} />
            <Route path="/shodatAI" element={<ShodatAI />} />
            <Route path="/about" element={<About />} />
            {/* Add more routes for additional pages */}
          </Routes>
        </div>{" "}
      </Router>
    </>
  );
}

export default App;
