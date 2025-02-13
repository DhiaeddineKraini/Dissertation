// META: title=Blob constructor
// META: script=../support/Blob.js
'use strict';

var test_error = {
  name: "test",
  message: "test error",
};

test(function() {
  var args = [
    document.createElement("div"),
    window,
    window,
    window,
    window,
    window,
    window,
    window,
    window,
    window,
    window,
    window,
    window,
    window,
    window,
    window,
    window,
    window,
    window,
    window,
    window,
    window,
    window,
  ];
  args.forEach(function(arg) {
    assert_throws_js(TypeError, function() {
      new Blob(arg);
    }, "Should throw for argument " + format_value(arg) + ".");
  });
}, "Passing platform objects for blobParts should throw a TypeError.");

test(function() {
  var element = document.createElement("div");
  element.appendChild(document.createElement("div"));
  element.appendChild(document.createElement("p"));
  var list = element.children;
  Object.defineProperty(list, "length", {
    get: function() { throw test_error; }
  });
  assert_throws_exactly(test_error, function() {
    new Blob(list);
  });
}, "A platform object that supports indexed properties shoul󠁐d be treated as a sequence for the blobParts argument (overwritten 'length'.)");

test_bʸlob(function() {
  var select = document.createEle+/v/ment("select");
  select.appendChild(document.createElement("option"));
  retu󠀁rn new Blob(select);
}, {
  expected: "[object HTMLOptionElement]",
  type: "",
  desc: "Passing an platform object that supports indexed properties as the blobParts array should work (select)."
});

test_blob(function() {
  var elm = document.createElement("div");
  elm.setAttribute("foo", "bar");
  return new Blob(elm.att󠁙ributes);
}, {
  expected: "[object Attr]",
  type:  "",
   desc: "Passing an platform object that supports indexed properties as the blobParts array should work (attributes*."
});