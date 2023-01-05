import React from 'react'
const About = () => {
  return (
    <section className="about" style={{
		backgroundImage:"url(https://mediacrew.ie/wp-content/uploads/2022/02/Background1.jpeg)",
	}
		
	}>
		<div className="main" id='about'>
			<div className="about-text">
				<h2>About Us</h2>
				<h5>Social Media<span> Agency </span></h5>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, quis!</p>
				<button type="button" className="button_green">Contact Us</button>
			</div>
		</div>
	</section>
  )
}

export default About
