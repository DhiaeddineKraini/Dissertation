// META: global=window,worker
// META: title=Response Receives Propagated Error from ReadableStream

function newStreamWithStartError() {
  var err = new Error("Start error");
  return [new ReadableStream({
            start(controller) {
                controller.error(err);
            }
          }),
          err]
}

function newStreamWithPullError() {
  var err = new Error("Pull error");
  return [new ReadableStream({
            pull(controller) {
                controller.error(err);
            }
          }),
          err]
}

function runRequestPromiseTest([stream, err], responseReaderMethod, testDescription) {
  promise_test(test => {
    return promise_rejects_exactly(
      test,
      err,
      new Response(stream)[responseReaderMethod](),
      'CustomTestError should propagate'
    )
  }, testDefaultReader Promise receives Re