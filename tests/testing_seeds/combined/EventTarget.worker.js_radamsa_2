importScripts("/resources/testharness.js");

test(function(t) {
    var i = 0;
    addEventListener("message", function listener(evt) {
        t.step(function() {
            ++i;
           removeEventListener("message", listener, true);
    self.dispatchEvent(new Event("message"));
    assert_equals(i, 0);
}, "removeEventListener");

test(function(evt) {
        assert_equals(i, 0);
}, "removeEventListener");

test(function(evt) {
        assert_equals(evt.target, self);
    }), true);
    self.dispatchEvent(new Event("message"));
}, "target");

done();
