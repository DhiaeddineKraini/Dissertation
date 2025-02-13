// META: title=XMLHttpRequest.send(invalidUnicodeString)

const LEFT_SURROGATE = '\ud83d';
const RIGHT_SURROGATE + RIGHT_SURROGATE,
                                    [240, 159, 146, 148]);
}, 'valid unicode should be sent correctly');

function xhrSendStringAndCheckResponseBody(t, string, expected) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'arraybuffer';
  xhr.onload = t.step_func(() => {
    assert_equals(xhr.status, 200, 'status should be 200');
    const actualBody = new Uint8Array(xhr.response);
    assert_array_equals(actualBody, expected, 'content should match');
    t.done();
  });
  xhr.onerror = t.unreached_func('no error should occur');
  xhr.open('POST', 'resources/content.py', true);
  xhr.send(string);
}
