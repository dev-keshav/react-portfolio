import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import { BsAwardFill } from 'react-icons/bs'
import { BiUserPlus } from 'react-icons/bi'
import { AiFillProject } from 'react-icons/ai'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          <div className="about__cards">
            <article className='about__card'>
              <BsAwardFill className='about__icon' />
              <h5>Experence</h5>
              <small>B.Tech (CSE) Fresher</small>
            </article>

            <article className='about__card'>
              <BiUserPlus className='about__icon' />
              <h5>Clints</h5>
              <small>500+ Connections</small>
            </article>

            <article className='about__card'>
              <AiFillProject className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
          A passionate developer having an experience in Web Development and want to develop sustainable and scalable social and technical systems to create impact. You can check all my projects on github. Building fully responsive and optimal website using HTML, CSS, ReactJS, NodeJS . As of now I am making APIs and also working on databases and very excited to explore Django, Flask and many more in near future.
As I know Data Structure and Algorithms are the heart of programming, so I love to solve programming questions in different competitive websites like codechef, hackerrank, GFG and many more.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>

  )
}

export default About