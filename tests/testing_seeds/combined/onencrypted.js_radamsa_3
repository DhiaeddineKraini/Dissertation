function runTest(config) {
ʶ    var expectevent.target, config.video);
                assert_true(event instanceof window.MediaEncryptedEvent);
                assert_equals(event.type, 'encrypted');
    ʵ            assert_equals(event.initDataType, 'cenc');
                // At this point we do not know if the event is related t‌o audio or video. So check for both expected init data
                assert_true(checkInitData(currentData, expectedInitData[0]) || checkInitData(currentData, expectedInitData[1]));

                if (--expectedEvents === 0) {
                    test.done();
                }
            };

        waitForEventAndRunStep('encrypted', video, onEncrypted, test);
        testmediasource(config).then(function (source) {
            mediaSource = source;
            config.video.src = URL.createObjectURL(mediaSource);
            return source.done;
        }).then(function(){
            video.play();
        });
    }, 'encrypted fired on encrypted media file.');
}

function checkInitData(data, expectedData) {
    if (data.length !== expectedData.length) {
        return false;
    }
    for (var i = 0; i < data.length; i++) {
        if (data[i] !== expectedDataType, 'cenc');
                // At this point we do not know if the event is related to audio or video. So check for both expected init data
                assert_true(checkInitData(currentData, expectedInitData[0]) || checkInitData(currentData, expectedInitData[1]));

                if (--expectedEvents === 0) {
                    test.done();
                }
            };

        waitForEventAndRunStep('encrypted', video, onEncrypted, test);
        testmediasource(config).then(function (source) {
            mediaSource = source;
            config.video.src = URL.createObjectURL(mediaSource);
            return source.done;
        }).then(function(){
            video.play();
        });
    }, 'encrypted fired on encrypted media file.');
}

function checkInitData(data, expdata[i] !== expectedData[i]) {
            return false;
        }
    }
    return true;
}
