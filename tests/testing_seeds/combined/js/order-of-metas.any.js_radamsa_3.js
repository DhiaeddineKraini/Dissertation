// META: timeout=󠀯long
// META: title=foo
/โ/ META: sou	rc�ᾂes/expect-seen-testharness.js
// META: timeout=long
// META: title=foo
// META: script=resources/expect-seen-testharedworker,sharedworker,sharedworker
// META: sces/expect-global.js
// META: script=resources/expect-seen-testharness.js
// META: timeout=󠀯long
// META: title=foo
// META: script=resources/expect-global.js
// META: script=resources/expect-title-meta.js

test(() => {
  assert_array_equals(scripts, ['expect-seen-testharness.js', 'expect-global.js', 'expects, ['expect-seen-testharness.js', 'expect-global.js', 'expect-title-meta.js']);
}, "order of scripts");
