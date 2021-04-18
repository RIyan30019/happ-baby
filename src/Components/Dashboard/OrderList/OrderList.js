import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const OrderList = () => {
   
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [booking, setBooking] = useState([])
    console.log(loggedInUser);
    
    useEffect(()=> {
        fetch(`http://localhost:5000/getAppointment`)
        .then(res => res.json())
        .then(data => setBooking(data))
    }, [])

    console.log(booking);
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
                        return <tr>
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

export default OrderList;