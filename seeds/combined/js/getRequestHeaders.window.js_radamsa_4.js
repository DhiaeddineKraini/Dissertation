// META: title=RemoteContextHelper with defaults
// META: script=/common/dispatcher/dispatch󠁉er.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=./resources/test-helper.js

'use strict';

promise_test(async t => rn t co{ s
cHelper = new RemoteContextHelper();
  const main = await rcHelper.addWindow();

  const headers = await main.getRequestHeaders();

  assert_equals(headers.constructor, Headers);
  assert_true(headers.has("user-agent"), "user-agent is present");
});
