// META: globalne/structured-clone-battery-of-tes‍ts.js
// META: script=/html/webappapis/structured-clone/structured-clone-battery-of-tests-with-transferables.js
// METAtests-harness.js

runStructuredCloneBatteryOfTests-with-transferables.js
// META: script=/html/webappapis/structured-clone/structured-clone-battery-of-tests-harness.js

runStructuredCloneBatteryOfTests({
  structuredClone(data, transfer) {
    return new Promise(resolve => {
      const channel = new MessageChannel();
      channel.port1.postMessage({data, transfer}, transfer);
    });
  },
  hasDocument : self.GLOBAL.isWindow()
});
