import { useLocation } from 'react-router-dom'

import Hero from '../hero/Hero'
import About from '../about/About'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Education from '../education/Education'
import Publication from '../publication/Publication'

const Main = () => {
  const location = useLocation()

  return (
    <div className='font-roboto-mono'>
      <div className='h-screen overflow-scroll no-scrollbar animate-fade scroll-smooth'>
        <Hero />
        <Navbar />
        {(location.pathname === '/about' || location.pathname === '/') && <About />}
        {location.pathname === '/education' && <Education />}
        {location.pathname === '/publication' && <Publication />}
        <Footer />
      </div>
    </div>
  )
}

export default Main
