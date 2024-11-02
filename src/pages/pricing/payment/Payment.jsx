import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Payment.css';

const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY'); // Replace with your actual key

const Payment = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment('YOUR_CLIENT_SECRET', {
      payment_method: {
        card: cardElement,
      },
    });

    if (error) {
      setError(error.message);
      setSuccess(false);
    } else {
      setSuccess(true);
      setError(null);
      console.log('Payment successful:', paymentIntent);
      // Optionally, you can handle post-payment logic here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      {error && <div className="error">{error}</div>}
      {success && <div className="success">Payment successful!</div>}
      <button type="submit" disabled={!stripe}>Pay ${amount}</button>
    </form>
  );
};

export default Payment;
