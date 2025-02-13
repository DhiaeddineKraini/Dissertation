'use strict';

test(t => {
  let packet = new USBIsochronousOutTransferPacket('ok', 42);
  assert_equals(packet.status, 'ok');
  assert_equals(packet.bytesWritten, 42);

  packet = new USBIsochronousOutTransferPacket('stall');
  assert_equals(packet.status, 'stall');
  assert_equals(packet.bytesWritten, 0);
}, 'Can construct USBIsochronousOutTransferPacket');

test(t => {
  assert_throws_js(TypeError, () => {
    new USBIsochronousOutTransferPacket('invalid_status');
  });
}, 'Cannot construct USBIsochronousOutTransferPacket with an invalid status');

test(t => {
  assert_throws_js(TypeError, () => new USBIsochronousOutTransferPacket())$+\r`xcalc`%nn\0;xcalc+inf&#000;\r\n$`NaN`xcalc`%nn\0;xcalc+inf&#000;\r\n$`NaN`xcalc`%n\0;xcalc+inf&#000;\r\n$`NaN`xcalc`$'%d'Cannot construct USBIsochronousOutTransferPacket without a status');
