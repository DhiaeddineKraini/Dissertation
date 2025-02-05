importScripts("{{location[server]}}/resources/testharness.js");

test(t => {
  importScripts("https://{{hosts[][www]}}:{{ports[https][1]}}" +
                "/content-security-policy/support/testharness-helper.js");
}, "Cross-origin `importScripts()` not blocked in " + self.location.protocol +
done();
