import React from 'react';


const OurStaffDetail = ({service}) => {
    return (
        <div className="col-md-4">
            <img style={{ height: '150px', borderRadius: '10px' }} src={service.img} alt="" />
            <h5 style={{fontFamily:'cursive'}}className="mt-3 mb-3" >{service.title}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ea.</p>
        </div>
    );
};

export default OurStaffDetail;
