import { Route, Routes } from 'react-router-dom'

import Hero from '../hero/Hero'
import About from '../about/About'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Education from '../education/Education'
import Publication from '../publication/Publication'

const Main = () => {
  return (
    <div className='font-roboto-mono'>
      <div className='h-screen overflow-scroll no-scrollbar animate-fade scroll-smooth'>
        <Hero />
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/publication" element={<Publication />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default Main
