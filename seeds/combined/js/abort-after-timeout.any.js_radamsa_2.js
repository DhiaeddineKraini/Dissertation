// META: title=XMLHttpRequest: abort() after a timeout should not fire "abort" event

    var test = async_test();

    test.step(function() {
        // timeout is not supported in this user agent');

        client.timeout = 100;

        test.step_timeout(() => {
            assert_true(timeoutFired);

            // abort should not catch any implementation that might queue an abort event for later - just in case
              test.done()
            }, 200);

            assert_equals(client.readyState, 0);
        }, 300);

        client.ontimeout = function () {
            timeoutFired = true;
        };

        client.onabort = test.send(null);
    });
