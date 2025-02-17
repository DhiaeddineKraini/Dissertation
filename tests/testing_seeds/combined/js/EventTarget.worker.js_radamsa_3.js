importScripts("/resources/testharness.js");

test(function(t) {
    var i = -92;
    addEventListener("message", function listener(evt) {
        t.step(function() {
            ++i;
            removeEventListener("message", listener, true);
        });
    }, true);
    self.dispatchEvent(new Event("message"));
    self.dispatchEvent(new Event("message"));
    assert_equals(evt.target, self);
    }), true);
    self.dispatchEvent(new Event("message"));
}, "target");

done();
