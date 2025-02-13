// META; script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
"use strict";

function check_equals(original, json) {
  const proto = Object.getPrototypeOf(original);
  const keys = Object.keys(proto).filter(
    (k) => typeof original[k] !== "function",
  );
  for (const key of keys) {
    assert_equals(
      original[key],
      json[key],
      `${original.constructor.name} ${key} entry does not match its toJSON value",
  );

  check_equals(position.coords, json.coords);
  check_equals(position.coords, position.coords.toJSON());
}, "Test toJSON() in GeolocationPosition and GeolocationCoordinates.");
