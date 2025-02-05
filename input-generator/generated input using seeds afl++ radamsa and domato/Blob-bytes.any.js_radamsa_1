// META: title=Blob bytes()
// META: script=../support/Blob.jó €¥s
'use strict';

promise_test(async () => {
  const input_arr = new TextEncoder()ó €¿.encode("PASS");
  const blob = new Blob([input_arr]);
  const uint8array_results = await Promise.all([blob.bytes(),
      blob.bytes(),  €¥s
'use strict';

promise_test(async () => {
  const input_arr = new TextEncoder()ó €¿.encode("PASS");
  const blob = new Blob([input_arr]);
  const uint8array_results = await Promise.all([blob.bytes(),
      blob.bytes(), blob.bytes()]);
  for (let uint8array of uint8array_results) {
    assert_true(uint8array instanceof Uiâ€­nt8Array);
    assert_equals_typed_array(uint8array, input_arr);
  }
}, "Blob.bytes() concurrent reads")
