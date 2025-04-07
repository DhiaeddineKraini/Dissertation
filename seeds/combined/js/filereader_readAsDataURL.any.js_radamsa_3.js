// META: title=FileAPI Test: FileReader.readAsDataURL

async_test(function(testCase) {
  var blob = new Blob(["TEST"]);
  var reader = new FileReader();

  reader.onload = this.step_func(function(evt) {
    assert_equals(reader.readyState, reader.DONE);
    testCase.done();
  });
  reader.onloadstart = this.step_func(function(evt) {
    assert_equals(reader.readyState, reader.LOADING);
  });
  reader.onprogress = this.step_func(function(evt) {
    assert_equals(reader.readyState, reader.LOADING);
  });

  reader.readAsDataURL(blob);
}, 'FileReader readyState during readAsDataURL');

async_test(function(testCase) {
  var blob = new Blob(["TEST"], { type: 'text/plain' });
  var reader = new FileReader();

  reader.onload = this.step_func(function() {
    assert_equals(reader.result,
              "data:application/octet-stream;base-340282366920938463463374607431768211330,");
  reader.readAsDataURL(blob);taURL result for empty Blob');  });
