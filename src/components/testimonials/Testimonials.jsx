// import React from 'react'
// import './testimonials.css';
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR1 from '../../assets/avatar1.jpg'
// import AVTR1 from '../../assets/avatar1.jpg'

// const Testimonials = () => {
//   return (
//     <section id='testimonials'>
//       <h5>Review form clients</h5>
//       <h2>Testimonials</h2>

//       <div className="container testimonials__container">
//         <article className="testimonial">
//           <div className="client__avatar">
//             <img src='' alt='' />
//           </div>
//         </article>
//       </div>
//     </section>
//   )
// }

// export default Testimonials





import { BsLinkedin } from 'react-icons/bs';
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./testimonials.css";

// import required modules
import { Pagination } from "swiper";



const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/',
      name: 'Uzair Ali',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux. Improving open-source projects, one commit at a time.',
      test: 'I worked with him in the same team and her leadership skills are very strong. His programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he\'s a good team worker, but also because she has very good skills and I know she has much more potential to be shown.',
    
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/',
      name: 'Yishak Wesego',
      role: 'Full-stack developer | Technical Support Engineer at Microverse',
      test: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      link: 'https://www.linkedin.com/',
      name: 'akbar (Aku) Khan',
      role: 'Full Stack Developer| Ruby on Rails | PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: 'I worked with him in the same team and his leadership skills are very strong. His programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he\'s a good team worker, but also because he has very good skills and I know he has much more potential to be shown.',
    },
    {
      id: 4,
      link: 'https://www.linkedin.com/',
      name: 'Isai Céspedes',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux.',
      test: "I mentored him some months ago, and I can say that he is one of those people that you love to work with. He was always interested in what I was trying to teach her, paying attention and always asking questions if something was not clear. When it comes to professional skills, He is really committed to work, always doing his best and going beyond the requirements of the project he's building.",
    },
    {
      id: 5,
      link: 'https://www.linkedin.com/',
      name: 'Hamza Tarar',
      role: 'Software Developer',
      test: "Throughout all our collaborations, He has always conducted hiself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of herself. But beneath this, I see a strength and determination to distinguish himself. He's not only someone I highly recommend but is also someone I greatly respect.",
    },
  ];
  return (
    <section id="testimonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials