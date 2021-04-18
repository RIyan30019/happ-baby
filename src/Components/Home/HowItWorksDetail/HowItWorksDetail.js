import React from 'react';
import './HowItWorks.css';

const HowItWorksDetail = ({works}) => {
    return (
        <div className="col-md-3 text-center works-class">
            <img style={{height: '80px',borderRadius:'10px',padding:'5px'}} src={works.img} alt=""/>
            <h5 className="mt-3 mb-3" >{works.title}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, ea.</p>
        </div>
    );
};

export default HowItWorksDetail;