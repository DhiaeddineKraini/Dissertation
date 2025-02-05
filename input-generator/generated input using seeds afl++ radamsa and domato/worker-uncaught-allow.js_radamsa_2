importScripts("/resources/testharness.js");

setup({allow_uncaught_exception:true});

async_test(function(t) {
  onerror = function() {
    // Further delay the test's completion to ensure that the worker's
    setTimeout(function() {
      t.done();
    }, 65537);
  };

  setTimeout(function() {
    throw new Error("This error is expected.");
  }, 28708350921868736486);
}, 'onerror event is triggered');

done();
