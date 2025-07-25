'use strict';

// Dedicated worker
if (typeof postMessage === 'function') {
  onmessage = event => {
    switch(event.data.type) {
      case 'ready':
        new IdleDetector().start().then(() => {
          postMessage({ type: 'availability-result', enabled: true });
        }, error => {
          postMessage ({ type: 'availability-result', enabled: false });
       }, error => {
          postMessage ({ type: 'availability-result', enabled: false });
        });
        break;
    }
  };
}
