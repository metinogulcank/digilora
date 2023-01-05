import React from 'react'
import About from '../Components/About/About'
import Hero from '../Components/Hero/Hero'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import Services from '../Components/Service/Services'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
