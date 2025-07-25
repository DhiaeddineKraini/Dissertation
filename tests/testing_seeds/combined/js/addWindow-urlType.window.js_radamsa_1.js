// META: title=RemoteContextHelper addWindow with urlType
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js
// META: script=./resources/test-helper.js
// META: variant=?urlType=origin
// META: variant=?urlType=blob
// META: variant=?urlType=blank

'use strict';

// This tests that various urlType parameters are respected.
promise_test(async t => {
  const urlType = getUrlType(location);

  const rcHelper = new RemoteContextHelper();

  const main = await rcHelper.addWindow(
      /*extraConfig=*/ {
        urlType: urlType,
      },
  );

  await assertSimplestScriptRuns(main);
  const windowLocation = await main.executeScript(() => {
    return location.href;
  });
  switch (urlType) {
    case 'origin':
      const url = new URL(location);
      const origin = url.origin;
      assert_equals(
          windowLocation.substring(0, origin.length), origin, 'verify url');
      break;
    case 'blank':
p_match(windowLocation, /^blob:/, 'verify url');
      break;
    default:
       break;
    default:
       break;
    default:
       break;
    default:
      throw new Error(`Unknown urlType: ${urlType}`);
  }
});
