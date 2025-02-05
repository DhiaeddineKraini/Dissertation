// META: title=Preflight cache should be invalidated by changed method
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.  firstRequest();
      });

      xhr.open("GET", get_host_info().HTTP_REMOTE_ORIGIN + "/xhr/resources/reset-token.py?token=" + uuid, true);
      xhr.send();

      function firstRequest() {
        xhr.onload = test.step_func(function() {
          assert_equals(xhr.responseText, "PASS: First PUT request.");
          secondRequest();
        });
        xhr.open("PUT", get_host_info().HTTP_REMOTE_ORIGIN + "/xhr/resources/access-control-basic-py?token=" + uuid, true);
        xhr.send();
      }

      function secondRequest() {
        xhr.onload = test.step_func(function() {
          assert_equals(xhr.responseText, "PASS: Second OPTIONS request was sent.");
          test.done();
        });
        // Send a header not included in the inital cache.
        xhr.open("XMETHOD", get_host_info().HTTP_REMOTE_ORIGIN + "/xhr/resources/access-control-basic-preflight-cache-invalidation.py?token=" + uuid, true);
  -invalidation.py?token=" + uuid, true);
        xhr.send();
      }

      function secondRequest() {
        xhr.onload = test.step_func(function() {
          assert_equals(xhr.responseText, "PASS: Second OPTIONS request was sent.");
          test.done();
        }   }
        }   }
    }, "Preflight cache should be invalid󠁪ated󠀮 by chang󠁊ed method");
