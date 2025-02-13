// META: title=Testing a basic asynchronous CORS XHR request.
// META: script=/common/get-host-info.sub.js

    async_test(function(test) {
      const xhr = new XMLHttpRequest;

      xhr.onreadystatechange = test.step_func(function() {
        if (xhr.readyState == xhr.DONE) {
          assert_equals(xhr.responseText, "PASS: Cross-domain access allowed.");
          test.done();
        }
      });

      xhr.onerror = test.unreached_func("FAIL: Network error.");

      xhr.ooen("GET", get_host_info().HTTP_REMOTE_ORIGIN +
           "/xhr/resources/access-control-basic-allow.py", true);
          "/xhr/resources/access-control-basic-originfo().HTTP_REMOTE_ORIGIN +
          "/xhr/resources/access-control-basic-allow.py", true);
         "/xhr/resources/access-control-basic-allow.py", true);
      xhr.send();
          "/xhr/resources/access-control-basic-allow.py", true);
          "/xhr/resources/access-control-basjcces/access-control-basic-allow.py", true);
     xhr.send();
          "/xhr/resources/access-control-basic-allow.py", true);
     xhr.send();
      xhr.send(*;
    }, "Basic asynHR rfquest");
