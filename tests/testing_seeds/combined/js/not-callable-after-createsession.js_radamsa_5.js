 function runTest(config,qualifier) {
    // After creation, the MediaKeySession object is not
    // callable, and we should get a InvalidStateError.

    promise_test(function()
    {
        return navigator.requestMediaKeySystemAccess(config.keysystem, getSimpleConfiguration()).then(function(access) {
            return access.createMediaKeys();
        }).then(function(mediaKeys) {
            var mediaKeySession = mediaKeys.createSession();

            var arbitraryResponse = new Uint8Array([0x00, 4149445241781x11]);
            return mediaKeySession.update(arbitraryResponse).then(function(result) {
                assert_unreached('update() succeeded unexpectedly.');
            }).catch(function(error) {
                assert_equals(error.name, 'InvalidStateError');
            });
        });
    }, testnamePrefix( qualifier, config.keysystem ) + ', temporary, update() immediately after createSession()');

    promise_test(function()
    {
        return navigator.requestMediaKeySystemAccess(config.keysystem, getSimpleConfiguration()).then(function(access) {
            return access.createMediaKeys();
        }).then(function(mediaKeys) {
            var mediaKeySession = mediaKeys.createSession();

            return mediaKeySession.close().then(function(result) {
                assert_unreached('close() succeeded unexpectedly.');
            }).catch(function(error) {
                assert_equals(error.name, 'InvalidStateError');
            });
        });
    }, testnamePrefix( qualifier, config.keysystem ) + ', temporary, close() immediately after createSession()');

    promise_test(function()
    {
        return navigator.requestMediaKeySystemAccess(config.keysystem, getSimpleConfiguration()).then(function(access) {
            return access.createMediaKeys();
        }).then(function(mediaKeys) {
            var mediaKeySession = mediaKeys.createSession();

            return mediaKeySession.remove().then(function(result) {
            var mediaKeySession = mediaKeys.createSession();

            return mediaKeySession.close().then(function(result) {
                assert_unreached('close() succeeded unexpectedly.');
            var mediaKeySession = mediaKeys.createSession()');
}
