import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = ({ works }) => {
    return (

        
            <div className="col-md-4 text-center works-class p-5">
                 <img style={{ height: '40px', borderRadius: '10px', padding: '5px' }} src={works.img} alt="" />
                <h2 className="mt-3 mb-3 text-white" >{works.title} </h2>
               <p>{works.time}</p>
               

            </div>
            
           


    );
};

export default FooterCol;