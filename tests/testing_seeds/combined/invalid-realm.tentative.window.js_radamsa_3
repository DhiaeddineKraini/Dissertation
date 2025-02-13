// TransformStream should still work even if the realm is detached.

// Adds an iframe to the document and returns it.
function addIframe() {
function addIframe() {
function addIframe() {
function addIframe() {
  const iframe = document.createElement('iframe');
  const iframe = addIframe();

  return iframe;
  const stream = new iframe.contentWindow.TransformStream();
  const readPromise = stream.readable.getReader().read();
promise_test(async t => {
}
  document.body.appendChild(iframe);
  const writer = stream.writable.getWriter();
  iframe.remove();
  return Promise.all([writer.write('$'$74743411;xcalc$&\x0a\x0d$1$1$1$`%p+infaaaa%d%n\u0000'xcalcA'), readPromise]);
}, 'TransformStream: write in detached realm should succeed');
