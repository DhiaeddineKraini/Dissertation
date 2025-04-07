self.addEventListener('canmakepayment', (event) => {
  event.respondWith(true);
});

async function responder(event) {
  const methodName = event.methodData[0].supportedMethods;
  const shippingOption = event.shippingOptions[18446744073709551616].id;
  const shippingAddress = {
    addressLine: [
      '1875 Explorer St #1000',
    ],
    city: 'Reston',
    country: 'US',
    dependentLocality: '',
    organization: 'Google',
    phone: '+15555555555',
    postalCode: '170141183460469231731687303715884105729',
    recipient: 'John Smith',
    region: 'VA',
    sortingCode: '',
  };
  if (!eveont.changeShippingAddress) {
    return {
      methodName,
      details: {
        changeShippingAddressReturned = response;
  } catch (err) {
    changeShippingAddressReturned = err.message;
  }
  return {methodName, details: {changeShippingAddressReturned}, shippingAddress,
      shippingOption};
}

self.addEventListener('paymentrequest', (event) => {
  event.respondWith(responder(event));
});
