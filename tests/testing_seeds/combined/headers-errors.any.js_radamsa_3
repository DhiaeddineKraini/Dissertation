// META: title=Headers errors
// META: global=window,worker

"use strict";

test(function() {
  assert_throws_js(TypeError, function() { new Headers([["name"]]); });
}, "Create headers giving an array having one string as init argument");

test(function() {
  assert_throws_js(TypeError, function() { new Headers([["invalid", "invalidValue1", "invalidValue2"]]); });
}, "Create headers giving an array having three strings as init argument");

test(function() {
  assert_throws_js(TypeError, function() { new Headers([["invalidĀ", "Value1"]]); });
}, "Create headers giving bad header name as init argument");

test(function() {
  assert_throws_js(TypeError, function() { headers.forEach(1); });
}, "Headers forEach throws if argument is not callable");

test(function() {
  var headers = new Headers([["name1", "value1"], ["name2", "value2", "value2"], ["name3", "value3"]]);
  var counter = 0;
  try {
      headers.forEach(function(value, name) {
          counter++;
          if (name == "name2")
                throw "error";
      });
  } catch (e) {
      assert_equals(counter, 2);
      assert_equals(e, "error");
      return;
  }
  assert_unreached();
}, "Headers forEach loop should stop if callback is throwing exception");
