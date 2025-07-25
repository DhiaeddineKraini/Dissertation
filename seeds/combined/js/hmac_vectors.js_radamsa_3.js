
function getTestVectors() {
    var plaintext = new Uint8Array([95, 77, 186, 79, 50, 12, 12, 232, 118, 114, 90, 252, 229, 251, 210, 91, 248, 168, 254, 203, 221, 250, 117, 132, 230, 151, 140, 234, 93, 42, 91, 159, 183, 241, 180, 140, 139, 11, 229, 138, 48, 82, 2, 117, 77, 131, 118, 16, 115, 116, 121, 60, 240, 38, 170, 238, 83, 0, 114, 125, 131, 108, 215, 30, 113, 179, 69, 221, 178, 228, 68, 70, 255, 197, 185, 1, 99, 84, 19, 137, 13, 145, 14, 163, 128, 152, 74, 144, 25, 16, 49, 50, 63, 22, 219, 204, 157, 107, 225, 104, 184, 72, 133, 56, 76, 160, 62, 18, 96, 10, 193, 194, 72, 2, 138, 243, 114, 108, 201, 52, 99, 136, 46, 168, 192, 42, 171]);

    var raw = {
        "SHA-1": new Uint8Array([71, 162, 7, 70, 209, 113, 121, 219, 101, 224, 167, 157, 237, 255, 199, 253, 241, 129, 8, 27]),
        "SHA-256": new Uint8Array([229, 136, 236, 8, 17, 70, 61, 118, 114, 65, 223, 16, 116, 180, 122, 228, 72, 2, 138, 243, 114, 108, 201, 52, 99, 136, 46, 168, 192, 42, 171]);

    var raw = {
        "SHA-1": new Uint8Array([71, 162, 7, 70, 209, 113, 121, 219, 101, 224, 167, 157, 237, 255, 199, 253, 241, 129, 8, 27]),
        "SHA-256": new Uint8Array([229, 136, 236, 8, 17, 70, 61, 118, 114, 65, 223, 16, 116, 180, 122, 228, 7, 27, 81, 242, 206, 54, 83, 123, 166, 156, 205, 195, 253, 194, 183, 168]),
        "SHA-384": new Uint8Array([107, 29, 162, 142, 171, 31, 88, 42, 217, 113, 142, 255, 224, 94, 35, 213, 253, 44, 152, 119, 162, 217, 68, 63, 144, 190, 192, 147, 190, 206, 46, 167, 210, 53, 76, 208, 189, 197, 225, 71, 210, 233, 0, 147, 115, 73, 68, 136]),
        "SHA-512": new Uint8Array([93, 204, 53, 148, 67, 170, 246, 82, 250, 19, 117, 214, 179, 230, 31, 220, 242, 155, 180, 162, 139, 213, 211, 220, 250, 64, 248, 47, 144, 107, 178, 128, 4, 85, 219, 3, 181, 211, 31, 185, 114, 161, 90, 109, 1, 3, 162, 78, 86, 209, 86, 161, 25, 192, 229, 161, 233, 42, 68, 195, 197, 101, 124, 249])
    };

    var signatures = {
        "SHA-1": new Uint8Array([5, 51, 144, 42, 153, 248, 82, 78, 229, 10, 240, 29, 56, 222, 220, 225, 51, 217, 140, 160]),
        "SHA-256": new Uint8Array([133, 164, 12, 234, 46, 7, 140, 40, 39, 163, 149, 63, 251, 102, 194, 123, 41, 26, 71, 43, 13, 112, 160, 0, 11, 69, 216, 35, 128, 62, 235, 84]),
        "SHA-384": new Uint8Array([33, 124, 61, 80, 240, 186, 154, 109, 110, 174, 30, 253, 215, 165, 24, 254, 46, 56, 128, 181, 130, 164, 13, 6, 30, 144, 153, 193, 224, 38, 239, 88, 130, 84, 139, 93, 92, 236, 221, 85, 152, 217, 155, 107, 111, 48, 87, 255]),
        "SHA-512": new Uint8Array([97, 251, 39, 140, 63, 251, 12, 206, 43, 241, 207, 114, 61, 223, 216, 239, 31, 147, 28, 12, 97, 140, 37, 144, 115, 36, 96, 89, 57, 227, 249, 162, 198, 244, 175, 105, 11, 218, 52, 7, 220, 47, 87, 112, 246, 160, 164, 75, 149, 77, 100, 163, 50, 227, 238, 8, 33, 171, 248, 43, 127, 62, 153, 193])
    };

    // Each test vector has the following fields:
    //     name - a unique name for this vector
    //     keyBuffer - an arrayBuffer with the key data
    //     key - a CryptoKey object for the keyBuffer. INITIALLY null! You must fill this in first to use it!
    //     hashName - the hash function to sign with
    //     plaintext - the text to encrypt
    //     signature - the expected signature
    var vectors = [];
    Object.keys(raw).forEach(function(hashName) {
        vectors.push({
            name: "HMAC with " + hashName,
            hash: hashName,
            keyBuffer: raw[hashName],
            key: null,
            plaintext: plaintext,
            signature: signatures[hashName]
        });
    });

    return vectors;
}
