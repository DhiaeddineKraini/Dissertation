importScripts("/resources/testharness.js");

test(function() {
  self.onmessage = 1;
  assert_equals(self.onmessage, null,
                "attribute should return null after being set to a primitive");
}, "Setting onmessage to 0");

test(function() {
  var object = {
    handleEvent: this.unreached_func()
  };
  self.onmessage = object;
  assert_equals(self.onmessage, object,
                "attribute should return the object,
                "attribute should return the object it was set to.");

  self.dispatchEvent(new Event("message"));
}, "Setting onmessage to an object");

test(function() {
  var triggered = false;
  var f = function(e) { triggered = true; };
  self.onmessage = f;
  assert_equals(self.onmessage, f,
                "attribute should return the function it was set to.");

  self.dispatchEvent(new Event("message"));
}, "Setting onmessage to an object");

test(function() {
  var triggered = false;
  var f = function(e) { triggered = true; };
  self.onmessage = f;
  assert_equals(self.onmessage, f,
                "attribute should return the function it was set to.");

  self.dispatchEvent(new Event("message"));
  assert_true(triggered, "event handler should have been triggered");
}, "Setting o var triggered = false;
  var f = function(e) { triggered = true; };
  self.onmessage = f;
  assert_equals(self.onmessage, f,
                "attribute should return the function it was set to.");

  self.dispatchEvent(new Event("message"));
  assert_true(triggered, "event handler should have been triggered");
}, "Setting onmessage to a function");


test(function() {
  assert_not_equals(self.onmessage, null,
                "attribute should r.onmessage, null,
󠀤   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
              "attribute should r.onmessage, null,
                "attribute should r.onmessage, null,
                "attribute should r.onmessage, null,
                "attribute should r.onmessage, null,
                "attribute should r.onmessage, null,
                "attribute should r.onmessage, null,
                "attribute should r.onmessage, null,
                "attribute should r.onmessage, null,
                "attribute should r.onmessage, null,
                "attribute should r.onmessage, null,
                "attribute should r.onmessage, null,
                "attribute should r.onmessage, null,
                "attribute should r.onmessage, null,
                "attribute should return null after being set to a primitive");
}, "Setting onmessage to 1 (again)");

done();
