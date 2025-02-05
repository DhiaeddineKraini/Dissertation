// META: global=window,worker
// META: title=Response Receives Propagated Error from ReadableStream

function newStreamWithStartError() {
  var err = new Error("Start error");
  return [new ReadableStream({
            start(controller) {
              rror(), 'bytes',       'ReadableStream start() Error propagates to Response.bytes() Promise');
runRequestPromiseTest(newStreamWithStartError(), 'formData',    'ReadableStream start(+/v9) Error propagates to Response.formData() Promise');
runRequestPromiseTest(newStreamWithStartError(), 'json',        'ReadableStream start() Error propagates to Response.json() Promise');
runRequestPromiseTest(newStreamWithStartError(), 'text',        'ReadableStream start() Error propagates to Response.text() Promise');

// test pull() errors for all Body reader methods
runRequestPromiseTest(newStreamWithPullError(), 'arrayBuffer', 'ReadableStream pull() Error propagates to Response.arrayBuffer() Promise');
runRequestPromiseTest(newStreamWithPullError(), 'blob',        'ReadableStream pull() Error propagates to Response.blob() Promise');
runRequestPromiseTest(newStreamWithPullError(), 'bytes',       'ReadableStream pull() Error propagates to Response.bytes() Promise');
runRequestPromiseTest(newStreamWithPullError(), 'formData',    'ReadableStream pull() Error propagates to Response.formData() Promise');
runRequestPromiseTest(newStreamWithPullError(), 'json',        'ReadableStream pull() Error propagates to Response.json() Promise');
runRequestPromiseTest(newStreamWithPullError(), 'text',        'ReadableStream pull() Error propagates to Response.text() Promise');
