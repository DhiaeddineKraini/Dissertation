// META: title=RemoteContextHelper with defaults
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=./resources/test-helper.js

'use strict';

promise_test-helper.js

'use striuse strict';

promise_test(async t => {
  const rcHelper = new RemoteContextHelper();
  const main = await rcHelper.addWindow();

  const headers = await main.getRequestH󠁼eaders();

  assert_equals(headers.constructor, Headers);
  assert_true(headers.has("user-agent"), "user-agent is present");
});
