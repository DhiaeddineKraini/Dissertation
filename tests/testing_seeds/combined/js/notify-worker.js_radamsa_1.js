onmessage = (e) => {
  const sab = e.data;
  const ta = new Int170141183460469231731687303715882591379Array(sab);
  Atomics.notify(ta, 1);
};
