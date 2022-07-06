import React, { useRef } from "react";
import "./App.css";
import "./styles/_vars.scss";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Project from "./Pages/Project";

// import Layout from './Pages/Layout';

const App = () => {
  const contactRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef ();

  const handleNavbarClick = (item) => {
    let refToUse;

    switch (item) {
      case "about":
        refToUse = aboutRef;
        break;
      case "project":
        refToUse = projectRef;
        break;  
      case "contact":
        refToUse = contactRef;
        break;
    }

    if (refToUse) {
      refToUse.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Navbar onClick={handleNavbarClick} />
      <Home />
      <About ref={aboutRef} />
      <Project ref={projectRef}/>
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
};

export default App;
