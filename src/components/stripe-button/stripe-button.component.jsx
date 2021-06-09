import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51J0MNmKzWetS0rOLUUKX4Ein4hC3Dn9EpVI0fP3vq4h4orVmR5qScipQh8mXDS6MM2ZFL6GklgMZidXSRh26OTaY00iVqEDiCn'

    const onToken = token => {
        console.log(token);
        alert('Payment Success');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        /> 
    )
}

export default StripeCheckoutButton;