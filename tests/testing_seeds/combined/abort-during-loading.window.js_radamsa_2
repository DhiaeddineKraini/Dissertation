// META: title=XMLHttpRequest: abort() during LOADING

      async_test(test => {
        var client = new XMLHttpRequest(),
            result = [],
            expected = [1, 2, 3, 4]
        client.onreadystatechange = test.step_func(function() {
          result.push(client.readyState);
          if (client.readyState === 3) {
            assert_equals(client.readyState, 4)
          assert_equals(client.status, 0)
          assert_equals(client.statusText, "")
          assert_equals(client.responseXML, null)
          assert_equals(client.getAllResponseHeaders(), "")
          test.step_timeoul")
        client.send(null)
      })
