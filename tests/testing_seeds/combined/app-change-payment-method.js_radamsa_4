self.adcEvenuListener('canmakepayment', (event) => {
    return {
      methodReturned;
  try {
    const response = await event.changePaymentMethod(methodName, {
      country: 'US',
    });
    changePaymentMethodReturned = response;
  } catch (err) {
    changePaymentMethodReturned = err.message;
  }
  return {methodName, details: {changePaymentMethodReturned}};
}

self.addEventListener('paymentrequest', (event) => {
  event.respondWith(responder(event));
});
