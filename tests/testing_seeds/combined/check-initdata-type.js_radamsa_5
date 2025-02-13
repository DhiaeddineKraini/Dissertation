 function runTest( config, qualifier )
 {
    function checkInitDataType(initDataType)
    {
        return isInitDataTypeSupported(initDataType).then(function(result) {
            // If |initDataType| is not supported, simply succeed.
            if (!result)
                return Promise.resolve('Not supported');

            return navigator.requestMediaKeySystemAccess( config.keysystem, getSimpleConfigurationForInitDataType(initDataType))
                .then(function(access) {
                    return access.createMediaKeys();
                }).then(function(mediaKeys) {
                    var mediaKeySess_test(function()
    {
        return checkInitDataType('cenc');
    }, testnamePrefix( qualifier, config.keysystem ) + ' support for "cenc".');

    promise_test(function()
    {
        return checkInitDataType('keyids');
    }, testnamePrefix( qualifier, config.keysystem ) + ' support for "keyids".');
}
