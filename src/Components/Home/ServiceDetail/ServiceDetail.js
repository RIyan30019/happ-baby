import React from 'react';

const ServiceDetail = ({service}) => {
    console.log(service);
    return (
        <div className="col-md-4 text-center">
            <img style={{height: '150px',borderRadius:'10px'}} src={service.image} alt=""/>
            <h5 className="mt-3 mb-3" >{service.name}</h5>
            <h5 className="mt-3 mb-3" >{service.description}</h5>
           
        </div>
    );
};

export default ServiceDetail;