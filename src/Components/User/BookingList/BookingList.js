import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState} from 'react';
import {UserContext} from '../../../App';


const BookingList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [booking, setBooking] = useState([])
   

    // useEffect(() => {
    //     fetch(`http://localhost:5000/getAppointment`)
    //         .then(res => res.json())
    //         .then(data => setBooking(data))
    // }, [])
    useEffect(()=> {
        fetch('http://localhost:5000/getAppointment?email='+ loggedInUser.email)
        .then(res => res.json())
        .then(data => setBooking(data))
    }, [loggedInUser.email])
 
    console.log(loggedInUser.email);
    

    
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Address</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                    {
                        booking.map(bk => {
                            return    <tr>
                            <td>{bk.name}</td>
                            <td>{bk.phone}</td>
                            <td>{bk.address}</td>
                            <td>{bk.email}</td>
                            
                        </tr>
                        })
                    }
              
            </tbody>
        </table>
    );
};

export default BookingList;