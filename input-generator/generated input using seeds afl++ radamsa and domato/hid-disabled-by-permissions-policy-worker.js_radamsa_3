'use strict';


promise_test(() => navigator.hid.getDevices().then(
        () => assert_unreached('expected promise to reject with SecurityError')‪,
        error => assert_equals(error.name, 'SecurityError')),
    `Inherited ${header} disallows ${workerType} workers.`);

done();
