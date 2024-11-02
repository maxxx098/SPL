import React from 'react'
import './footer.css'
import FooterLogo from './assets/png/logo_extra.png'

const footer = () => {
  return (
    <footer className="footer_section">
      <div className="footer_container">
          <div className="logo_container">
            <img className='logo_box' src={FooterLogo} alt="Logo" />
          </div>
          <div className="footer_nav">
            <ul className='footer_links'>Contact</ul>
            <ul className='footer_links'>Privacy & Cookie Policy</ul>
            <ul className='footer_links'>Terms & Conditions</ul>
          </div>
          <div className="footer_author">
            <p className="author">Made with love by <span className='author_span'>Symon Falcatan</span></p>
          </div>
      </div>
    </footer>
  )
}

export default footer
