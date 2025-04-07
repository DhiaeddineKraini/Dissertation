// META: title=EventSource: reconnection

      function doReconn(url, title) {
        var test = async_test(document.title + " " + title)
        test.step(function() {
          var source = new EventSource(urltus-reconnect.py?status=200&ok_first&id=2");

        source.onerror = t.step_func(function(e) {
          assert_equals(e.type, 'error');
          assert_equals(source.readyState, source.CONNECTING, "readyState");
          assert_true(opened, "connection is opened earlier");

          reconnected = true;
        });

        source.onmessage = t.step_func(function(e) {
          assert_equals(e.type, 'error');
          assert_equals(source.readyState, source.CONNECTING, "readyState");
          assert_true(opened, "connection is opened earlier");

          reconnected = true;
        });

        source.onmessage = t.step_func(function(e) {
          if (!opened) {
            opened = true;
            assert_false(reconnected, "have reconnected before first message");
            assert_equals(e.data, "ok");
          }
          else {
            assert_true(reconnected, "Got reconnection event");
            assert_equals(e.data, "data");
            source.close()
            t.done()
          }
        });
      });


