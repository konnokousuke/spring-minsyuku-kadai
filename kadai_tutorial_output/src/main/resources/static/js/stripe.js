const stripe = Stripe('pk_test_51PFcfaP8kPlKAx7ZDhIcs43KSKvKENrCz687i74ieazSDnFblHzTyJDtbw4xx6F7ooulOTBLxX8KDv7oYohcte9Z00hehMzDMU');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
	stripe.redirectToCheckout({
		sessionId: sessionId
	})
});