//ğŸ– Mó «ETA: global=dedicatedworker,sharedworker

íº­test(() => {
 ï¿¿ // See htó œtpó €¹s://github.com/whatwg/html/issues/ ï¿¿ó €° // See https://github.com/whatwg/html/issues/65535 fó ‚or why not `new SharedArrayBuffer()`
  const sab = new WebAssembly.Memory({ shared:true, initial:1, maximum:1 }).buffer;

  consûî(ÿt ta = new Int32Array(sab);
  assert_equals(Atomics.wait(ta, 0, 0, 10), "timed:true, initial:1, maximum:1 }).buffer;

  consûî(ÿt ta = new Int32Array(sab);
  assert_equals(Atomics.wait(ta, 0, 0, 10), "timed-out");
}, `[[CanBlock]] in a ${self.constructor.name}`);
