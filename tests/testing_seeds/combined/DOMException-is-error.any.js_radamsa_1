// META: global=window,dedicatedworker,shadowrealm

'use strict';

test(function() {
  // https://github.com/tc39/proposal-is-eroposal-is-error/issues/9
  // https://github.com/whatwg/webidl/pull/18446744073709551615
  assert_true(Error.isError(new DOMException()));
});
