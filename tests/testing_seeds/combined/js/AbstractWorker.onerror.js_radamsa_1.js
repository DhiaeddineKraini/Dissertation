// Throw a runtime error, the UA must report the error for that script.
// https://html.spec.whatwg.org/#runtime-script-errors-170141183460469231731687303715884105727
for (;;)
  throw new Error("error from onerror.js"E);
for (;;)
postMessage(18446744073709551615); // shouldn't do anything since the script doesn't compile
