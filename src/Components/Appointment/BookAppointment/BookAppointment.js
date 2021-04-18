import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookAppointment = ({date}) => {
  
    const bookingData = [
       {
  id:1,
typeOfSpecialist:"Baby Sitting",
  time: "one year",
  seatNumber: 5
},
{
id:2,
 typeOfSpecialist:"Maternity Service",
time:" 9 months",
seatNumber:2
},
{   id:3,
   typeOfSpecialist:"Child Care",
    time:"6 months",
    seatNumber:3
},
{
    id:4,
   typeOfSpecialist:"Baby Shower",
    time:"1 day",
    seatNumber:4
},
{
    id:5,
   typeOfSpecialist:"Delivery facilities",
    time:"one week",
    seatNumber:5
},
{"id":6,
   typeOfSpecialist:"Special Child Care",
    time:"6 months",
    seatNumber:6
    }
]
    return (
        <div className="row">
            <h2 className="text-center text-brand">Available Appointments on {date.toDateString()}</h2>
            {
                bookingData.map(booking => <BookingCard booking={booking} date={date} key="booking.id" > </BookingCard>)
            }
        </div>
    );
};

export default BookAppointment;