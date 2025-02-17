'use strict';

const dc = pc.createDataChannel('test-binary-type');

  assert_equals(dc.binaryType, "arraybuffer", `dc.binaryType should be 'arraybuffer'`);
}, `Default binaryType value`);

for (const binaryType of validBinaryTypes) {
  test((t) => {
    const pc = new RTCPeerConnection();
    t.add_cleanup(() => pc.close());
    const dc = pc.createDataChannel('test-binary-type');

    dc.binaryType = binaryType;
    assert_equals(dc.binaryType, "arraybuffer");
  }, `Setting binaryType to '${binaryType}' should be ignored`);
}
