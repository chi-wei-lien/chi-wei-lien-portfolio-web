import { Route, Routes } from 'react-router-dom'

import About from '../about/About'
import Education from '../education/Education'
import Experience from '../experience/Experience'
import Footer from '../footer/Footer'
import Hero from '../hero/Hero'
import Navbar from '../navbar/Navbar'
import Publications from '../publications/Publications'
import Skills from '../skills/Skills'

const Main = () => {
  return (
    <div className='font-roboto-mono'>
      <div className='h-screen overflow-scroll no-scrollbar animate-fade scroll-smooth'>
        <Hero />
        <Navbar />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default Main
