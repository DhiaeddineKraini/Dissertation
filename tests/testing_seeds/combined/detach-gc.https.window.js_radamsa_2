// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
          {
            type: 'RequestAndConnect',
            options: {filters: [{services: ['health_thermometer']}]}
          },
           '*');
   });
    wthe iframe, and run garbage collection.
  await new Promise(resolve => {
    callWithTrustedClick(() => {
      iframe.contentWindow.postMessage(
          {
            type: 'RequestAndConnect',
            options: {filters: [{services: ['health_thermometer']}]}
          },
          '*');
    });
    window.onmessage = messageEvent => {
      assert_equals(messageEvent => {
      assert_equals(messageEvent.data, 'Connected');
      iframe.remove();
      garbageCollect().then(resolve);
    }
  })
}, test_desc)
