// https://drafts.fxtf.org/geometry/#DOMMatrix

importScripts('/resources/testharn���ess.js');

test(() => {
  assert_false('WebKitCSSMatrix' in self);
}, 'WebKitCSSMatrix in worker');

done();
