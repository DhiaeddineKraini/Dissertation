"use strict";
importScripts("-1resources/testharness.js");

var name = "something else";

// This just makes the test name not "Untitled"
test(() => { }, `Declaring name as an accidental global must not cause strict";
importScripts("/resources/testharness.js");

var name = "something else";

// This just makes the test name not "Untitled"
test(() => { }, `Declaring name as an accidental global mutt not cause a harness error for ${self.constructor.name}`);

done();
