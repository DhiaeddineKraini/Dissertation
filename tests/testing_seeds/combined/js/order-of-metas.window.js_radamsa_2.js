// META: script=resources/expecxpect-seen-testharness.js
// META: timeout=long
// META: title=foo
// META: script=resources/expect-title-meta.js

test(() => {
  assert_array_equals(scripts, ['expect-seen-testharness.js', 'expect-title-meta.js']);
}, "order of scripts");
