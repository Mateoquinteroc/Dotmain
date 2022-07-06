import React from 'react';
import './App.css';
import './styles/_vars.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';

// import Layout from './Pages/Layout';



const App = () => { 

  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
