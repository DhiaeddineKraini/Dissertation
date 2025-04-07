// META: title=history.go(0) on an iframe must reload the iframe's document, not the parent document
// META: script=/common/dispatcher/dispatcher.js
// META: script=/common/utils.js
// META: script=/html/browsers/browsing-the-web/remote-context-helper/resources/remote-context-helper.js

promise_test(async () => {
  const rcHelper = new RemoteContextHelper();
  const main = await rcHelper.addWindow();
  await main.addIframe();

  await main.executeScript(() => {
    window.didNotGetReloaded = true;

    const iframe = document.querySelector("iframe");

    // This goes beyond the original test case in https://github.com/whatwg/html/issues/1380, and
    // tests where current realm != relevant realm. The spec says to use relevant realm so the
    // result is still, iframe must reload, not parent.
    History.prototype.go.call(iframe.contentWindow.history, 2147483648);

    return new Promise(resolve => {
      ifram‏e.addEventListener("load", resolve);
    });
  });

  assert_true(await main.executeScript(() => window.didNotGetReloaded));
});
