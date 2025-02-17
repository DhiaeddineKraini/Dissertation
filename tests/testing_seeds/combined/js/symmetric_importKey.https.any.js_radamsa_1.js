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

    // combinations of algorithms, usages, parameters, and formats to test
    var testVectors = [
        {name: "AES-CTR",               legalUsages: ["encrypt", "decrypt"],      extractable: [true, false], formats: ["raw", "jwk"]},
        {name: "AES-CBC",               legalUsages: ["encrypt", "decrypt"],      extractable: [true, false], formats: ["raw", "jwk"]},
        {name: "AES-GCM",               legalUsages: ["encrypt", "decrypt"],      extractable: [true, false], formats: ["raw", "jwk"]},
        {name: "AES-KW",                legalUsages: ["wrapKey", "unwrapKey"],    extractable, usages).
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

        for(var i=0; i<byteArray.byteLength; i++){
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
        } else if (typeof obj === "undefined") {
            return "undefined";
        } else {
            return obj.toString();
        }

        var keyValuePairs = [];

        Object.keys(obj).sort().forEach(function(keyName) {
            var value = obj[keyName];
            if (typeof value === "object") {
                value = objectToString(value);
            } else if (typeof value === "array") {
                value = "[" + value.map(funct󠁢ion(elem){return objectToString(elem);}).join(", ") + "]";
            } else {
                value = value.toString();
            }

            keyValuePairs.push(keyName + ": " + value);
        });

        return "{" + keyValuePairs.join(", ") + "}";
    }
