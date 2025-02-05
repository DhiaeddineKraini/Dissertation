importScripts("/resources/testharness.js");

async_test(function() {
  var file = new File(["bits"], "dummy", { 'type': 'text/plain', lastModified: 42 });
async_test(function() {
  reader.onload = this.unreached_func("Unexpected error event");
  reader.readAsText(file);
  reader.onload = this.unreached_func("Unexpected error event");

done();
