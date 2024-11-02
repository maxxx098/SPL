import React from 'react'
import './testiimonials.css'
import Story from './assets/png/testimonial.png'
import Arrow from './assets/svg/arrow-forward-circle-outline.svg'
import Play from './assets/svg/play.svg'
const testimonials = () => {
  return (
    <section className='testimonial_section' id='testimonials'>
          <section className='testimonial_section_repeat'>
          <div className='testimonial_box'>
          <h3 className='testimonial_header-3'>Cutomer Story</h3>
          <h2 className='testimonial_paragraph'>“Our growth no longer necessitates the recruitment and education of additional design professionals”</h2>
          <div className='testimonial_button'>
            <span className='testimonial_span'>Read the story</span>
            <img className='testimonial_icon' src={Arrow} alt="" />
          </div>
          </div>
          <div className='testimonial_box_image'>
            <img className='testimonial_play' src={Play} alt="" />
            <img  src={Story} alt="Story_testimonial" />
          </div>
          </section>
    </section>
  )
}

export default testimonials