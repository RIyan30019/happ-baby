import React from 'react';
import { useForm } from "react-hook-form";

const Review = () => {

    const { register, handleSubmit,  errors } = useForm();
   
    const onSubmit = data =>{
        console.log(data);
        fetch('http://localhost:5000/clientReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if(res){
                alert('review created successfully')
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}

                </div>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="description" placeholder="Your Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}

                </div>
              

                <div className="form-group text-center">
                    <button type="submit" className="btn btn-brand   mt-3">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Review;