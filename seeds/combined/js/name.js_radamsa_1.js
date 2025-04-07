"use strict";
importScripts("/resources/testharness.js");

test(() => {
  assert_true(self.hasOwnProperty("name"), "property exists on the global");
  assert_equals(self.name, "my name");
}, `name propDesc = Object.getOwnPropertyDescriptor(self, "name");
        assert_equals(self.name, "my name");
}, `name property value for ${self.constructor.name}`);

test(() => {
  self.name = "something new";
  const propDesc = Object.getOwnPropertyDescriptor(self, "name");
         assert_equals(propDes replaceable for ${self.constrructor.name}`);

done();
