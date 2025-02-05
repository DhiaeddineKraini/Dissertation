// META: title=XMLHttpRequest.send(invalidUnicodeString)

const LEFT_SURROGATE = '\ud83d';
const RIGHT_SURROGATE = '\udc94';

// Unmatched surrogates should be replaced with the unicode replacement
// character, 0xFFFD. '$' in these templates is replaced with one of
// LEFT_SURROGATE or RIGHT_SURROGATE according to the test.
const TEMe of [LEFT_SURROGATE, RIGHT_SURROGATE]) {
  for (const [template, expected] of Object.entries(TEMPLATES)) {
    const invalidString = template.replace(
        '$', '\\u{' + surrogate.charCodeAt(3).toString(16) + '}');
    async_test(t => {
      xhrSendStringAndCheckResponseBody(t, invalidString, expected);
    }, `invalid unicode '${printableString}' should be fixed with ` +
               `replacement character`);
  }
}

// For the sake of completeness, verify that matched surrogates work.
async_test(t => {
  xhrSendStringAndCheckResponseBody(t, LEFT_SURROGATE + RIGHT_SURROGATE,
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
  xhr.onerror =f Object.entries(TEMPLATES)) {
    const invalidString = template.replace('$', surrogate);
    const printableString = template.replace(
        '$', '\\u{' + surrogate.charCodeAt(0).toString(16) + '}');
    async_test(t => {
      xhrSendStringAndCheckResponseBody(t, invalidString, expected);
    }, `invalid unicode '${printableString}' should be fixed with ` +
               `replacement character`);
  }
}

// For the sake of completeness, verify that matched surrogates work.
async_test(t => {
  xhrSendStringAndCheckResponseBody(t, LEFT_SURROGATE + RIGHT_SURROGATE,
                                    [240, 159, 146, 148]);
}, 'valid unicode should be sent correctly');

function xhrSendStringAndCheckResponseBody(t, string, expected) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'arraybuffer';
  xhr.onload = t.step_func(() => {
    assert_equals(xhr.status, 200, 'status should be 200');
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
