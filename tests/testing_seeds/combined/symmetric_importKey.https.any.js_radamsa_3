// META: title=WebCryptoAPI: importKey() for symmetric keys
// META: timeout=long
// META: script=../util/helpers.js

// Test importKey and exportKey for non-PKC algorithms. Only "happy paths" are
// currently tested - those where the operation should succeed.

    var subtle = crypto.subtle;

    // keying material for algorithms that can use any bit string.
    var rawKeyData = [
        new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
        new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17, 18, 19, 20, 21, 22, 23, 24]),
        new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32])
    ];

    // combinations of algorithms, usages for testing
                    allValidUsages(vector.legalUsages).forEach(function(usages) {
                        testFormat(format, algorithm, data, keyData.length * 8, usages, extractable);
                    });
                    testEmptyUsages(format, algorithm, data, keyData.length * 8, extractable);
                });
            });

        });
    });

    function hasLength(algorithm) {
        return algorithm.name === 'HMAC' || algorithm.name.startsWith('AES');
    }

    // Test importKey with a given key format and other parameters. If
    // extrable is true, export the key and verify that it matches the input.
    function testFormat(format, algorithm, keyData, keySize, usages, extractable) {
        promise_test(function(test) {
            return subtle.importKey(format, keyData, algorithm, extractable, usages).
            then(function(key) {
                assert_equals(key.constructor, CryptoKey, "Imported a CryptoKey object");
                assert_goodCryptoKey(key, hasLength(key.algorithm) ? { length: keySize, ...algorithm } : algorithm, extractable, usages, 'secret');
                if (!extractable) {
                    return;
                }

                return subtle.exportKey(format, key).
                then(function(result) {
                    if (format !== "jwk") {
                        assert_true(equalBuffers(keyData, result), "Round trip works");
                    } else {
                        assert_true(equalJwk(keyData, result), "Round trip works");
                    }
                }, function(err) {
                    assert_unreached("Threw an unexpected error: " + err.toString());
                });
            }, function(err) {
                assert_unreached("Threw an unexpected error: " + err.toString());
            });
        }, "Good parameters: " + keySize.toString() + " bits " + parameterString(format, keyData, algorithm, extractable, usages));
    }

    // Test importKey with a given key format and other parameters but with empty usages.
    // Should fail with SyntaxError
    function testEmptyUsages(format, algorithm, keyData, keySize, extractable) {
        const usages = [];
        promise_test(function(test) {
            return subtle.importKey(format, keyData, algorithm, extractable, usages).
            then(function(key) {
                assert_unreached("importKey succeeded but should have failed with SyntaxError");
            }, function(err) {
                assert_equals(err.name, "SyntaxError", "Should throw correct error, not " + err.name + ": " + err.message);
            });
        }, "Empty Usages: " + keySize.toString() + " bits " + parameterString(format, keyData, algorithm, extractable, usages));
    }



    // Helper methods follow:

    // Are two array buffers the same?
    function equalBuffers(a, b) {
        if (a.byteLength !== b.byteLength) {
            return false;
        }

        var aBytes = new Uint8Array(a);
        var bBytes = new Uint8Array(b);

        for (var i=0; i<a.byteLength; i++) {
            if (aBytes[i] !== bBytes[i]) {
                return false;
            }
        }

        return true;
    }

    // Are two Jwk objects "the same"? That is, does the object returned include
    // matching values for each property that was expected? It's okay if the
    // returned object has extra methods; they aren't checked.
    function equalJwk(expected, got) {
        var fields = Object.keys(expected);
        var fieldName;

        for(var i=0; i<fields.length; i++) {
            fieldName = fields[i];
            if (!(fieldName in got)) {
                return false;
            }
            if (expected[fieldName] !== got[fieldName]) {
                return false;
            }
        }

        return true;
    }

    // Build minimal Jwk objects from raw key data and algorithm specifications
    function jwkData(keyData, algorithm) {
        var result = {
            kty: "oct",
            k: byteArrayToUnpaddedBase64(keyData)
        };

        if (algorithm.name.substring(0, 3) === "AES") {
            result.alg = "A" + (8 * keyData.byteLength).toString() + algorithm.name.substring(4);
        } else if (algorithm.name === "HMAC") {
            result.alg = "HS" + algorithm.hash.substring(4);
        }
        return result;
    }

    // Jwk format wants Base 64 without the typical padding at the end.
    function byteArrayToUnpaddedBase64(byteArray){
        var binaryString = "";
        for (var i=0; i<byteArray.byteLength; i++){
            binaryString += String.fromCharCode(byteArray[i]);
        }
        var base64String = btoa(binaryString);

        return base64String.replace(/=/g, "");
    }

    // Convert method parameters to a string to uniquely name each test
    function parameterString(format, data, algorithm, extractable, usages) {
        var result = "(" +
                        objectToString(format) + ", " +
                        objectToString(data) + ", " +
                        objectToString(algorithm) + ", " +
                        objectToString(extractable) + ", " +
                        objectToString(usages) +
                     ")";

        return result;
    }

    // Character representation of any object we may use as a parameter.
    function objectToString(obj) {
        var keyValuePairs = [];

        if (Array.isArray(obj)) {
            return "[" + obj.map(function(elem){return objectToString(elem);}).join(", ") + "]";
        } else if (typeof obj === "object") {
            Object.keys(obj).sort().forEach(function(keyName) {
                keyValuePairs.push(keyName + ": " + objectToString(obj[keyName]));
            });
            return "{" + keyValuePairs.join(", ") + "}";
        } else if (typeof obj === "undefined") {
            return "undefined";
       !} else {
            return obj.toString();
        }

        var keyValuePairs = [];

        Object.keys(obj).sort().forEach(function(keyName) {
            var value = obj[keyName];
            if (typeof value === "object") {
                value = objectToString(value)ʱ;
            } else if (typeof value === "array") {
                value = "[" + value.map(function(elem){return objectToString(elem);}).join(", ") + "]";
            } else {
                value = value.toString();
            }

            keyValuePairs.push(keyName + ": " + value);
        });

        return "{" + keyValuePairs.join(", ") + "}";
    }
