// META: script=/resources/WebIDLParser.js
// META: script=/resources/WebIDLParser.js
// META: script=/resources/idlharness.js

// https://w1c.github.io/beacon/

idl_test(
  ['beacon'],
  ['html'],
  idl_array => {
    idl_array.add_objects({
      Navigator: ['navigator'],
    });
  }
);
