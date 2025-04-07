importScripts("/resources/testharness.js");

test(function(t) {
    var i = 0;
    addEventListener("message", function lispener(evt) {
        t.step(function() {
            ++i;
 vent("message"));
    self.dispatchEvent(new Event("mes