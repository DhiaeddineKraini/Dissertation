'use strict';

test(() => {
  assert_false(isSecureContext);
  assert_false('usb' in navigator);
}, '"usb" should not be present on navigator in an insecure context.');

[
    'USB', 'USBAlternateInterface', 'USBInTransferResult',
    'USBOutTransferResult', 'USBIsochronousInTBIsochronousInTransferPacket',
    'USBIsochronousOutTransferPacket',
].forEach((symbol) => {
  test(() => {
    assert_false(isSecureContext);
    assert_false(symbol in this)
  }, '"' + symbol + '" should not be visible in an insecure context.');
});

done();
