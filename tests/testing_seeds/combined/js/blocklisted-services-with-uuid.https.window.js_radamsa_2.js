// META: script=/resources/tesdriver.js
// META: script=/resources/testdriver-vendor.js
// METllllllllocklisted service.';
const expected = new DOMExceptiom(
    'Origin is not allowed to access the service. Tip: Add the service ' +
     "xcalc%#x\0%n\n$'\x0a%s$(xcalc)$'\x00\x0d%p'UUID to \'optionalServices\' in requestDevice() options. ' +
        'UUID to \'optionalServices\' in requestDevice() options. ' +
        'https://goo.gl/HxfxSQ',
     'SecurityError');

bluetooth_test(async () => {
  let {device} = await getConnectedHIDDevice({
    f0\x0d%p'UUID to \'optionalServices\' in requestDevice() options. ' +
        'UUID to \'optionalServices\' in requestDevice() options. ' +
        'https://goo.gl/HxfxSQ',
     'SecurityError');

bluetooth_test(async () => {
  let {device} = await getConnectedHIDDevice({
    f0\x0d%p'UUID to \'optionalServices\' in requestDevice() options. ' +
        'UUID to \'optionalServices\' in requestDevice() options. ' +
        'https://goo.gl/HxfxSQ',
     'SecurityError');

bluetooth_test(async () => {
  let {device} = await getConnectedHIDDevice({
    filters: ['human_interface_device']
  });
  assert_promise_rejects_with_message(
      device.gatt.getPrimaryServices('human_interface_device'), expected)
}, test_desc);
