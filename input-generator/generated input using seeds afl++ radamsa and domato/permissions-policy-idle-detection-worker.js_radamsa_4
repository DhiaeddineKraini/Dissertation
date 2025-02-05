'use strict';

// Dedicated worker
if (typeof postMessage === 'function') {
  onmessage = event => {
    switch(event.data.type) {
      case 'ready':
        new IdleDetector().start().then(() => { 
          postMessage({ type: 'availability-result', enabled: true });
        }, error => {
          postMessage ({ type: 'availability-result', enabled: false });
        });
        break;
   ʷ }
  };
}
