import React from 'react'
import './services.css'
import Growth from './assets/png/growth.png'
import Design from './assets/png/design.png'
import Scalable from './assets/png/scallable.png'
import Cube from './assets/svg/cube-outline.svg'
import Services_Extension from './services_extension'

const services = () => {
  return (
    <section className='services_container' id='services'>
        <div className='services_box'>
           <h3 className='h-3_title'>What you'll get</h3>
           <h2 className='services_paragraph'>We resolve problems associated with <br />
           creative procedures.</h2>
        </div>

        <section className='section_images'>
          <div className="services_images">
            <div className="services_content">
                <img className='services_content_image' src={Growth} alt="" />
            </div>
            <div className='services_sub-content'>
            <h3 className='section_header-3'>Cost Effective Solution</h3>
            <p  className='section_paragraph' >Get high-quality design work at a <br /> fraction of the cost.</p>
            </div>
          </div>
          <div className="services_images">
           <div className="services_content">
           <img className='services_content_image' src={Design} alt="" />
            </div>
            <div className='services_sub-content'>
            <h3 className='section_header-3'>Cost Effective Solution</h3>
            <p  className='section_paragraph' >Get high-quality design work at a <br /> fraction of the cost.</p>
            </div>
          </div>
          <div className="services_images">
           <div className="services_content">
           <img className='services_content_image' src={Scalable} alt="" />
           </div>
           <div className='services_sub-content'>
            <h3 className='section_header-3'>Cost Effective Solution</h3>
            <p  className='section_paragraph' >Get high-quality design work at a <br /> fraction of the cost.</p>
            </div>
          </div>
        </section>

        <section className='box'>
       <div className='box_content'>
          <div className='box_image'>
          
          </div>
       </div>
       <div className='box_content'>
          <div className='box_image'>
          
          </div>
       </div>
        </section>

        <section className='box_box'>
            <div className='box_icon_content'>
              <div className="box_icon">
                 <img className='icon' src={Cube} alt="" />
                 <p className='icon_paragraph'>Web Development</p>
              </div>
            </div>
            <div className='box_icon_content'>
            <div className="box_icon">
                 <img className='icon' src={Cube} alt="" />
                 <p className='icon_paragraph'>Web Development</p>
              </div>
            </div>
            <div className='box_icon_content'>
            <div className="box_icon">
                 <img className='icon' src={Cube} alt="" />
                 <p className='icon_paragraph'>Web Development</p>
              </div>
            </div>
            <div className='box_icon_content'>
            <div className="box_icon">
                 <img className='icon' src={Cube} alt="" />
                 <p className='icon_paragraph'>Web Development</p>
              </div>
            </div>
            
        </section>
        <section className='box_box'>
        <div className='box_icon_content'>
              <div className="box_icon">
                 <img className='icon' src={Cube} alt="" />
                 <p className='icon_paragraph'>Web Development</p>
              </div>
            </div>
            <div className='box_icon_content'>
              <div className="box_icon">
                 <img className='icon' src={Cube} alt="" />
                 <p className='icon_paragraph'>Web Development</p>
              </div>
            </div>
            <div className='box_icon_content'>
              <div className="box_icon">
                 <img className='icon' src={Cube} alt="" />
                 <p className='icon_paragraph'>Web Development</p>
              </div>
            </div>
        </section>

        <Services_Extension/>
    </section>
  )
}

export default services
