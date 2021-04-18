import React, { useEffect } from 'react';
import { useState } from 'react';


import service3 from '../../../images/service1.jpg';
import service1 from '../../../images/service2.jpg';
import service2 from '../../../images/service3.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';



// const serviceData = [
//     {
//         title: 'Baby Sitting',
//         img: service1
//     },
//     {
//         title: 'Nanny Service',
//         img: service2
//     },

//     {
//         title: 'Maternity Service',
//         img:service3
//     }
// ]

const Service = () => {
    const [service, setService]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/getAddService')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color:'pink',fontSize:'50px' }}>OUR SERVICES</h5>
                <h2>Services we provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row  pt-5">
                    {
                          service.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                    <button className="btn btn-brand">Learn more</button>
                </div>
                
            </div>
        </section>
    );
};

export default Service;