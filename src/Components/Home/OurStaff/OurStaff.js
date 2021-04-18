import React from 'react';
import nanny3 from '../../../images/ema.jpg';
import nanny1 from '../../../images/nanny1.jpg';
import nanny2 from '../../../images/nanny3.jpg';
import OurStaffDetail from '../OurStaffDetail/OurStaffDetail';
import './OurStaff.css';


const ourStaff = [
    {
        title: 'Jane Mathews',
        img: nanny1
    },
    {
        title: 'Anna Marie',
        img: nanny2
    },

    {
        title: 'Ariana Grande',
        img:nanny3
    }
]
const OurStaff = () => {
    return (
        <section className="services-container mt-5 background">
            <div className="text-center">
                <h5 className="mt-3" style={{fontSize:'50px',color:'white', fontFamily:"cursive"}}>OUR EXCELLENT STAFF</h5>
                <h2 style={{fontWeight:'50px',fontFamily:"cursive"}}>Meet your babysitter</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row pt-5">
                    {
                          ourStaff.map(service => <OurStaffDetail service={service}></OurStaffDetail>)
                    }
                  
                </div>
                
            </div>
        </section>
    );
};

export default OurStaff;