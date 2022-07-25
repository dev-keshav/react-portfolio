import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Expense Tracker -- Web App',
    github: 'https://github.com/keshav-fixed-404/XpenseTracker',
    demo: 'https://xpensestracker.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Sorting Visualizer',
    github: 'https://github.com/keshav-fixed-404/sorting.visualizer',
    demo: 'https://javascriptvisualizer.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Chrome Extension which generates random quotes',
    github: 'https://github.com/keshav-fixed-404/extension-for-quotes',
    demo: 'https://github.com/keshav-fixed-404/extension-for-quotes'
  },
  {
    id: 4,
    image: IMG4,
    title: 'First Portfolio Website',
    github: 'https://github.com/keshav-fixed-404/portfolio',
    demo: 'https://keshavkumarportfolio.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'NodeJs sign-in page',
    github: 'https://github.com/keshav-fixed-404/nodejs-sign-in-page',
    demo: 'https://github.com/keshav-fixed-404/nodejs-sign-in-page'
  },
  {
    id: 6,
    image: IMG6,
    title: 'IBM Calculator',
    github: 'https://github.com/keshav-fixed-404/BMI-Calculator',
    demo: 'https://bmi-calculati.netlify.app/'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio