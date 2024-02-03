import { Route, Routes } from 'react-router-dom'

import About from '../about/About'
import Blogs from '../blogs/Blogs'
import Education from '../education/Education'
import Footer from '../footer/Footer'
import Hero from '../hero/Hero'
import Navbar from '../navbar/Navbar'
import Publication from '../publication/Publication'
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
          <Route path='/publication' element={<Publication />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default Main
