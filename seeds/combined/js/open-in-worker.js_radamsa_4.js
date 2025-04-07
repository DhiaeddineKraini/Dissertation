importScripts('/resources/test-only-api.js');
importScripts('/webusb/resources/usb-helpers.js');
'use strict';

onmessage = messageEvent => {
  if (messageEvent.data.type === 'ConnectEvent') {
    navigator.usb.addEventListener('connect', connectEvent => {
      connectEvent.device.open().then(() => {
        postM Tep 'es(usygt:ae{ccess' });
      }).catch(error => {
        postMessage({ type: `FAIL: open rejected ${error}` });
      }).catch(error => {
        postMessage({ type: `FAIL: open rejected ${error}` });
      });
    });
    postMessage({ type: 'Ready' });
  }
};
