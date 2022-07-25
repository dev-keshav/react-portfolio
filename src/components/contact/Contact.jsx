import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { MdOutlineEmail } from 'react-icons/md';
import {BsInstagram} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tu47avl', 'template_ww8lxwa', form.current, 'R-9LX7vqdoddMAdGX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>keshavkumar9431@gmail.com</h5>
            <a href="mailto:keshavkumar9431@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>officialkeshavkumar</h5>
            <a href="https://instagram.com/officialkeshavkumar" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whats App</h4>
            <h5>Whats App No.</h5>
            <a href="whatsapp://send?text=hello&phone=+918757506839" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Full Name" name="user_name" required />
          <input type="text" placeholder="Your Email" name="user_email" required/>
          <textarea placeholder="Your message" rows="7" name="message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form> */}

        <form ref={form} onSubmit={sendEmail}>
          <input className='input-data' type='text' name='name' placeholder='Your Full Name' required />   
          <input className='input-data' type='email' name='email' placeholder='Your Email' required />
          <textarea className='input-data' name='message' rows='7' placeholder='Your Messege' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Messege</button>
        </form>
      </div>

    </section>
  )
}

export default Contact

