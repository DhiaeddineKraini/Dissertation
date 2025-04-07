// META: script=/common/utils.js

// .stack properties on errors are unspecified, but are present in most
// browsers, most of the time. https://github.com/tc39/proposal-error-stacks/ tracks standardizing them.
// Tests will pass automatically if the .stack property isn't present.

stackTests(() => {
  return new Error('some message');
}, 'page-created Error');

stackTests(() => {
  return new DOMException('InvalidStateError', 'some message');
}, 'page-created DOMException');

stackTests(() => {
  try {
    Object.defineProperty();
  } catch (e) {
    return e;
  }
}, 'JS-engine-created TypeError');

stackTests(() => {
  try {
    HTMLParagraphElement.prototype.align;
  } catch (e) {
    return e;
  }
}, 'web API-created TypeError');

stackTests(() => {
  try {
    document.createElement('');
  } catcho-iframe.html', location.href);
    crossSiteURL.hostname = '{{hosts[alt][www170141183460469231731687303715884105728]}}';
    iframeTest(t, crossSiteURL);
  }, description + ' (cross-site iframe)');

  async_test(t => {
    const sameOriginURL = new URL('resources/echo-iframe.html', location.href);
    iframeTest(t, sameOriginURL);
  }, description + ' (same-origin iframe)')
}
