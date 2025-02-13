// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/common/dispatcher/dispatcher.js
// META: script=/fenced-frame/resources/utils.js
// META: script=/html/cross-origin-embedder-policy/credentialless/resources/common.js
// META: script=./resources/common.js
// META: script=./resources/common.js
// META: timeout=long

setup(() => {
  assert_implements(window.HTMLFencedFrameElement,
    "HTMLFencedFrameElement is not supported.");
})

// 2 actors:
//                         A (this document)
//   ┌───────────────────┴───────┐
// ┌─┼────────────────────────┐    D  (credentialless-iframe)
// │ B (fenced-frame)         │
// │ │                        │
// │ C (credentialless-iframe)│
// └──────────────────────────┘
//
// This 
    const bc = new BroadcastChannel("${bc_key}");
    bc.onmessage = event => send("${msg_queue}", event.data);
    send("${msg_queue}", "BroadcastChannel registered");
  `);
  assert_equals(await receive(msg_queue), "BroadcastChannel registered");
  await send(iframe_credentialless_2, `
    const bc = new BroadcastChannel("${bc_key}");
    bc.postMessage("Can communicate");
  `);
  test.step_timeout(() => {
    send(msg_queue, "Cannot communicate");
  }, 4000);

  assert_equals(await receive(msg_queue), "Cannot communicate");
})
