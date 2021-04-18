import React from 'react';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import Service from '../Service/Service';
import HowItWorks from '../HowItWorks/HowItWorks';
import Footer from '../../Shared/Footer/Footer'

import Testimonials from '../Testimonials/Testimonials';
import OurStaff from '../OurStaff/OurStaff';





const Home = () => {
    return (
        <div>
            <Header></Header>
            <Welcome></Welcome>
            <Service></Service>
            <HowItWorks></HowItWorks>
            <OurStaff></OurStaff>
            <Testimonials></Testimonials>
            <Footer></Footer>
            
           
        </div>
    );
};

export default Home;