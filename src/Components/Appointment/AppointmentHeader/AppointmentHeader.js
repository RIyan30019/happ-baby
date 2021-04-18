import React from 'react';
import chair from '../../../images/header.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentHeader.css';


const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center header-container">
            <div className="col-md-4 offset-md-1">

                <h1 style={{ color: 'white',fontFamily:'cursive' }}> Date for booking </h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />

            </div>
            <div className="col-md-6 text-brand">

                    <h1>Book a NANNY and <br/> Make your Day</h1>
                
            </div>

        </main>
    );
};

export default AppointmentHeader;