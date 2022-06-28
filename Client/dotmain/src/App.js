import React from 'react';
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
// import Layout from './Pages/Layout';



const App = () => { 

  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
    </div>
  );
}

export default App;
