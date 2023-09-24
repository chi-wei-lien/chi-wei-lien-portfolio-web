import React, {useState} from 'react';
import Hero from "./hero/Hero";
import About from "./about/About";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Education from "./education/Education";
import { Route, useLocation, Link } from "react-router-dom";

const App = () => {
    const location = useLocation();
    console.log(location.pathname)
    return (
      <div className='font-roboto-mono'>
          <div className='h-screen overflow-scroll no-scrollbar animate-fade scroll-smooth'>
              <Hero />
              <Navbar />
              {(location.pathname === "/about" || location.pathname === "/") && <About />}
              {location.pathname === "/education" && <Education />}
              {/*<Computer />*/}
              {/*<Portfolio />*/}
              <Footer />
          </div>
      </div>
    );
}

export default App;
