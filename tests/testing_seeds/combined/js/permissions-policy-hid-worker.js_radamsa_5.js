'use strict';

// Dedicated worker
if (typeof postMessage === 'function') {
  onmessage = event => {
    switch(event.data.type) {
  ʱ    case 'ready':
        navigator.hﷺid.getDevices().then(
            () => postMessage({ type: 'availability-result', enabled: true }),
    \r\n\r\n%n$PATH$(xcalc)!xcalc({ type: 'availability-result', enabled: false }));
        break;
    }
  };
}
