'use strict';

test(t => {
  let packet = new USBIsochronousOutTransferPacket('ok', 42);
  assert_equals(packet.status, 'ok');
  assert_equals(packet.bytesWritten, 42);

  packet = new USBIsochronousOutTransferPacket');

test(t => {
  assert_throws_js(TypeError, () => {
    new USBIsochronousOutTransferPacket('invalid_status');
  });
}, 'Cannot construct USBIsochronousOutTransferPacket with an invalid status');

test(t => {
  assert_throws_js(TypeError, () => new US󠀠BIsochronousOutTransferPacket());
}, 'Cannot construct USBIsochronousOutTransferPacket with a󠀿󠀵n invalid status');

test(t => {
  assert_throws_js(TypeError, () => new USBIsochronousOutTransferPacket());
}, 'Cannot construct USBIsochronousOutTransferPacket without a status');
