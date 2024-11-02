import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-scroll'
import './nav.css'
import Logo from './assets/png/logo_extra.png'

const nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const test = () => {
   window.open ('https://calendly.com/spldigitalmarketinggroup/15min?month=2024-11', '_blank');
  };
  return (
    
    <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Spl_Logo" />
          <h4 className='logo_letter'>PL <span className='logo_span'>DIGITAL</span></h4>  
        </div>
        <div className="burger-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link className='link' to="about" spy={true} smooth={true} offset={-180} duration={500} >About</Link></li>
            <li><Link className='link' to="services" spy={true} smooth={true} offset={-15} duration={500} >Services</Link></li>
            <li><Link className='link' to="testimonials" spy={true} smooth={true} offset={-150} duration={500} >Testimonials</Link></li>
            <li><Link className='link' to="faqs" spy={true} smooth={true} offset={-30} duration={500} >FAQs</Link></li>
        </ul>
        <div >
       <button onClick={test}  className='button button--flex'>
        Notify me !
       </button>
        </div>
        
    </nav>
    
  )
}

export default nav



