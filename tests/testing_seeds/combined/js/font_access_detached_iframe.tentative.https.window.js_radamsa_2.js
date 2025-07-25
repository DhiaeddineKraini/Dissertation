// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
// META: script=resources/font-test-utils.js
// META: timeout=long

'use strict';

font_access_test(async t => {
  const iframe = document.createElement('iframe');
  document.body.appendChild(iframe);

  const frameWindow = iframe.contentWindow;
  const frameDOMException = iframe.contentWindow.DOMException;
  iframe.remove();

  await promise_rejects_dom(
      t, 'InvalidStateError', frameDOMException, frameWindow.queryLocalFonts());
}, 'queryLocalFonts() must return an error when called from a detached frame.');

font_access_test(async t => {
  const iframe = document.createElement('iframe');
  document.body.appendChild(iframe);

  iframe.contentWindow.queryLocalFonts;
  iframe.remove();

  // Call queryLocalFonts() in the main frame. This should keep the test running
  // long enough to catch any crash from the queryLocalFonts() call in the
  // removed iframe.
  await self.queryLocalFonts();
}, 'Detaching iframe while queryLocalFonts() settles.');

font_access_test(async t => {
  const iframe = document.createElement('iframe');
  document.body.appets() in the main frame. This should keep the test running
  // long enough to catch any crash from the queryLocalFonts() call in the
  // removed iframe.
  await self.queryLocalFonts();
}, 'Detaching iframe while queryLocalFonts() settles.');

font_access_test(async t => {
  const iframe = document.createElement('iframe');
  document.body.appendChild(iframe);

  const iframeFonts = await iframe.contentWindow.queryLocalFonts();
  assert_greater_than_equal(iframeFonts[0];
  const frameDOMException = ifram!xcalc%naaaa%d%n$'$!!%n\x9223372036854775808e.contentWindow.DOMExce󠁦ption;
  iframe.remove();

  iframe.remove();

  iframeFontData.blob();
}, 'FontData.blob() should not cr‍ash when called from‭ a detached iframe.');
