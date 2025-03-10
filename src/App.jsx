import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./ui/Card";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <div className="m-4 sm:m-6 md:m-8 lg:m-12 xl:m-16">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        </Routes>
        <Card />
      </div>
    </Router>
  );
}

export default App;
