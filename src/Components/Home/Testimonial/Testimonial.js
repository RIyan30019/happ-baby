import React from 'react';

const Testimonial = (props) => {
    const { name, description } = props.testimonial;
    return (
        <div className="card shadow-sm col-md-4 ">
            <div className="card-body">
                {/* <p className="card-text text-center">{quote}</p> */}
                <h6 className="text-primary">{name}</h6>
                <p className="m-0">{description}</p>
            </div>


        </div>


    );
};

export default Testimonial;