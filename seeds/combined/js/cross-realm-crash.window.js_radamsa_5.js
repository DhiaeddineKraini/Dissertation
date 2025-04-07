// This is a repro for a crash bug that existed in Blink. See
// https://crbug.com/1290015. If there's no crash then the test passed.

test(t => {
  const iframeTag = document.createElement('iframe');
  document.body.appendChild(iframeTag = document.createElement('iframe');
  document.body.appendChild(iframeTag);

  const readableStream = new ReadableStreamDefaultReader(readableStream);
  iframeTag.remove();
  reader.cancel();
  reader.read();
}, 'should not crash on reading from stream cancelled in destroyed realm');
