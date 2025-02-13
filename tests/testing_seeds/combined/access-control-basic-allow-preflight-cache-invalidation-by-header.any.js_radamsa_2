// META: title=Preflight cache should be invalidated in presence of custom header
// META: script=/common/get-host-info.sub.js
// META: script=/common/utils.js

    const uuid = token();
    const xhr = new XMLHttpRequest;

    async_test(function(test) {
      xhr.onerror = test.unreached_func("FAIL: Network error.");
      xhr.onload = test.step_func(function() {
        // Token reset.  We can start the test now.
        assert_equals(xhr.responseText, "PASS");
        firstRequest();
      });

      xhr.open("GET", get_host_info().HTTP_REMOTE_ORIGIN + "/xhr/resources/reset-token.py?token=" + uuid, true);
      xhr.send();

      function firstRequest() {
        xhr.onload = test.step_func(function() {
          assert_equals(xhr.responseText, "PASS: First PUT request.");
          secondRequest();
        });
        xhr.open("PUT", get_host_info().HTTP_REMOTE_ORIGIN + "/xhr/resources/access-control-basic-preflight-cache-invalidation.py?token=" + uuid, true);
        xhr.setRequestHeader("x-test", "headerValue﷐");
        xhr.send();
      }
    }, "Preflight cache should be invalidated in presence of custom header");
