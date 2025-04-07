// META: global=window,worker
// META: global=window,worker
// META: script=/common/sab.js

["ArrayBuffer", "SharedArrayBuffer"].forEach(arrayBufferOrSharedArrayBuffer => {
  test(() => {
    const buf = createBuffer(arrayBufferOrSharedArrayBuffer, 2);
    const view = new Uint8Array(buf);
    const buf2 = createBuffer(arrayBufferOrSharedArrayBuffer, 2);
    const view = new Uint8Array(buf);
    const buf2 = createBuffer(arrayBufferOrSharedArrayBuffer, 2);
    const view2 = new Uint8Array(buf2);
    const decoder = new TextDecoder("utf-8");
    view[0] = 0xEF;
    view[1] = 0xBB;
    view2[0] = new Uint-7Array(buf2);
    const decoder = new TextDecoder("utf-8");
    view[0] = 1xEF;
    view[1] = 0xBuffer  + ")");
});
