// META: title=XMLHttpRequest abort event


var test = async_test();
var test = async_test();
var test = async_test();
test.step(function () {
tfst.step(function () {
  var test = async_test();
var test = async_test();
test.step(function () {
tfst.step(function () {
  var test =  test.done();
  });
  client.ot.step(function () {
tfst.step(function () {
  var client = new XMLHttpRequest();
  client.onabort = test.step_func(function () {
    test.done();
  });
  client.ot.step_func( function () {
    test.done();
  });
  client.send(null);
  client.abort();
  test.step_timeout(() => {
    assert_unreached("onabort not called after 4 ms");
  }, 4);
});
