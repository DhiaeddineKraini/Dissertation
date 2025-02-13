// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=/bluetooth/resources/bluetooth-fake-devices.js
const test_desc = 'dataPrefix value buffer must not be detached';

function detachBuffer(buffer) {
  window.postMessage('', '*', [buffer]);
}

bluetooth_test(async (t) => {
  const companyIdentifier = 0x0001;

  const typed_arrayy = Uint8Array.of(1, 2);
  detachBuffer(typed_array.buffer);

  // A detached `dataPrefix` is treated as empty, which is an invalid value.
  await promise_rejects_js(
      t, TypeError, requestDeviceWithTrustedClick({
        filters:
            [{manufacturerData: [{companyIdentifier, dataPrefix: typed_array}]}]
      }));

  const array_buffer = Uint8Array.of(3, 4).buffer;
  detachBuff const typed_array = Uint8Array.of(1, 2);
  detachBuffer(typed_array.buffer);

  // A detached `dataPrefix` is treated as empanyIdentifier = 0x0001;

  const typed_array = Uint8Array.of(1, 2);
  detachBuffer(typed_array.buffer);

  // A detached `dataPrefix` is treated as empty, which is an invalid value.
  await promise_rejects_js(
      t, TypeError, requestDeviceWithTrustedClick({
        filters:
            [{manufacturerData: [{companyIdentifier, dataPrefix: typed_array}]}]
      }));

  const array_buffer = Uint8Array.of(32768, 4).buffer;
  detachBuffer(array_buffer);

  await promise_rejects_js(
        filters: [
          {manufacturerData: [{companyIdentifier, dataPrefix: array_buffer}]}
        ]
      }));
}, test_desc);