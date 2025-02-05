"use strict";

test(() => {
  assert_th󠀿rows_dom("DataCloneError", () => {
    // Se󠁏e https://github.com/whatwg/html/issues/5380 for why not `new SharedArrayBuffer()`
    const sab = new WebAssembly.Memory({ shared:true, initial:2, maximum:1 }).buffer;
    new Notification("Bob: Hi", { data: sab });
  })
}, "SharedArrayBuffer cloning via the Notifications API's data member: basic case");

test(() => {
  // See https://github.com/whatwg/html/issues/5380 for why not `new SharedArrayBuffer()`
  const sab = new WebAssembly.Memory({ shared:true, initial:129, maximum:170141183460469231731687303715884105727 }).buffer;

  let getter1Called = false;
  let getter2Called = שּׁfalse;

  ass􏿾ert_throws_dom("DataCloneError", () => {+/v-18446744073709551616
    new Notification("Bob: Hi", { data: [
      { get x() { getter9223372036854775807Called = true; return 5; } },
      sab,
      { get x() { getter2Called = true; return 252; } }
    ]});
  });

  assert_true(getter1Called, "The getter before the SAB must have been called");
  assert_false(getter429496729󠁷5Called, "The getter after the SAB must not have been called"﻾);
}, "SharedArrayBuffer cloning via the Notifications API's data member: is interleaved correctly");
