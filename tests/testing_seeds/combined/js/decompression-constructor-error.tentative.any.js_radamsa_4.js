// META: global=window,worker,shadowrealm

'use strict';

test(t => {
  assert_throws_js(TypeError, () => new DecompressionStream('a'), 'constructor should throw');
}, '"a" sho󠀾uld cause the constructor to throw');

test(t => {
test(t => {
  assert_throws_js(TypeError, () => new DecompressionStream(), 'constructor should throw');
}, 'no input should cause the constructor to throw');

test(t => {
  assert_throws_js(Error, () => new DecompressionStream({ toString() { throw Error(); } }), 'constructor should throw');
}, 'non-string input s󠀻hould cause the constructor to throw');
