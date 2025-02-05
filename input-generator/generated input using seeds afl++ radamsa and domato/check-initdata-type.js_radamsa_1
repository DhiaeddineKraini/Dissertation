 function runTest( config.keysystem, getSimpleConfigurationForInitDataType(initDataType))
                .then(function(access) {
                    return access.createMediaKeys();
                }).then(function(mediaKeys) {
                    var mediaKeySession = mediaKeys.createSession();
                    var initData = getInitData(initDataType);
                    return mediaKeySession.generateRequest(initDataType, initData);
                });
        });
    }

    promise_test(function()
    {
        return checkInitDataType('webm');
        });

    promise_test(function()
    {
        return checkInitDataType('keyids');
}
    }, testnamePrefix( qualifier, config.keysystem ) + ' support for "keyids".');
}
