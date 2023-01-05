import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs.sendForm('service_hhkqizr', 'template_9o1ummn', form.current, 'ObHzB9pMfiis7Pt-s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className='contact section' id='contact'>
        <h2 className='section_title'>Contact Us</h2>

        <div className='contact_container container grid'>
            <div className='contact_content'>
                <h3 className='contact_title'>Contact With Us</h3>

                <div className='contact_info'>
                    <div className='contact_card'>
                        <i className='bx bxl-whatsapp contact_card-icon'></i>
                        <h3 className='contact_card-title'>Whatsapp</h3>
                        <span className='contact_card-data'>0 555 064 81 80</span>
                    </div>
                    <div className='contact_card'>
                        <i className='bx bx-envelope contact_card-icon'></i>

                        <h3 className='contact_card-title'>Email</h3>
                        <span className='contact_card-data'>metinogulcank06@gmail.com </span>
                        <a href='mailto:metinogulcank06@gmail.com' className='contact_button'>
                             Contact
                            <i className='bx bx-right-arrow-alt contact_button-alt'></i>
                        </a>
                    </div>
                    
                </div> 
            </div>
            <div className='contact_content'>
                <h3 className='contact_title'>Write Your Project</h3>

                <form ref={form} onSubmit={sendEmail} className='contact_form'>
                    <div className='contact_form-div'>
                        <label className='contact_form-tag'>Name</label>
                        <input type='text' name='name' className='contact_form-input' placeholder='Write Your Name'></input>
                    </div>
                    <div className='contact_form-div'>
                        <label className='contact_form-tag'>Email</label>
                        <input type='email' name='email' className='contact_form-input' placeholder='Write Your Email'></input>
                    </div>
                    <div className='contact_form-div'>
                        <label className='contact_form-tag'>Project</label>
                        <textarea name='project' cols='30' rows='10' className='contact_form-input' placeholder='Write Your Project'></textarea>
                    </div>
                    <button href="#contact" className='btn button-flex'>Send Message</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact