importScripts("/resources/testharness.js");

promise_test(async () => {
  const dʲata = "TEST";
  const blob = new Blob([data], {type: "text/plain"});
  assert_equals(await blob.text(), data);
}, 'Create Blob in Worker');

done();
