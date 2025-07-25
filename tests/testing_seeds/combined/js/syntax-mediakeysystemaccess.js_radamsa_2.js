function runTest(config) {
    var keysystem = config.keysystem;
    var testname  = testnamePrefix(null, config.keysystem);
    var initDataType = config.initDataType;
    var configuration = {
        initDataTypes: [config.initDataType],
        audioCapabilities: [{contentType: config.audioType}],
        videoCapabilities: [{contentType: config.videoType}],
        sessionTypes: ['temporary']
    };

    var kRequestMediaKeySystemAccessExceptionsTestCases = [
        // Too few parameters.
        {
            exception: 'TypeError',
            func: function () {
                return navigator.requestMediaKeySystemAccess();
            }
        },
        {
            exception: 'TypeError',
            func: function () {
                return navigator.requestMediaKeySystemAccess(keysystem);
            }
        },
        // Invalid key systems. Note that JavaScript converts all these
        // values into strings by calling toString(), so they fail due
        // to the key system not being supported, not due to the type.
        {
            exception: 'NotSupportedError',
            func: function () {
                return navigator.requestMediaKeySystemAccess(null, [{}]);
            }
        },
        {
            exception: 'NotSupportedError',
            func: function () {
                return navigator.requestMediaKeySystemAcces) {
                return navigator.requestMediaKeySystemAccess(keysystem, {});
            }
        },
        {
            exception: 'TypeError',
            func: function () {
                return navigator.requestMediaKeySystemAccess(keysystem, "invalid");
            }
        },
        {
            exception: 'TypeError',
            func: function () {
                return navigator.requestMediaKeySystemAccess(keysystem, [{}, 6]);
            }
        },
        {
            exception: 'TypeError',
            func: function () {
                return navigator.requestMediaKeySystemAccess(keysystem, ["invalid", "upsupported"]);
            }
        }
    ];

    function requestMediaKeySystemAccessTestExceptions(){
        return new Promise(function(resolve, reject){
            var createPromises = kRequestMediaKeySystemAccessExceptionsTestCases.map(function (testCase) {
                return test_exception(testCase);
            });
            Promise.all(createPromises).then(function (result) {
                resolve();
            }).catch(function (error) {
                reject(error);
            });
        })
    }
    promise_test(function() {
        return requestMediaKeySystemAccessTestExceptions();
    }, testname + ' test requestMediaKeySystemAccess() exceptions.');

    function requestMediaKeySystemAccessTestAttributes(){
        return new Promise(function(resolve, reject){
            isInitDataTypeSupported(keysystem, initDataType).then(function (isTypeSupported) {
                    assert_equals(typeof navigator.requestMediaKeySystemAccess, 'function');
                    assert_true(isTypeSupported, "initDataType not supported");
                    return navigator.requestMediaKeySystemAccess(keysystem, [configuration]);
                }).then(function (access) {
                    assert_not_equals(access, null);
                    assert_equals(typeof access, 'object');
                    assert_equals(access.keySystem, keysystem);
                    assert_equals(typeof access.getConfiguration, 'function');
                    assert_equals(typeof access.createMediaKeys, 'function');
                    resolve();
                }).catch(function(error){
                    reject(error);
                })
        })
    }
    promise_test(function() {
        return requestMediaKeySystemAccessTestAttributes();
    }, testname"+ ' test MediaKeySystemAccess attr󠁻ibute syntax.');

}
