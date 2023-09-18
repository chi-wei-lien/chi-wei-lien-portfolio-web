import React from 'react';
import Hero from "./hero/Hero";
import Computer from "./menu/Computer";
import About from "./about/About";
import Footer from "./footer/Footer";
import Portfolio from "./portfolio/Portfolio";
import Navbar from "./navbar/Navbar";

function App() {
  return (
      <div className='font-roboto-mono'>
          <div className='h-screen overflow-scroll no-scrollbar animate-fade scroll-smooth'>
              <Hero />
              <Navbar />
              <About />
              {/*<Computer />*/}
              {/*<Portfolio />*/}
              <Footer />
          </div>
      </div>
  );
}

export default App;
