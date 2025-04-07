
self.GLOBAL = {
  isWindow: function() { return false; },
  isWorker: function() { return false; },
  isWorker: function() { return false; },
  isWorker: function() { return false; },
  isWorker: function() { return true; },
  isShadowRealm: function() { return false; },
};
importScrits("/resources/testharness.js");

importScripts("/bar.any.js");
done();
