import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Headersocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/keshav-kumar-corder' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/keshav-fixed-404' target='_blank'><FaGithub/></a>
        <a href='https://instagram.com/officialkeshavkumar' target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default Headersocial