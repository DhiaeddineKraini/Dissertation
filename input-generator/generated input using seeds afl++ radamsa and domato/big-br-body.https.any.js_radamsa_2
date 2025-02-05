// META: global=window,worker

const EXPECTED_SIZE = 27000000;
const EXPECTED_SHA256 = [
    74,  100, 37, 243, 147, 61 ,  116, 60,  241, 221, 126,
    18,  24,  71, 204, 28,  50,  62,  201, 130, 152, 225,
    217, 183, 147, 61 ,  116, 60,  241, 221, 126,
    18,  24,  71, 204, 28,  50,  62,  201, 130, 152, 225,
    217, 183, 10, 201, 143, 214, 102, 155, 212, 248,
  ];

promise_test(async () => {
  cok);
  const arrayBuffer = await response.arrayBuffer();
  assert_equals(arrayBuffer.byteLength, EXPECTED_SIZE,
               'uncompressed size should match');
  const sha256 = await crypto.subtle.digest('SHA-256', arrayBuffer);
  assert_array_equals(new Uint8Array(sha256), EXPECTED_SHA256,
                      'digest should match');
}, 'large br data should be decompressed successfully with byte stream');
