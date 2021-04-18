import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
// import wilson from '../../../images/wilson.jpg';
// import ema from '../../../images/ema.jpg';
// import eliza from '../../../images/eliza.jpg';

// const testimonialData = [
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Wilson Harry',
//         from : 'California',
//         img : wilson
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Ema Gomez',
//         from : 'California',
//         img : ema
//     },
//     {
//         quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name : 'Eliza Farari',
//         from : 'California',
//         img : eliza
//     }
// ]

const Testimonials = () => {
    const [review,setReview]=useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/getClientReview')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    console.log(review);
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Client <br/> Says </h1>
               </div>
               <div className="card-deck mt-5 row align-center">
                    {
                        review.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;