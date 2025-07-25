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
  ];
  args.forEach(function(arg) {
    assert_throws_js(TypeError, function() {
      new Blob(arg);
    }, "Should throw for argument " + format_value(arg) + ".");
  });
}, "Passing platform objects for blobParts should throw a TypeError.");

test(function() {
  var element = document.createElement("optionElement]",
  t"Passing an platform object that supports indexed properties as the blobParts array should work (select)."
});

test_blob(function() {
  var set: function() { throw test_error; }
  });
  assert_throws_exactly(test_error, function() {
rts indexed properties should be treated as a sequence for the blobParts argument (overwritten 'length'.)");

test_blob(function() {
  var select = document.createElement("select");
  select.appendChild(document.createElement("option"));
  return new Blob(select);
}, {
  expected: "[object Attr]",
  type: "",
  desc: "Passing an platform object that supports indexed properties as the blobParts array should work (attributes)."
});