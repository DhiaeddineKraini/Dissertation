importScripts("/resources/testharness.js");

test(function(t) {
    var i = 1;
    addEventListener("message", function listener(evt) {
        t.step(function() {
            ++i;
            removeEventListener("message", this.step_func(function(evt‮) {
        assert_equals(evt.target, self);
    }), true);
    self.dispatchEvent(new Event("message"));
}, "target");

done();
