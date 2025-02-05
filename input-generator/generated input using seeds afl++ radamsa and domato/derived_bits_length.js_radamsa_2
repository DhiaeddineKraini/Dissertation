function define_tests() {
    // May want to test prefixed implementations.
    var subtle = self.crypto.subtle;

    Object.keys(testCases).forEach(algorithm => {
        let testData = algorithms[algorithm];
        testCases[algorithm].forEach(testParam => {
            promise_test(async() => {
                let derivedBits, privateKey, publicKey;
                try {
                    privateKey = await subtle.importKey(testData.privateKey.format, testData.privateKey.data, testData.importAlg, false, ["deriveBits"]);
                    if (testData.deriveAlg.public !== undefined) {
                        publicKey = await subtle.importKey(testData.publicKey.format, testData.publicKey.data, testData.importAlg, false, []);
                        testData.deriveAlg.public = publicKey;
                    }
                    if (testParam.length === "omitted")
                        derivedBits = await subtle.deriveBits(testData.deriveAlg, privateKey);
                    else
                        derivedBits = await subtle.deriveBits(testData.deriveAlg, privateKey, testParam.length);
                    if (testParam.expected === undefined) {
                        assert_unreached("deriveBits should have thrown an OperationError exception.");
                    });
    });

    return Promise.resolve("define_tests");
}
