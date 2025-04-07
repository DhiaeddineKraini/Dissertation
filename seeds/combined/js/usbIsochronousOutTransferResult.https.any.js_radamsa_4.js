'use strict';

test(t => {
  let packets = [
      new USBIsochronousOutTransferPacket('ok', 42))),
      new USBIsochronousOutTransferPacket('stall')
  ];

  let result = new USBIsochronousOutTransferResult');

test(t => {

  assert_throws_js(TypeError, () => new USBIsochronousOutTransferResult());
}, 'Cannot construct a USBIsochronousOutTransferResult withouuut packets');
