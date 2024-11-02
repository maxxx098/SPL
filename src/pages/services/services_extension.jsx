import React from 'react'
import './services_extension.css'
import './services.css'
import Loacate from './assets/svg/locate-outline.svg'
import Pricetags from './assets/svg/pricetags-outline.svg'
import Finger from './assets/svg/finger-print-outline.svg'
const services_extension = () => {
  return (
    <section  className='services_extension'>
        <div className='services_box'>
           <h3 className='h-3_title'>How it Works ?</h3>
           <h2 className='services_paragraph'>Top–notch designs, <br />
            delivered at your doorstep.</h2>
        </div>

        <section className='section_images'>
          <div className="service_images">
            <div className="service_content">
                
            <img className='service_icons' src={Pricetags} alt="" />
            </div>
            <div className='services_sub-content'>
            <h3 className='section_header-3'>Cost Effective Solution</h3>
            <p  className='section_paragraph' >Get high-quality design work at a <br /> fraction of the cost.</p>
            </div>
          </div>
          <div className="service_images">
           <div className="service_content">
           <img className='service_icons'  src={Loacate} alt="" />

            </div>
            <div className='services_sub-content'>
            <h3 className='section_header-3'>Cost Effective Solution</h3>
            <p  className='section_paragraph' >Get high-quality design work at a <br /> fraction of the cost.</p>
            </div>
          </div>
          <div className="service_images">
           <div className="service_content">
           <img className='service_icons'  src={Finger} alt="" />

           </div>
           <div className='services_sub-content'>
            <h3 className='section_header-3'>Cost Effective Solution</h3>
            <p  className='section_paragraph' >Get high-quality design work at a <br /> fraction of the cost.</p>
            </div>
          </div>
        </section>
    </section>
  )
}

export default services_extension