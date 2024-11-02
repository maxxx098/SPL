import React from 'react'
import './reviews.css'

const reviews = () => {
  return (
    <section className='review_section'>
      <div className="review_container">
        <div className="review_box">
            <h1 className='review_box_header-1'>45+</h1>
            <p className="review_box_paragraph">Happy Customers</p>
        </div>
                {/* Divider */}
        <div className='review_divider'></div>

        <div className="review_box">
           <h1 className='review_box_header-1'>45+</h1>
           <p className="review_box_paragraph">Happy Customers</p>
        </div>
                 {/* Divider */}
        <div className='review_divider'></div>

        <div className="review_box">
           <h1 className='review_box_header-1'>45+</h1>
           <p className="review_box_paragraph">Happy Customers</p>
        </div>
      </div>
    </section>
  )
}

export default reviews