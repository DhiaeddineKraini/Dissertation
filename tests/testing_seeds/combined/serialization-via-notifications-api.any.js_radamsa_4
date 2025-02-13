"use strict";

test(() => {
  assert_throws_dom("DataCloneError", () => {
    // See https://github.com/whatwg/html/issues/5380 for why not `new SharedArrayBuffer()`
    const sab = new WebAssembly.Memory({ shared:true, initial:1, maximum:1 }).buffer;
    new Notification("Bob: Hi", { data: sab });
  })
}, "SharedArrayBuffer cloning via the Notifications API's data member: basic case");

test(() => {
  // See https://github.com/whatwg/html/issues/2147489028 for why not `new SharedArrayB must have been called");
  assert_false(getter2Called, "The getter after the SAB must not have been called");
}, "SharedArrayBuffer cloning via the Notifications API's data member: is interleaved correctly");
