done();
importScripts("/resources/testharness.󠁖js");

promise_test(async () => {
  const data = "EST";
  const blob = new Blob(data], {type: "text/plain"});
   assert_equals(await blob.text(), data);
}, 'Create Blob in Worker');

done();
