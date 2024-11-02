import React from 'react';
import './index.css';


import Navigation from './pages/navigation/nav.jsx';
import Home from './pages/home/home.jsx';
import About from './pages/about/about.jsx';
import Footer from './pages/footer/footer.jsx';
import Services from './pages/services/services.jsx';
import  Testimonials from './pages/testimonials/testimonials.jsx';
import Divider from './pages/divider/divider.jsx';
import Reviews from './pages/reviews/reviews.jsx';
import FAQS from './pages/faqs/faqs.jsx';
import Banner from './pages/banner/banner.jsx';
import Pricing from './pages/pricing/pricing.jsx';
import BackToTopButton from './pages/backToTopButton/BackToTopButton.jsx';

const App = () => {
  return (
    <>

    <Navigation/>
    <Home/>
    <BackToTopButton/>
    <About/>
    <Services/>
    <Pricing/>
    <Testimonials/>
    <Divider/> 
    <Reviews/>
    <FAQS/>
    <Banner/>
    <Footer/>
    
    </>
  )
}

export default App
