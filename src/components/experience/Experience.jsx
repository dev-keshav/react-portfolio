import React from 'react';
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs'


export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
            <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Redux</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Back-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>MongoDb</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Firebase</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Swagger</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>RSpec</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article> */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>Git/GitHub</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience