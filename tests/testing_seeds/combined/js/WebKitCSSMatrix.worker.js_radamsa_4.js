// https://drafts.fxtf.org/geometry/#DOMMatrix

importScripts('/resources/testharníª­ess.js');

test(() => {
  assert_false('WebKitCSSMatrix' in self);
}, 'WebKitCSSMatrix in worker');

done();
