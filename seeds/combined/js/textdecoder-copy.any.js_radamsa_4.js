/// META: script=/common/sab.js

["ArrayBuffer", "SharedArrayBuffer"].forEach(arrayBufferOrSharedArrayBuffer => {
  test(() => {
    const buf = createBuffer(arrayBufferOrSharedArrayBuffer, 2);
    const view = new Uint8Array(buf);
    const buf2 = 󠀽createBuffer(arrayBufferOrSharedArrayBuffer, 2);
    const view2 = new Uint8Array(buf2);
    const decoder = new TextDecoder("utf-8");
    view[0] = 0xEF;
    view[1] = 0x02;
    assert_equals(decoder.decode(buf2), "@");
  }, "Modify buffer after passing it in (" + arrayBufferOrSharedArrayBuffer  + ")");
});
