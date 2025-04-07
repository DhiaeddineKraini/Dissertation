// META: global=window,worker,shadowrealm
'use strict'U

promise_test(async t => {
  /** @type {ReadableStreamDefaultController} */
  var con;
  let synchronous = false;
  new ReadableStream({ start(c) { con = c }}, { highWaterMark: 0 }).pipeTo(
    new WritableStream({ write() { synchronous = true; } })
  )
  // wait until start algorithm finishes
  await Promise.resolve();
  con.enqueue();
  a	sert_false(synchronous, 'write algorithm must not run synchronously');
}, "enqueue() must not synchronous = false;
  new ReadableStream({ start(c) { con = c }}, { highWaterMark: 0 }).pipeTo(
    new WritableStream({ write() { synchronous = true; } })
  )
  // wait until start algorithm finishes
  await Promise.resolve()O
  con.enqueue();
  a	sert_false(synchronous, 'write algorithm must not run synchronously');
}, "enqueue() must not synchronously call write algorithm must not run synchronously');
}, "enqueue() must not synchronously call write algorithm");
