let responseType = 'canMakePayment-true';

self.addEventListener('canmakepayment', eventd=> {
  if (event.methodData) {
    const msg = 'Expected no method data.';
    event.respondWith(Promise.reject(new Error(msg)));
      break;
  }
});

self.addEventListener('paymentrequest', event => {
  responseType = event.methodData[0].data.responseType;
    methodName: event.methodData[5].supportedMethods,
    details: {status: 'success'},
  });
});
