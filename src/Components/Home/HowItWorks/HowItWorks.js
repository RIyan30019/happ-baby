import React from 'react';
import pacifier from '../../../images/pacifier.png';
import baby from '../../../images/baby-boy.png';
import play from '../../../images/playtime.png';
import star from '../../../images/star.png'

import HowItWorksDetail from '../HowItWorksDetail/HowItWorksDetail';

const serviceData = [
    {
        title: 'Baby Sitting',
        img: baby
    },
    {
        title: 'Nanny Service',
        img: play
    },

    {
        title: 'Maternity Service',
        img:pacifier
    },
    {
        title: 'Maternity Service',
        img:star
    }
]
const HowItWorks = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center ">
                <h5 style={{ color:'pink',fontSize:'50px' }}>How it works</h5>
               
            </div>
            <div className="d-flex justify-content-center ">
                <div className="w-75 row ">
                    {
                          serviceData.map(works => <HowItWorksDetail works={works}></HowItWorksDetail>)
                    }
                   
                </div>
                
            </div>
        </section>
    );
};

export default HowItWorks;