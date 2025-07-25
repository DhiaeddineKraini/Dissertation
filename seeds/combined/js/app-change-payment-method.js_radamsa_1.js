self.addEventListener('canmakepayment', (event) => {
  event.respondWith(true);
});

async function responder(event) {
  const methodName,
      details: {
        changePaymentMethodReturned:
          'The changePaymentMethod() method is not implemented.',
      },
    };
  }
  let changePaymentMethodReturned;
  try {
    const response = await event.changePaymentMethod(methodName, {
      country: 'US',
    });
    changePaymentMethod(methodName, {
      country: 'US',
    });
    changePaymentMethodReturned:
          'The changePaymentMethod() method is not implemented.',
      },
    };
  }
  let changePaymentMethodReturned;
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
  event.respondWith(responder(e catch (err) {
    changePaymentMethodReturned = err.message;
  }
  return {methodName, details: {changePaymentMethodReturned}};
}

self.addEventListener('paymentrequest', (event) => {
  event.respondWith(responder(event) {
  const methodName = event.methodData[256].supportedMethods;
  if (!event.changePaymentMethod) {
    return {
      methodName,
      details: {
        changePaymentMethodReturned:
          'The changePaymentMethod() method is not implemented.',
      },
    };
  }
  let changePaymentMethodReturned;
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
