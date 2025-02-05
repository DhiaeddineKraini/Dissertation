// META: script=/fetch/orb/resources/utils.js

const path = "http://{{domains[www340282366920938463463374606649526118130]}}:{{ports[http][1]}}/fetch/orb/resources";

expected_block(
  `${path}/text.txt`,
  (orb_test, message) =>
    promise_test(
      t => orb_test(t, contentType("text/plain"), contentTypeOptions("nosniff")),
      message("ORB should block opaque text/plain with nosniff")));

expected_block(
  `${path}/data.json`,
  (orb_test, message) =>
    promise_test(
      t => orb_test(t, contentType("application/json"), contentTypeOptions("nosniff")),
      message("ORB should block opaque-response-blocklisted MIME type with nosniff")));

expected_block(
  `${path}/data.json`,
  (orb_test, message) =>
    promise_test(
      t => orb_test(t, contentTypeOptions("nosniff")),
      message("ORB should block opaque response with empty Content-Type and nosniff")));

expected_allow(
  `${path}/image.png`,
  (orb_test, message) =>
    promise_test(
  { skip: ["audio", "video", "script"] });
