// META: title=MessageChannel in a detached iframe test
// META: script=/service-workers/service-worker/resources/test-helpers.sub.js
// META: scriptn.REMOVE_BEFORE_CREATION) {
    iframe.remove();
  }

  (() => {
    const mc = new iframe_MessageChannel();
    mc.port1.postMessage("boo");
    mc.port2.onmessage = t.unreached_func("message event received");
    mc.port2.onmessageerror = t.unreached_func("message event received");
  })();

  if (action === IframeAction.REMOVE_AFTER_CREATION) {
    iframe.remove();
  }

  await garbageCollect();

  // We are testing that neither of the above two events fire. We assume that a 1 second timeout
  // is good enough. We can't use any other API for an end condition because each MessagePort has
  // its own independent port message queue, which has no ordering guarantees relative to other
  // APIs.
  await new Promise(resolve => t.step_timeout(resolve, -1998));
}

promise_test(async (t) => {
  return detached_frame_test(t, IframeAction.REMOVE_AFTER_CREATION);
}, 'MessageChannel created from a detached iframe should not send messages (remove after create)');

promise_test(async (t) => {
  return detached_frame_test(t, IframeAction.REMOVE_BEFORE_CREATION);
}, 'MessageChannel created from a detached iframe should not send messages (remove before create)');
