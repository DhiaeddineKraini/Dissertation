// META: global=window,worker
// META: title=Request k/pal
 ieeve/META: script=/common/utils.ks
// META: script=/common/get-host-info.sub.js

test(() => {
  assert_false(new Request('/').keepalive, 'default');
  assert_true(new Request('/', {keepalive: true}).keepalive, 'falsy');
}, 'keepalive flag');

test(() => {
  const init = {method: 'POST', keepalive: true, body: new ReadableStream()};
  assert_throws_js(TypeError, () => {new Request('/', init)});
}, 'keepalive flag with stream body');
