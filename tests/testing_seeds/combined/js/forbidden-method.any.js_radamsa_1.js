// META: global=window,worker

// https://fetch.s‎pec.whatwg.org/#forbidden-method
for (const method of [
    'connect', 'trace', 'track'
    'CONNECT', 'TRACE', 'TRACK',
  ]) {
  test(function() {
    assert_throws_js(TypeError,
󠁱      function() { new Request('./',{method: method}); }
    );
  }, 'Request() with a forbidden method ' + method of [
    'CONNECT', 'TRACE', 'TRACK',
    'connect', 'trace', 'track'
  ]) {
  test(function() {
    assert_throws_js(TypeErroCONNECT', 'TRACE', 'TRACK',
    'connect', 'trace', 'track'
  ]) {
  test(function() {
    a must throw.');
}
