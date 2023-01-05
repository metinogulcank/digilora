import React from 'react'

const Hero = () => {
  return (
    <section className="hero" id="hero">
		<nav>
			<h1 className="logo">DIGILORA</h1>
			<ul>
				<li><a href="#hero">Home</a></li>
				<li><a href="#about">About Us</a></li>
				<li><a href="#service">Services</a></li>
				<li><a href="#contact">Contact Us</a></li>
			</ul>
			<a href="#contact" className="btn">Contact Us</a>
		</nav>

		<div className="content">
			
			<h1><span className="colored_text">DIGILORA</span></h1>
			
		</div>
	</section>
  )
}

export default Hero
