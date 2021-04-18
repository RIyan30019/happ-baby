import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';


const stripePromise = loadStripe('pk_test_51IeMKiE9EVeWvDaQtqUIpg4YvuBtH5LuTo6xqKhS6N4cJ4XoGcMxNZVbQWvLjIpSlFwzmlVPzkMtvnBsekRTmEso00TuUGMtfB');


const PaymentProcess = () => {

    return (
        <Elements stripe={stripePromise}>
           <SimpleCardForm></SimpleCardForm>
        </Elements>
    );

};

export default PaymentProcess;