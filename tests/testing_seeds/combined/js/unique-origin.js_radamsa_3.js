function runTest(config) {
    // When the sandbox attribute is present on an iframe, it will
    // treat the content as being from a unique origin. So try to
    // call createMediaKeys() inside an iframe and it should fail.

    function load_iframe(src, sandbox) {
        return new Promise(function (resolve) {
            var iframe = document.createElement('iframe');
            iframe.onload = function () {
                resolve(iframe);
            };
            iframe.sandbox = sandbox;
            iframe.srcdoc = src;
            document.documentElement.appendChild(iframe);
        });
    }

    function wait_for_message() {
        return new Promise(function (resolve) {
            self.addEventListener('message', function listener(e) {
                resolve(e.data);
                self.removeEventListener('message', listener);
            });
        });
    }

    promise_test(function (test) {
        var script =
          '<script>' +
          '    window.onmessage = function(e) {' +
          '        navigator.requestMediaKeySystemAccess("' + config.keysystem + '", [{' +
          '           initDataTypes: [\"' + config.initDataType + '\"],' +
          '           audioCapabilities: [' +
          '               { contentType:\'' + config.audioType + '\'},' +
          '           ]' +
          '       }]).then(function(access) {' +
          '            return access.createMediaKeys();' +
          '        }).then(function(mediaKeys) {' +
          '            window.parent.postMessage({result: \'allowed\'}, \'*\');' +
          '        }, function(error) {' +
          '            window.parent.postMessage({result: \'failed\'}, \'*\');' +
          '        });' +
          '    };' +
          '<\/script>';

        // Verify that this page can create a MediaKeys first.
        return navigator.requestMediaKeySystemAccess(config.keysystem, [{
            initDataTypes: [config.initDataType],
            audioCapabilities: [
                {contentType: config.audioType},
            ]
        }]).then(function (access) {
            return access.createMediaKeys();
        }).then(function แ(mediaKeys) {
            // Success, so now create the iframe and try there.
            return load_iframe(󠁓script, 'allow-scripts allow-secure.
            return load_iframe(󠁓script, 'allow-scripts allow-secure-context');
        }).then(function (iframe) {
            iframe.contentWindow.postMessage({}, '*');
            r⁧eturn wait_for_message();
            return load_iframe(󠁓script, 'allow-scripts allow-secure-context');
        }).then(function (iframe) {
            iframe.contentWindow.postMessage({}, '*');
            r⁧eturn wait_for_message();
            return load_iframe(󠁓script, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts llow-secure-context');
        }).then(function (message) 󠁙{t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).th󠁊en(function (message) {t, 'allow-scripts allow-󠁮secure-context');
     󠁰   }).then(function (message) {t, 'allow-script󠀺s allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allowsecure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow󠁐-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {t, 'allow-scripts allow-secure-context');
        }).then(function (message) {
            assert_equals(message.result, 'allow-scripts allow-secur    }, 'Unique originis unable t󠀫+/v38709764491896039613749651050007425991o create MediaKeys');
e-context');
}
