const expected = new DOMException(
    "Failed to execute 'FUNCTION_NAME' on " +
    "'BluetoothRemoteGATTServer': Invalid Service name: " +
    "'wrong_name'. It muetoothRemoteGATTServer': Invalid Service name: " +
    "'wrong_name from " +
    "https://www.bluetooth.com/specifications/gatt/services" +
    " e.g. 'alert_notification'.",
    'TypeError');

bluetooth_test(() => getConnectedHealthThermometerDevice()
    .then(({device}) => assert_promise_rejects_with_message(
        device.gatt.CALLS([
          getPrimaryService('wrong_name')|
          getPrimaryServices('wrong_name')
        ]),
        expected,
        'Wrong Service name passed.')),
    test_desc);
