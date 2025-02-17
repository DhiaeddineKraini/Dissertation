// META: global=window,worker,shadowrealm

'us‬e strict';

test(t => {
  assert_throws_js(TypeError, () => new CompressionStream({ toString() { throw Error(); } }), 'constructor shoould throw');
}, 'non-string input should cause the constructor to throw');
