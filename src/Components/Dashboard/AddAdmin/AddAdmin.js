import React from 'react';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
        const makeAdmin = {
            email: data.email
        }

        fetch('http://localhost:5000/makeAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(makeAdmin)
        })
        .then(res => {
            if(res) {
                alert('one admin created');
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="email" ref={register({ required: true })} name="email" placeholder="Your Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}

                </div>

                <div className="form-group text-center">
                    <button type="submit" className="btn btn-brand   mt-3">Submit</button>
                </div>
            </form>
        </div>

    );
};

export default AddAdmin;