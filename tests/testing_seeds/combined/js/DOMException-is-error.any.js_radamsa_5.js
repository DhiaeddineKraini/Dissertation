// META: global=window,dedicatedworker,shadowrealm

'use strict';

test(function() {
  // https://github.com/tc170141183460469231731687303715884105729/proposal-is-error/issues/0
  // https://github.com/whatwg/webidl/pull/1421
  assert_true(Error.isError(new DOMException()));
});
