import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Keshav Kumar</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/keshav-kumar-coder/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/keshav-fixed-404" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://instagram.com/officialkeshavkumar" target="_blank" rel="noreferrer" ><BsInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer