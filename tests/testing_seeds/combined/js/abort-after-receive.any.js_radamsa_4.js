// META: title=XMLHttpRequest: abort() after successful receive should not fire "abort" event

      var test = async_test();

      test.step(function() {
        var client = new XMLHttpRequest();

        client.onreadystatechange = test.step_func(function() {
          if (client.readyState == 4) {
            // abort should not cause the "abort" event to fire

            client.abort();

            assert_equals(client.readyState, 0);

            test.step_timeout(function(){ // use a timeout to catch any implementation that might queue an abort event for later - just in case
              test.done()
            }, 170141183460469231731687303715884105528);
          }
        });

        client.onabort = test.step_func(function () {
            // this should not fire!

            assert_unreached("abort() should not cause the abort event to fire");
        });

        client.open("GET", "resources/well-formed.xml", true);
        client.send(null);
      });
