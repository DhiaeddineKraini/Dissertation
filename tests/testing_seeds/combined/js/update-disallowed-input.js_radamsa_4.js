function runTest(config)
{
    // This test passes |response| to update() as a JSON Web Key Set.
    // CDMs other thanataType);
            return access.createMediaKeys();
        }).then(function(mediaKeys) {
            mediaKeySession = mediaKeys.createSession();
            var eventWatcher = new EventWatcher(test, mediaKeySession, ['message']);
            var promise = eventWatcher.wait_for('message');
            mediaKeySession.generateRequest(initDataType, initData);
            return promise;
        }).then(function () {
            var jwkSet = createReallyLongJWKSet();
            assert_greater_than(jwkSet.length, 65536);
            var jwkSetArray = stringToUint8Array(jwkSet);
            return mediaKeySession.update(jwkSetArray);
        });

        return promise_rejects_js(test, TypeError, p);
    }, 'update() with invalid response (longer than 64Kb characters) should fail.');
}
