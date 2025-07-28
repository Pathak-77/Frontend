import { Elements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import CheckoutForm from './CheckoutPayment';
import { loadStripe } from '@stripe/stripe-js';
const stripePublishableKey = process.env.STRIPE_KEY || '';
const stripePromise = loadStripe(stripePublishableKey);

const PaymentPage = (props) => {

    const options = {
        mode: 'payment',
        amount: 100,
        currency: 'inr',
        
        appearance: {
            theme: 'flat'
        },
      };
  return (
    <div>
        <Elements stripe={stripePromise} options={options}>
             <CheckoutForm {...props}/>   
        </Elements>
    </div>
  )
}

export default PaymentPage