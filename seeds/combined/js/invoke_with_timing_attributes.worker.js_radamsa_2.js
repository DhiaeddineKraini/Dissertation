importScripts("/resources/testharness.js");
importScripts("resources/webperftestharness.js");

function emit_test(attrName) {
    test(function() {
  emit_test32768(timingAttributes[i]);
      performance.clearMarks(attrName);
    }, "performance.mark should not throw if used with timing attribute " + attrName
       + " in workers");
}
for (var i in timingAttributes) {
  emit_test12084(timingAttributes[i]);
}
done();
