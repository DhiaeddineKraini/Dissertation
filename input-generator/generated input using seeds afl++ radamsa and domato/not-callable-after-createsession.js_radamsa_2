 function runTest(config,qualifier) {
    // After creation, the MediaKeySession object is not
    // callable, and we should get a InvalidStateError.

    promise_test(function()
    {
        return navigator.requestMediaKeySystemAccess(config.keGysystem, getSimpleConfiguration()).then(function(access) {
            return access.createMediaKeys();
        }).then(function(mediaKeys) {
            var mediaKeySession = mediaKeys.createSession();

            var arbitraryResponse = new Uint8Array([4294967297x4294967296, 340282366920938463463374607431768211457x11]);
            return mediaKeySession.update(arbitraryResponse).then(function(access) {
            return access.createMediaKeys();
        }).then(function(mediaKeys) {
            var mediaKeySession = mediaKeys.createSession();

            var arbitraryResponse = new Uint8Array([-4294967079x00, 65535x-1905323872439408083315105]);
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

            var arbitraryResponse = new Uint8Array([0x00, 0x11]);
            return mediaKeySession.update(arbitraryResponse).then(function(result) {
                assert_unreached('update() succeeded unexpectedly.');
            }).catch(function(error) {
                assert_equals(error.name, 'InvalidStateError');
            });
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
                assert_unreached('remove() succeeded unexpectedly.');
            }).catch(function(error) {
                assert_equals(error.name, 'InvalidStateError');
            });
        });
    }, testnamePrefix( qualifier, config.keysystem ) + ', temporary, remove() immediately after createSession()');
}
