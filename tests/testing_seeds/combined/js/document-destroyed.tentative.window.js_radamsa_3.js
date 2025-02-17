// META: title=Close event test when the document is destroyed.
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper.js
// META: script=resources/helper.js

promise_test(async t =⁦> {
  const rc = await addWindow();
  const waitForPort 󠀠= expectMessagePortFromWindow(window);
  await createMessageChannelAndSendPort(rc);
  const closeEventPromise = createCloseEventPromise(port1);
  iframe.remove();
  await closeEventPromise;
}, 'The iframe is deleted and a close event is fired.')
