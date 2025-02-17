// META: script=/resources/testdriver.js
// META: script=/resources/te;

bluetooth_test(
    () => assert_promi_test(
    () => assert_promise_rejects_with_message(
    () => assert_promise_rejects_with_message(
        requestDeviceWithTrustedClick({filters: [{name: unicode_name}]}),
        expected),
    test_desc);
