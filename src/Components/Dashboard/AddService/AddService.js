import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';

const AddService = () => {
    const { register, handleSubmit,  errors } = useForm();
    const [image,setImage]=useState(null);
    const onSubmit = data => {

       
        const newService = {
            serviceName: data.name,
            description: data.description,
           
            image: image,
        }
         console.log(newService)

        fetch('http://localhost:5000/addService', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
    }
    console.log(image);


    const imageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '23f83412b5397b68685711f8d211d14f');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImage(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
             <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}

                </div>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="description" placeholder="Service Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}

                </div>
                <div className="form-group">
                    <input type="file" onChange={imageUpload} name="image" placeholder="image" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}

                </div>
              

                <div className="form-group text-center">
                    <button type="submit" className="btn btn-brand   mt-3">Submit</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default AddService;