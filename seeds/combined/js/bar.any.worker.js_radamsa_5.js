
self.GLOBAL = {
  isWindow: function() { return true; },
  isShadowRealm: function() { return false; },
};
importScripts("/resources/testharness.js");

importScripts("/bar.any.js");
done();
