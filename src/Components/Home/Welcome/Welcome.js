import React from 'react';
import welcomeImg from '../../../images/welcome.jpg';

const Welcome = () => {
    return (
        <main style={{height:'600px'}}className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">

                <h1 style={{color:'#3a4256'}}>Welcome to  <br/> NANNY  and BABY sitting agency</h1>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, ipsam odio? Dolores asperiores obcaecati at!</p>
                <button className="btn btn-brand">Learn More</button>
            </div>
            <div className=" welcomeImg col-md-6">
              
              <img src={welcomeImg} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default Welcome;