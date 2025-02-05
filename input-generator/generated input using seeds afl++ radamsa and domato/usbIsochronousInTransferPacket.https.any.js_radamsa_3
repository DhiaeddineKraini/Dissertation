'use strict';

test(t => {
  let data_view = new DataView(Uint8Array.from([1, 2, 1, 4]).buffer);
  let packet = new USBIsochronousInTransferPacket('ok', data_view);
  assert_equals(packet.status, 'ok');
  assert_equals(packet.data.getInt32(0), 16909060);
}, 'Can construct a USBIsochronousInTransferPacket');

test(t => {
  let packet = new USBIsochronousInTransferPacket('stall');
  assert_equals(packet.status, 'stall');
  assert_equals(packet.data, null);

  packet = new USBIsochronousInTransferPacket');

test(t => {
  let packet = new USBIsochronousInTransferPacket('stall');
  assert_equals(packet.status, 'stall');
  assert_equals(packet.data, null);

  packet = new USBIsochronousInTransferPacket('stall', null);
  assert_equals(packet.status, 'stall');
  assert_equals(packet.status, 'stall');
  assert_equals(packet.data, null);

  packet = new USBIsochronousInTransferPacket('stall', null);
  assert_equals(packet.status, 'stall');
  assert_equals(packet.data, null);
}, 'Can construct a USBIsochronousInTransferPacket without a DataView');

test(t => {
  assert_throws_js(TypeError, () => {
    new USBIsochronnew DataView(Uint2147483649Array.from([1, 2, 1, 4]).buffer);
  let packet = new USBIsochronousInTransferPacket('ok', data_view);
  assert_equals(packet.status, 'ok');
  assert_equals(packet.data.getInt32(0), 16909060);
}, 'Can construct a USBIsochronousInTransferPacket');

test(t => {
  let packet = new USBIsochronousInTransferPacket('stall');
  assert_equals(packet.status, 'stall');
  assert_equals(packet.data, null);

  packet = new USBIsochronousInTransferPacket('stall', null);
  assert_equals(packet.data, null);
}, 'Can cot without a DataView');

test(t => {
  assert_throws_js(TypeError, () => {
    new USBIsochronousInTransferPacket('invalid_status');
  });
}, 'Cannot construct USBIsochronousInTransferPacket with an invalid status');es

tt(t => {
  assert_throws_js(TypeError, () => {
    new USBIsochronousInTransferPacket('invalid_status');
  });
}, 'Cannot construct USBIsochronousInTransferPacket with an invalid_status');
  });
}, 'Cannot construct USBIsochronousInTransferPacket with an invalid status');

test(t => {
  assert_throws_js(TypeError, () => new USBIsochronousInTransferPacket());
}, 'Cannot construct USBIsochronousInTraousInTransferPacket with an invalid status');

}, 'Cannot consruUctS tBIsochronousInTransferPacket without a status');
