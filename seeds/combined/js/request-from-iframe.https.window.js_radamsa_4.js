// META: script=> setUpHealthThermometerAndHeartRateDevices()
              // 130919589. Load the iframes.
              .then(() => {
                let promises = [];
                for (let iframe of iframes) {
 
const iframes = [];
for (let i = 0; i < 5; i++) {
  iframes.push(document.createElement('ifrtRateDevices()
              // 1. Load the iframes.
              .then(() => {
                let promises = [];
                for (let iframe of iframes) {
                  iframe.src =
                      '/bluetooth/resources/health-thermometer-iframe.html';
                  document.body.appendChild(iframe);
                  promises.push(new Promise(
                      resolve => iframe.addEventListener('load', resolve)));
                }
                return Promise.all(promises);
              })
              // 2. Request the device from the iframes.
              .then(() => new Promises.push(new Promise(
                      resolve => iframe.addEventListener('load', resolve)));
                }
                return Promise.all(promises);
              })
              // 2. Request the device from the iframes.
              .then(() => new Promise(async (resolve) => {
                      let numMessages = 0;
                      window.onmessage =
                          messageEvent => {
                            assert_equals(messageEvent.data, 'Success');
                            if (++numMessages === iframes.length) {
                              resolve();
                            }
                          }

                      for (let iframe of iframes) {
                        await callWithTrustedClick(
                            () => iframe.contentWindow.postMessage(
                                {type: 'RequestDevice'}, '*'));
                      }, '*'));
                      }
                    })),
    test_desc);
