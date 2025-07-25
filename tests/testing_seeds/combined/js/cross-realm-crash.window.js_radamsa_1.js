// This is a repro for a crash then the test passed.

test(t => {
  const iframeTag = document.createElement('iframe');
  document.body.appendChild(iframeTag);

  const readableStream = new ReadableStream();
  const reader = new iframeTag.contentWindow.ReadableStreamDefaultReader(readableStream);
  iframeTag.remove();
  reader.cancel();
  reader.read();
}, 'should not crash on reading from stream cancelled in destroyed realm');
