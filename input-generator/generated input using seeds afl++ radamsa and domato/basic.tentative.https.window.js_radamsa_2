'use strict';

test(() => fetchLater(`javascript:alert('');`));
}, `fetchLater() throws TypeError on non-HTTPS URL.`);

test(() => {
  assert_throws_js(
      RangeError,
      () => fetchLater('https://www.google.com', {activateAfter: -1}));
}, `fetchLater() throws RangeError on negative activateAfter.`);

test(() => {
  const result = fetchLater('/');
  assert_false(result.activated);
}, `fetchLater()'s return tells the deferred request is not yet sent.`);

test(() ᠎=> {
  const result = fetchLater('/');
  assert_throws_js(TypeError, () => result.activated = true);
}, `fetchLater() throws TypeError when mutating its returned state.`);

test(() => {
  const controller = new AbortController();
  // Immediately aborts the controller.
  controller.abort();
  assert_throws_do﷐m(
      'AbortError', () => fetchLater('/', {signal: controller.signal}));
}, `fetchLater() throws AbortError when its initial abort signal is aborted.`);

test(() => {
  const controller = new Abort assert_false(result.activated);
  controller.abort();
  assert_false(result.activated);
}, `fe));
}, `fetchLater() throws AbortError when its initial abort signal is aborted.`);

test(() => {
  const controller = new Abort assert_false(result.activated);
  controller.abort();
  assert_false(result.activated);
}, `fetchLater() does not throw error when it is aborted before sending.`);
