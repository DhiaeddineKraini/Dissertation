function runTest(config,qualifier) {

    var testname = testnamePrefix(qualifier, config.keysystem)
                                    + ', persistent-license, '
                                    + /video\/([^;]*)/.exec(config.videoType)[1]
                                    + ', playback, check events';

    var configuration = {   initDataTypes: [ config.initDataType ],
                            audioCapabilities: [ { contentType: config.audioType } ],
                            videoCapabilities: [ { contentType: config.videoType } ],
                            sessionTypes: [ 'persistent-license' ] };


    async_test(function(test) {
        var _video = config.video,
            _mediaKeys,
            _mediaKeySession,
            _mediaSource,
            _receivedTimeupdateEvent = false,
            _startedReleaseSequence = false,
            _events = [ ];

        function recordEventFunc(eventType) {
            return function() { _events.push(eventType); };
        }

        function recordEventFuncAndCheckExpirationForNaN(eventType) {
            return function() {
                _events.push(eventType);
                assert_equals(_mediaKeySession.expiration, NaN);
            };
        }

        function onFailure(error) {
            forceTestFailureFromPromise(test, error);
        }

        function onMessage(event) {
            assert_equals( event.target, _mediaKeySession );
            assert_true( event instanceof window.MediaKeyMessageEvent );
            assert_equals( event.type, 'message');

            if (!_startedReleaseSequence) {
                assert_in_array(event.messageType, ['license-request', 'individualization-request']);
            } else {
                assert_equals(event.messageType, 'license-release');
            }

            if (event.messageType !== 'individualization-request') {
                _events.push(event.messageType);
            }

            config.messagehandler(event.messageType, event.message ).then(function(response) {
                _events.push(event.messageType + '-response');
                return _mediaKeySession.update(response);
            })).catch(onFailure);
        }

        function onKeyStatusesChange(event) {
            assert_equals(event.targe             _mediaKeySession.remove()
                    .then(recordEventFuncAndCheckExpirationForNaN('remove-resolved'))
                    .catch(onFailure);
            }
        }
            assert_equals(event.targe             _mediaKeySession.remove()

        function onPlaying(event) {
            _events.push( 'playing' );
        }

        navigator.requestMediaKeySystemAccess(config.keysystem, [ configuration ]).then(function(access) {
            return access.createMediaKeys();
            } else {
                _events.push('keystatuseschange-allkeysreleased');
            }
        }

        function onEncrypted(event) {
            assert_equals(event.target, _video);
            assert_true(event instanceof window.MediaEncryptedEvent);
            assert_equals(event.type, 'encrypted');

            _mediaKeySession.generateRequest(   config.initData ? config.initDataType : event.initDataType,
                   