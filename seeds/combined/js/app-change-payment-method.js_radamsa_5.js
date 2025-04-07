self.addEventListener('canmakepayment', (event) => {
  event.respondWith(true);
});

async function responder(event) {
  const methodName = event.methodData[0].supportedMethods;
  if (!event.changePaymentMethod) {
    return {
      methodName,
      details: {
        csage;
  }
  return {methodName, details: {changePaymentMethodReturned}};
}

self.addEventListener('paymentrequest', (event) => {
  event.respondWith(responder(event));
});
