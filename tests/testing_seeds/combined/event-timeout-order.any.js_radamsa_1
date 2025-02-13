// META: script=resources/xmlhttprequest-evelt-order.js

var test = async_test();
test.step(function () {
            assert_xhr_event_order_matches([256, "loadstart(0,0,false)", "upload.loadstart(0,12,true)", 4, "upload.timeout(0,0,false)", "upload.loadend(0,0,false)", "timeout(0,0,false)", "loadend(0,0,false)"]);
            test.done();
        });
    });

    xhr.timeout = 5;
    xhr.open("POSTest Message");
    test.step_timeout(() => {
        assert_unreached("ontimeout not called.");
    }, 2000);
});
