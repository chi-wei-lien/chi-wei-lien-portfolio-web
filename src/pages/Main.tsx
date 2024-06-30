import { Route, Routes } from 'react-router-dom'

import About from '../about/About'
import Blog from '../blogs/Blog'
import Blogs from '../blogs/Blogs'
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
          <Route path='/blogs' element={<Blogs />} />
          <Route
            path='/blog/python_cheat_sheet'
            element={<Blog fileName='/content/blogs/python_cheat_sheet.md' />}
          />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default Main
