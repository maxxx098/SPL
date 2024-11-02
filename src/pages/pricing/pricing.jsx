import React from 'react'
import './pricing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Pricing = () => {
  return (
    <section className="pricing_section">
     <h3 className='h-3_title'>Pricing Plan</h3>
     <h2 className='services_paragraph'>Find the best way for you 
    </h2>
      <div className="wrapper">
        <div className="card">
            <h3>Intro</h3>
            <h1>$19 <span>/Month</span></h1>
            <p>For Most Buisness that want to optimize their web queries.</p>
            <ul>
            <li><FontAwesomeIcon className='fontawesome' icon={faSquareCheck} /> All limited links</li>
            <li><FontAwesomeIcon className='fontawesome'  icon={faSquareCheck} /> Own Analytics Platform</li>
            <li><FontAwesomeIcon className='fontawesome' icon={faSquareCheck} /> Chat Support</li>
            <li><FontAwesomeIcon className='fontawesome' icon={faSquareCheck} /> Optimize Hashtags</li>
            <li><FontAwesomeIcon className='fontawesome' icon={faSquareCheck} /> Unlimited Users</li>
            
            </ul>
            <a href="/">Choose Plan</a>

        </div>
        <div className="card ">
            <h3>Popular</h3>
            <h1>$40 <span>/Month</span></h1>
            <p>For Most Buisness that want to optimize their web queries.</p>
            <ul>
            <li><FontAwesomeIcon className='fontawesome' icon={faSquareCheck} /> All limited links</li>
            <li><FontAwesomeIcon className='fontawesome'  icon={faSquareCheck} /> Own Analytics Platform</li>
            <li><FontAwesomeIcon className='fontawesome' icon={faSquareCheck} /> Chat Support</li>
            <li><FontAwesomeIcon className='fontawesome' icon={faSquareCheck} /> Optimize Hashtags</li>
            <li><FontAwesomeIcon className='fontawesome' icon={faSquareCheck} /> Unlimited Users</li>
            </ul>
            <a href="/">Choose Plan</a>

        </div>


        <div className="card">
            <h3>Premium</h3>
            <h1>$100 <span>/Month</span></h1>
            <p>For Most Buisness that want to optimize their web queries.</p>
            <ul>
            <li><FontAwesomeIcon className='fontawesome' icon={faSquareCheck} /> All limited links</li>
            <li><FontAwesomeIcon className='fontawesome'  icon={faSquareCheck} /> Own Analytics Platform</li>
            <li><FontAwesomeIcon className='fontawesome' icon={faSquareCheck} /> Chat Support</li>
            <li><FontAwesomeIcon className='fontawesome' icon={faSquareCheck} /> Optimize Hashtags</li>
            <li><FontAwesomeIcon className='fontawesome' icon={faSquareCheck} /> Unlimited Users</li>
            </ul>
            <a href="/">Choose Plan</a>

        </div>
    </div>
    </section>
  );
};

export default Pricing;
