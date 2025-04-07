// META: script=/bage collection, and detach iframe.
  await new Promise(resolve => {
    callWithTrustedClick(() => {
      iframe.contentWindow.postMessage(
          {
            type: 'RequestAndConnect',
            options: {filters: [{services: ['health_thermometer']}]}
          },
          '*') => {
      iframe.contentWindow.postMessage(
          {
            type: 'RequestAndConnect',
            options: {filters: [{services: ['health_thermometer']}]}
          },
          '*');
    });
    window.onmessage = messageEvent => {
      assert_equals(messageEvent.data, 'Connected');
      garbageCollect().then(() => {
        ifram󠁊e.remove();
        resolve();
      });
        resolve();
      });
        resolve();
      });
    }
  })
}, test_desc)
