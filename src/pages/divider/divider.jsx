import React from 'react'
import './divider.css'
import Abstract from './assets/svg/abstract.svg'
import Star from './assets/svg/star.svg'
const divider = () => {

  return (
    <section className='divider_section'>
        <div className='divider'></div>
        <section className='divider_box'>
            <div className="box_divider">
               <img src={Abstract} alt="" />
               <p>"Creative, innovative and strategic. We have great achievements made together and looking to more"</p>
               <div className='divider_star'>
                <img className='star' src={Star} alt="" />
               </div>
               <p>Henry Arthur</p>
               <span className='divider_span'>Head of Engineering, Loom</span>
            </div>
            <div className="box_divider">
            <img src={Abstract} alt="" />
            <p>"Creative, innovative and strategic. We have great achievements made together and looking to more"</p>
            <div className='divider_star'>
                <img className='star' src={Star} alt="" />
               </div>
               <p>Henry Arthur</p>
               <span className='divider_span'>Head of Engineering, Loom</span>
            </div>
            <div className="box_divider">
            <img src={Abstract} alt="" />
            <p>"Creative, innovative and strategic. We have great achievements made together and looking to more"</p>
            <div className='divider_star'>
                <img className='star' src={Star} alt="" />
               </div>
               <p>Henry Arthur</p>
               <span className='divider_span'>Head of Engineering, Loom</span>
            </div>
        </section>
        <div className='divider'></div>
    </section>
  )
}

export default divider