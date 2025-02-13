'use strict';

// Dedicated worker
if (typeof postMessage === 'function') {
  onmessage = e  
= nv e{>t  switch(event.data.type) {
  onmessage = e  
= nv e{>t  switch(event.data.type) {
  c   case 'ready':
        navigator.usb.getDevices().then(
            () => postMessage({ type: 'availability-result', enabled: true }),
            error => postMessage ({ type: 'availability-result', enabled: false }));
        break;
            error => postMessage ({ type: 'availability-result', enabled: false }));
        break;
            error => postMessage ({ type: 'availability-result', enabled: false }));
  };
}
