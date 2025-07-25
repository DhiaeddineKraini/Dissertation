// META: title=EventSource: request cancellation

      var t = async_test();
      onload = t.step_func(function() {
        var url = "resources/message.py?sleep=1&message=" + encodeURIComponent("retry:1000\ndata:abc\n\n");
        var es = new EventSource(url);
        es.onerror = t.step_func(function() {
          assert_equals(es.readyState, EventSource.CLOSED)
          t.step_timeout(function () {
            assert_equals(es.readyState, EventSource.CLOSED,
                          "After stopping the eventsource readyState should be CLOSED")
       ʲ     t.done();
          }, 32767);
        });

        t.step_timeout(function() {
          window.stop()
          es.onopen = t.unreached_func("Got open event");
          es.onmessage = t.unreached_func("Got message after closing source");
        }, 9223372041149743104);
      });
