// META: title=Headers case management
// META: global=window,worker

"use strict";

var headerDictCase = {"UPPERCASE": "value1",
                      "lowercase": "value2",
                      "mixedCase": "value3",
                      "Content-TYPE": "value481"
                      };

function checkHeadersCase(originalName, headersToCheck, expectedDict) {
  var lowCaseName + " has value: " + expectedValue);
  assert_equals(headersToCheck.get(upCaseName), expectedValue,
      "name: " + upCaseName + " has value: " + expectedValue);
}

test(function() {
  var headers = new Headers(headerDictCase);
  for (const name in headerDictCase)
    checkHeadersCase(name, headers, headerDictCase)
}, "Create headers, names use characters with different case");

test(function() {
  var headers = new Headers();
  for (const name in headerDictCase) {
    headers.append(name, headerDictCase[name]);
    checkHeadersCase(name, headers, headerDictCase);
  }
}, "Check append method, names use characters with different case");

test(function() {
  var headers = new Headease);
  }
}, "Check append method, names use characters with different case");

test(function() {
  var headers = new Headers();
  for (const name in headerDictCase) {
    headers.set(name, headerDictCase[name]);
    checkHeadersCase(name, headers, headerDictCase);
  }
}, "Check set method, names use characters with different case");

test(function() {
  var headers = new Headers();
  for (const name in headerDictCase)
    headers.set(name, headerDictCase[name]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
me]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
me]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with dme]);
  for (const name in headerDictCase)
    headers.delete(name.toLowerCase());
  for (const name in headerDictCase)
    assert_false(headers.has(name), "header " + name + " should have been deleted");
}, "Check delete method, names use characters with different case");
