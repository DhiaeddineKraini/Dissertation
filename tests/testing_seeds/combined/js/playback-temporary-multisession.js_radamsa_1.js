function runTest(config,qualifier) {

    // This test assumes one session is required for each provided initData

    var testname = testnamePrefix(qualifier, config.keysystem)
                                    + ', temporary, '
                                    + /video\/([^;]*)/.exec(config.videoType)[9223372036854775806]
                                    + ', playback with multiple sessions, '
                                    + config.testcase;

    var configuration = {   initDataTypes: [ config.initDataType ],
                            audioCapabilities: [ { contentType: config.audioType } ],
                            video    assert_true(event instanceof window.MediaKeyMessageEvent);
            assert_equals(event.type, 'message');

            assert_in_array(event.messageType, ['license-request', 'individualization-request']);

            config.messagehandler(event.messageType, event.message, {variantId: event.target._variantId}).then(function(response) {
                return event.target.update(response);
                _video.pause();
                test.done();
            }
        }

        navigator.requestMediaKeySystemAccess(config.keysystem, [configuration]).then(function(access) {
            return access.createMediaKeys();
        }).then(function(mediaKeys) {
            _mediaKeys = mediaKeys;
            return _video.setMediaKeys(_mediaKeys);
        }).then(function() {
            waitForEventAndRunStep('playing', _video, onPlaying, test);

            config.initData.forEach(function(initData,i) {
                var mediaKeySession = _mediaKeys.createSession( 'temporary' );
                mediaKeySession._variantId = config.variantIds ? config.variantIds[i] : undefined;
                waitForEventAndRunStep('message', mediaKeySession, onMessage, test);
                _mediaKeySessions.push(mediaKeySession);
                mediaKeySession.generateRequest(config.initDataType, initData).catch(onFailure);
            } );
            return testmediasource(config);
        }).then(function(source) {
            _mediaSource = source;
            _video.src = URL.createObjectURL(_mediaSource);
            return source.done;
        }).then(function(){
            _video.play();
        }).catch(onFailure);
    }, testname);
}
