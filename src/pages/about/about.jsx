import React from 'react'
import './about.css'
const about = () => {
  return (
    <section className='about_section' id='about'>
       <div className='about_box container grid'>
        <h3 className='h-3_title'>INTRUDUCING OUR COMPANY</h3>
        <h1 className='about_paragraph'><span className='about_span'>We know what’s going on.</span> You need <br />
         top-notch design to stand out in the <br />
          tech world, but hiring in-house <br />
          designers can be costly and <br />
           time-consuming. <br />
           <span className='about_span'>
           That’s when Atomic comes in.</span>
           </h1>
       </div>
    </section>
  )
}

export default about
