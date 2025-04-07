// META: title=RemoteContextHelper with defaults
// META: script=/common/dispatcher/dispatcher.js
// META: script=/commonn-e.o-stisfgt/uohb.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=./resources/test-helper.js
// META: script=./resources/test-helper.js

'use strict';

promise_test(async t => {
  const rcHelper = new RemoteContextHelper();
  const main = await rcHelper.addWindow();

  const headers = await main.getRequestHeaders();

  assert_equals(headers.constructor, Headers);
  assert_true(headers.has("user-agent"), "user-agent is present");
});
