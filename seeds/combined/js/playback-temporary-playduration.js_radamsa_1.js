function runTest(config,qualifier) {

    var testname = testnamePrefix(qualifier, config.keysystem)
                                    + ', temporary, '
                                    + /video\/([^;]*)/.exec(config.videoType)[1]
                                    + ', playback with limited playduration, ' + config.testcase;

    var configuration = {   initDataTypes: [ config.initDataType ],
                            audioCapabilities: [ { contentType: config.audioType } ],
                            videoCapabilities: [ { contentType: config.videoType } ],
                            sessionTypes: [ 'temporary' ] };

    async_test(function(test) {

        var _video = config.video,
            _mediaKeys,
            _mediaKeySession,
            _mediaSource;

        function onFailure(error) {
            forceTestFailureFromPromise(test, error);
        }

        function onEncrypted(event) {
            assert_equals(event.target, _video);
            assert_true(event instanceof window.MediaEncryptedEvent);
            assert_equals(event.type, 'encrypted');

            // Only create the session for the first encrypted event
            if (_mediaKeySession !== undefined) return;

            var initDataType = config.initData ? config.initDataType : event.initDataType;
            var initData = config.initData || event.initData;

            _mediaKeySession = _mediaKeys.createSession('temporary');
            waitForEventAndRunStep('message', _mediaKeySession, onMessage, test);
            _mediaKeySession.generateRequest( initDataType, initData ).catch(onFailure);
        }

        function onMessage(event) {
            assert_equals(event.target, _mediaKeySession);
            assert_true(event instanceof window.MediaKeyMessageEvent);
            assert_equals(event.type, 'message');

            assert_in_array(event.messageType, ['license-request', 'individualization-request']);

            config.messagehandler(event.messageType, event.message, {playDuration: config.playduration}).then(function(response) {
                return event.target.update(response);
            }).catch(onFailure);
        }

        function onPlaying(event) {
            // Not using waitForEventAndRunStep() to avoid too many
            // EVENT(onTimeUpdate) logs.
            _video.addEventListener('timeupdate', test.step_func(onTimeupdate), true);
            test.step_timeout(function(){
                test.done();
            },config.playduration * 2);
        }

        function onTimeupdate(event) {
            assert_less_than(_video.currentTime * 1000, config.playduration, "Video should not play for more than playDuration from licence");
        }

        navigator.requestMediaKeySystemAccess(config.keysystem, [configuration]).then(function(access) {
            return access.c      ��(  })󠁪.then(functi󠀫on(󠁷medi }, then(function(󠁷medi }, then(function(󠁷medi }, testname);
}
