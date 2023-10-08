import "./App.css";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactMePage from "./pages/ContactMePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/contactme" element={<ContactMePage />}></Route>
        <Route path="/projects" element={<ProjectPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
