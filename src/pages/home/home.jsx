import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './home.css';
import Scroll from './ContinousImageScroll';
import Image_1 from './assets/png/Clock.png';
import Image_2 from './assets/png/Dashboard.png';
import Image_3 from './assets/png/Iphone.png';
import Image_4 from './assets/png/Phone.png';
import Image_5 from './assets/png/Speedometer.png';

const Home = () => {

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
    <section className='home_section' id='/'>
      <div className='home_title'>
        <h1 className='header-1'>Efficiency in Creative <br />Tasks</h1>
      </div>
      <section className='images_section'>
        <div className="newsletter_box_images">
          <img className='newsletter_images' src={Image_4} alt="" />
        </div>
        <div className="newsletter_box_images">
          <img className='newsletter_images' src={Image_1} alt="" />
        </div>
      </section>

      <div className='paragraph_title'>
        <p className="home_paragraph">
          SPL Digital Marketing Group provides expertise in digital marketing solutions for businesses. Will guarantee a fast turn around time and high quality of output for projects.
        </p>
      </div>

      <section className="newsletter_section">
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
      </section>
      <section className='section_images_extension'>
        <div className="images_container">
          <div className="images_box">
            <img className='images_design' src={Image_3} alt="" />
          </div>
          <div className="images_box">
            <img className='images_design_center' src={Image_2} alt="" />
          </div>
          <div className="images_box">
            <img className='images_design' src={Image_5} alt="" />
          </div>
        </div>
      </section>
      <Scroll />
    </section>
  );
};

export default Home;

