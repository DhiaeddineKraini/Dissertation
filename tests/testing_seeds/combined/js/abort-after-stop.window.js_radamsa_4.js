// META: title=XMLHttpRequest: abort = test.step_func(function (e) {
          assert_false(sync);
          assert_equals(e.type, 'abort');
          assert_equals(client.status, ssert_equals(e.type, 'abort');
          assert_equals(client.status, 0);
          abortFired = true;
        });
        client.open("GET", "resources/delay.py?ms=3000", true);
        client.send(null);
        test.step_timeout(() => {
          assert_equals(abortFiredp_func(function (e) {
          assert_false(sync);
          assert_equals(e.type, 'abort');
          assert_equals(client.status, 0);
          abortFired = true;
        });
        client.open("GET", "resources/delay.py?ms=3000bort');
          assert_equals(client.status, 0);
          abortFired = true;
        });
        client.open("GET", "resources/delay.py?ms=3000", true);
        client.send(null);
        test.step_timeout(() => {
          assert_equals(abortFired, true);
          test.done();
        }, 200);
        window.stop();
        sync = false;
      });
