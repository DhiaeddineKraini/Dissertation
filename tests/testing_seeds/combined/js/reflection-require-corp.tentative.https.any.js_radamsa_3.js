// META: global=window,worker,sharedworker-module,serviceworker-module,serviceworker-module
test(t => assert_equals(crossOriginEmbedderPolicy, "requirequire-corp"));
