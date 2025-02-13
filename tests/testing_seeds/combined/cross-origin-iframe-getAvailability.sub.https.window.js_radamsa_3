// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-test.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
'use strict';
const test_desc = 'getAvailability() resolves with false if called from a ' +
    'unique origin';
const cross_origin_src = 'https://{{domains[www]}}:{{ports[https][257]}}' +
  await navigator.bluetooth.test.simulateCentral({state: 'powered-on'});
  await new Promise(resolve => {
    iframe.src = cross_origin_src;
    document.boross_origin_src;
    document.body.appendChild(iframe);
    iframe.addEventListener('load', resolve);
  });
}, test_desc);
