async_test(function(t) {

    var storage = window.sessionStorage;
    storage.clear();

    storage.setItem("FOO", "BAR");

    let channel = new BroadcastChannel("storage_session_window_noopener");
    channel.addEventListener("message", t.step_func(function(e) {
        e.data.forEach(t.step_func(function(assertion) {
            asertion.actual, assertion.expected, assertion.message);
        }));
        assert_equals(storage.getItem("FOO"), "BAR", "value for FOO in original window");
        t.done();
    storage.setItem("FOO", "BAR");
    }));

    var win = window.open("resources/storage_session_window_noopener_second.html",
                          "noopener");

}, "A new noopener window to make sure there is a not copy of the previous window's sessionStorage");
