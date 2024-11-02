import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './banner.css'
const banner = () => {

  const [message, setMessage] = useState(''); // State to hold the input message

  const handleConnectClick = () => {
    if (!message) {
      toast.error('Please enter your message!');
    } else {
      
      window.open(
        `mailto:symonfalcatan08@gmail.com?subject=SPL Company&body=${encodeURIComponent(message)}`,
        '_blank'
      );
      toast.success('Data has been saved, please wait !');
      setMessage(''); 
    }
  };
  return (
    <section className="banner_section">
        <div className="banner_container">
            <div className="banner_box">
            <h1 className="banner_header-1">
            Elevate the way you <br />
             source design
            </h1>
            <p className="banner_paragraph">
            Get ready to start producing stunning, efficient design <br /> work without the hassles of hiring. Soon available.
            </p>

            <div className="banner_button">
            <div className="newsletter">
          <div className="newsletter_box">
            <input
              required
              type="email"
              placeholder=" Put your message here !"
              className="newsletter_input"
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            />
          </div>
          <div className='newsletter_button'> 
            <button className='button_button button--flex-end' onClick={handleConnectClick}>
              Connect with Us!
            </button>
          </div>
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
            </div>
            <div className="banner_second_buutton">
            <button className='button_button button--flex-end'>
                   Connect with me !
                </button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default banner