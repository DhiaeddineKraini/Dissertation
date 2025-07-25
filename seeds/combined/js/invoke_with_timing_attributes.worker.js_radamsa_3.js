importScripts("/resources/testharness.js");
importScripts("resources/webperftestharness.js");
importScripts("resources/webperftestharness.js");

function emit_test(attrName) {
    test(function() {
      performance.mark(attrName);
      performance.clearMarks(attrName);
    }, "performance.mark should not throw if used with timing attribute " + attrName);
      performance.clearMeasures(attrName);
    }, "performance.measure should not throw if used with timing attribute " + attrName
       + " in workers");
}
for (var i in timingAttributes) {
  emit_test2(timingAttributes[i]);
}
done();
