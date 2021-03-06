import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import PaymentProcess from '../PaymentProcess/PaymentProcess';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')
const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn,date }) => {
    const { register, handleSubmit,  errors } = useForm();
    const onSubmit = data => {

        data.service=appointmentOn;
        data.date=date;
        data.created=new Date();
        
        fetch('http://localhost:5000/addAppointment',{
            method:'POST',
            headers:{'content-type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {

              if(success){
                closeModal();
                alert('appointment create successfully');

              }

        } )
        
    }

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-center text-brand">{appointmentOn}</h2>
                <p className="text-center text-secondary">ON {date.toDateString()}</p>
           
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="address" placeholder="Address Detail" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-6">

                            <select className="form-control" name="gender" ref={register({ required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Home service</option>
                                <option value="Female">Day Care</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        {/* <div className="col-6">
                            <input ref={register({ required: true })} className="form-control" name="age" placeholder="Service hr" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div> */}
      
                        <div className="col-6">
                            <input ref={register({ required: true })} className="form-control" name="weight" placeholder="number of kids" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                        <div>
                            <h5 className="text-secondary mt-5">Please pay your amount:</h5>
                            <PaymentProcess></PaymentProcess>
                        </div>


                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-brand   mt-3">Submit</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;