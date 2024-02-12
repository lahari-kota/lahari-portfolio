import "./App.css";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactMePage from "./pages/ContactMePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectPage";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const openSidebar = () => {
    setShowSidebar(true);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div>
      <Sidebar closeSidebar={closeSidebar} showSidebar={showSidebar} />
      <Navbar openSidebar={openSidebar} />
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
