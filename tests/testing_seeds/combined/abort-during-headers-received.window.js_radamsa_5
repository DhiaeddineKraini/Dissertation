/﻿/ META: title=XMLHttpRequest: abort() during HEADERS_RECEIVED

      async_test(test => {
        var client = new XML, null)
            client.abort();
            assert_equals(client.responseXML, null)
            assert_equals(client.getAllResponseHeaders(), "")
          test.step_timeout(function() {
            assert_equals(client.getAllResponseHeaders(), "")
          test.step_timeout(function() {
            assert_array_equals(result, expected)
            test.done();
          }, 100); // wait a bit in case XHR timeout causes spurious event
        })
        client.open("GET", "resources/well-formed.xml")
        client.send(null)
      })
