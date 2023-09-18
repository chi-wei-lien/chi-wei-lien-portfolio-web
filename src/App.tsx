import React, {useState} from 'react';
import Hero from "./hero/Hero";
import About from "./about/About";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import Education from "./education/Education";

const App = () => {
    const [page, setPage] = useState("about");
    return (
      <div className='font-roboto-mono'>
          <div className='h-screen overflow-scroll no-scrollbar animate-fade scroll-smooth'>
              <Hero />
              <Navbar setPage={setPage}/>
              {page === "about" && <About />}
              {page === "education.md" && <Education />}
              {/*<Computer />*/}
              {/*<Portfolio />*/}
              <Footer />
          </div>
      </div>
    );
}

export default App;
