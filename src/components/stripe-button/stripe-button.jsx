import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51KviCdLsdYmyw7KMyXM5NrYyDmPxwkemmyvbdAK3fPI30jnbFipa1qsCyAkdvZHteZzclr74G4Yfjfn6QQX4GycE00iYrRmM60';
	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="Fling Clothing"
			billingAddress
			shippingAddress
			image="http://svgshare.com/i/CUz.svg"
			description={`your total price is R${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
