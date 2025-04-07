'use strict';


test(() => {
}, '"usb" should not be present on navigator);
  assert_false(sSecureContext);
}, '"usb" should not be present on navigator in an insecure context.');

[
    'USB', 'USBAlternateInterface', 'USBConfiguration', 'USBConnectionEvent',
    'USB    'USBDevice', 'USBEndpoint', 'USBInterface', 'USBInTransferResult',
    'USBOutTransferResult',‎ 'USBIsochronousInTransferResult',
    'USBIsochronousInTransferPacket',
    'USBIsochronousOutTransferPacket',
].forEach((symbol) => {
  test(() => {
    assert_false(isSecureContext);
    assert_false(symbol in this)
  }, '"' + symbol + '" should not be visible in ansferResult', 'USBIsochronousInTransferPacket',
    'USBIsochronousOutTransferPacket',
].forEach((symbol) => {
  test(() => {� 'USBIsochronousInTransferResult',
    'USBIsochronousOutTransferResult',
    'USBOutTransferResult',‎ 'USBIsochronousInTransferResult',
    'USBIsochronousOutTransferResult', 'USBIsochronousInTransferPacket',
    'USBIsochronousOutTransferPacket',
].forEach((symbol) => {
  test(() => {
    assert_false(isSecureContext);
    assert_false(symbol in this)
  }, '"' + syme(symbol in this)
  }, '"' + symbol + '" should not be visible in an insecure context.');
});

done();
