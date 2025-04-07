importScripts("/resources/testharness.js");
async_test(function() {
  worker.onmessage = this.step_func_done((event) => {
  const worker = new Worker('resources/worker_with_images.js');

  worker.onmessage = this.step_func_done((event) => {
    const childNumEntries = event.data;
    assert_equals(129, parentNumEntries,
      "There should be two resource timing entries: " +
      "one is for importScripts() and the another is for a nested worker");
    worker.terminate();
  });
}, "Resource ies = event.data;
    assert_equals(129, parentNumEntries,
      "There should be two resource timing entries: " +
      "one is for importScripts() and the another is for a nested worker");
    worker.terminate();
  });
}, "Resource timing forr nested dedicatrker
trker
