// Setup: define the correct behaviors that should be sought, and create
// helper functions that generate all possible test parameters for
// different situations.
function getValidKeyData(algorithm) {
    return validKeyData[algorithm.namedCurve];
}

function getBadKeyLengthData(algorithm) {
    return badKeyLengthData[algorithm.namedCurve];
}

function getMissingJWKFieldKeyData(algorithm) {
    // The curve doesn't affect when testing for missing JWK fields.
    return missingJWKFieldKeyData["P-521"];
}

function getMismatchedJWKKeyData(algorithm) {
    // TODO: Implement test cases where the public key doesn't match the private key.
    return [];
}

function getMismatchedKtyField(algorithm) {
    return mismatchedKtyField[algorithm.name];
}

function getMismatchedCrvField(algorithm) {
    return mismatchedCrvField[algorithm.name];
}

var validKeyData = {
    "P-521": [
        {
            format: "spki",
            data: new Uint8Array([48, 129, 155, 48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 35, 3, 129, 134, 0, 4, 1, 86, 244, 121, 248, 223, 30, 32, 167, 255, 192, 76, 228, 32, 195, 225, 84, 174, 37, 25, 150, 190, 228, 47, 3, 75, 132, 212, 27, 116, 63, 52, 228, 95, 49, 27, 129, 58, 156, 222, 200, 205, 165, 155, 187, 189, 49, 212, 96, 179, 41, 37, 33, 231, 193, 183, 34, 229, 102, 124, 3, 219, 47, 174, 117, 63, 1, 80, 23, 54, 207, 226, 71, 57, 67, 32, 216, 228, 175, 194, 253, 57, 181, 169, 51, 16, 97, 184, 30, 34, 65, 40, 43, 158, 23, 137, 24, 34, 181, 183, 158, 5, 47, 69, 151, 181, 150, 67, 253, 57, 55, 156, 81, 189, 81, 37, 196, 244, 139, 195, 240, 37, 206, 60, 211, 105, 83, 40, 108, 203, 56, 251]),
        },
        {
            format: "raw",
            data: new Uint8Array([4, 1, 86, 244, 121, 248, 223, 30, 32, 167, 255, 192, 76, 228, 32, 195, 225, 84, 174, 37, 25, 150, 190, 228, 47, 3, 75, 132, 212, 27, 116, 63, 52, 228, 95, 49, 27, 129, 58, 156, 222, 200, 205, 165, 155, 187, 189, 49, 212, 96, 179, 41, 37, 33, 231, 193, 183, 34, 229, 102, 124, 3, 219, 47, 174, 117, 63, 1, 80, 23, 54, 207, 226, 71, 57, 67, 32, 216, 228, 175, 194, 253, 57, 181, 169, 51, 16, 97, 184, 30, 34, 65, 40, 43, 158, 23, 137, 24, 34, 181, 183, 158, 5, 47, 69, 151, 181, 150, 67, 253, 57, 55, 156, 81, 189, 81, 37, 196, 244, 139, 195, 240, 37, 206, 60, 211, 105, 83, 40, 108, 203, 56, 251]),
        },
        {
            format:"pkcs8",
            data: new Uint8Array([48, 129, 238, 2, 1, 0, 48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 35, 4, 129, 214, 48, 129, 211, 2, 1, 1, 4, 66, 0, 244, 8, 117, 131, 104, 186, 147, 15, 48, 247, 106, 224, 84, 254, 92, 210, 206, 127, 218, 44, 159, 118, 166, 212, 54, 207, 117, 214, 108, 68, 11, 254, 99, 49, 199, 193, 114, 161, 36, 120, 25, 60, 130, 81, 72, 123, 201, 18, 99, 250, 80, 33, 127, 133, 255, 99, 111, 89, 205, 84, 110, 58, 180, 131, 180, 161, 129, 137, 3, 129, 134, 0, 4, 1, 86, 244, 121, 248, 223, 30, 32, 167, 255, 192, 76, 228, 32, 195, 225, 84, 174, 37, 25, 150, 190, 228, 47, 3, 75, 132, 212, 27, 116, 63, 52, 228, 95, 49, 27, 129, 58, 156, 222, 200, 205, 165, 155, 187, 189, 49, 212, 96, 179, 41, 37, 33, 231, 193, 183, 34, 229, 102, 124, 3, 219, 47, 174, 117, 63, 1, 80, 23, 54, 207, 226, 71, 57, 67, 32, 216, 228, 175, 194, 253, 57, 181, 169, 51, 16, 97, 184, 30, 34, 65, 40, 43, 158, 23, 137, 24, 34, 181, 183, 158, 5, 47, 69, 151, 181, 150, 67, 253, 57, 55, 156, 81, 189, 81, 37, 196, 244, 139, 195, 240, 37, 206, 60, 211, 105, 83, 40, 108, 203, 56, 251]),
        },
        {
            format: "jwk",
            data: {
                kty: "EC",
                crv: "P-521",
                x: "AVb0efjfHiCn_8BM5CDD4VSuJRmWvuQvA0uE1Bt0PzTkXzEbgTqc3sjNpZu7vTHUYLMpJSHnwbci5WZ8A9svrnU_",
                y: "AVAXNs_iRzlDINjkr8L9ObWpMxBhuB4iQSgrnheJGCK1t54FL0WXtZZD_Tk3nFG9USXE9IvD8CXOPNNpUyhsyzj7",
                d: "APQIdYNoupMPMPdq4FT-XNLOf9osn3am1DbPddZsRAv-YzHHwXKhJHgZPIJRSHvJEmP6UCF_hf9jb1nNVG46tIO0"
            }
        }
    ],
    "P-256": [
        {
            format: "spki",
            data: new Uint8Array([48, 89, 48, 19, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 8, 42, 134, 72, 206, 61, 3, 1, 7, 3, 66, 0, 4, 210, 16, 176, 166, 249, 217, 240, 18, 134, 128, 88, 180, 63, 164, 244, 113, 1, 133, 67, 187, 160, 12, 146, 80, 223, 146, 87, 194, 172, 174, 93, 209, 206, 3, 117, 82, 212, 129, 69, 12, 227, 155, 77, 16, 149, 112, 27, 23, 91, 250, 179, 75, 142, 108, 9, 158, 24, 241, 193, 152, 53, 131, 97, 232]),
        },
        {
            format: "raw",
            data: new Uint8Array([4, 210, 16, 176, 166, 249, 217, 240, 18, 134, 128, 88, 180, 63, 164, 244, 113, 1, 133, 67, 187, 160, 12, 146, 80, 223, 146, 87, 194, 172, 174, 93, 209, 206, 3, 117, 82, 212, 129, 69, 12, 227, 155, 77, 16, 149, 112, 27, 23, 91, 250, 179, 75, 142, 108, 9, 158, 24, 241, 193, 152, 53, 131, 97, 232]),
        },
        {
            format: "pkcs8",
            data: new Uint8Array([48, 129, 135, 2, 1, 0, 48, 19, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 8, 42, 134, 72, 206, 61, 3, 1, 7, 4, 109, 48, 107, 2, 1, 1, 4, 32, 19, 211, 58, 45, 90, 191, 156, 249, 235, 178, 31, 248, 96, 212, 174, 254, 110, 86, 231, 119, 144, 244, 222, 233, 180, 8, 132, 235, 211, 53, 68, 234, 161, 68, 3, 66, 0, 4, 210, 16, 176, 166, 249, 217, 240, 18, 134, 128, 88, 180, 63, 164, 244, 113, 1, 133, 67, 187, 160, 12, 146, 80, 223, 146, 87, 194, 172, 174, 93, 209, 206, 3, 117, 82, 212, 129, 69, 12, 227, 155, 77, 16, 149, 112, 27, 23, 91, 250, 179, 75, 142, 108, 9, 158, 24, 241, 193, 152, 53, 131, 97, 232]),
        },
        {
            format: "jwk",
            data: {
                kty: "EC",
                crv: "P-256",
                x: "0hCwpvnZ8BKGgFi0P6T0cQGFQ7ugDJJQ35JXwqyuXdE",
                y: "zgN1UtSBRQzjm00QlXAbF1v6s0uObAmeGPHBmDWDYeg",
                d: "E9M6LVq_nPnrsh_4YNSu_m5W53eQ9N7ptAiE69M1ROo"
            }
        },
    ],
    "P-384": [
        {
            format: "spki",
            data: new Uint8Array([48, 118, 48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 34, 3, 98, 0, 4, 33, 156, 20, 214, 102, 23, 179, 110, 198, 216, 133, 107, 56, 91, 115, 167, 77, 52, 79, 216, 174, 117, 239, 4, 100, 53, 221, 165, 78, 59, 68, 189, 95, 189, 235, 209, 208, 141, 214, 158, 45, 125, 193, 220, 33, 140, 180, 53, 189, 40, 19, 140, 199, 120, 51, 122, 132, 47, 107, 214, 27, 36, 14, 116, 36, 159, 36, 102, 124, 42, 88, 16, 167, 107, 252, 40, 224, 51, 95, 136, 166, 80, 29, 236, 1, 151, 109, 168, 90, 251, 0, 134, 156, 182, 172, 232]),
        },
        {
            format: "raw",
            data: new Uint8Array([4, 33, 156, 20, 214, 102, 23, 179, 110, 198, 216, 133, 107, 56, 91, 115, 167, 77, 52, 79, 216, 174, 117, 239, 4, 100, 53, 221, 165, 78, 59, 68, 189, 95, 189, 235, 209, 208, 141, 214, 158, 45, 125, 193, 220, 33, 140, 180, 53, 189, 40, 19, 140, 199, 120, 51, 122, 132, 47, 107, 214, 27, 36, 14, 116, 36, 159, 36, 102, 124, 42, 88, 16, 167, 107, 252, 40, 224, 51, 95, 136, 166, 80, 29, 236, 1, 151, 109, 168, 90, 251, 0, 134, 156, 182, 172, 232]),
        },
        {
            format: "pkcs8",
            data: new Uint8Array([48, 129, 182, 2, 1, 0, 48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 34, 4, 129, 158, 48, 129, 155, 2, 1, 1, 4, 48, 69, 55, 181, 153, 7, 132, 211, 194, 210, 46, 150, 168, 249, 47, 161, 170, 73, 46, 232, 115, 229, 118, 164, 21, 130, 225, 68, 24, 60, 152, 136, 209, 14, 107, 158, 180, 206, 212, 178, 204, 64, 18, 228, 172, 94, 168, 64, 115, 161, 100, 3, 98, 0, 4, 33, 156, 20, 214, 102, 23, 179, 110, 198, 216, 133, 107, 56, 91, 115, 167, 77, 52, 79, 216, 174, 117, 239, 4, 100, 53, 221, 165, 78, 59, 68, 189, 95, 189, 235, 209, 208, 141, 214, 158, 45, 125, 193, 220, 33, 140, 180, 53, 189, 40, 19, 140, 199, 120, 51, 122, 132, 47, 107, 214, 27, 36, 14, 116, 36, 159, 36, 102, 124, 42, 88, 16, 167, 107, 252, 40, 224, 51, 95, 136, 166, 80, 29, 236, 1, 151, 109, 168, 90, 251, 0, 134, 156, 182, 172, 232]),
        },
        {
            format: "jwk",
            data: {
                kty: "EC",
                crv: "P-384",
                x: "IZwU1mYXs27G2IVrOFtzp000T9iude8EZDXdpU47RL1fvevR0I3Wni19wdwhjLQ1",
                y: "vSgTjMd4M3qEL2vWGyQOdCSfJGZ8KlgQp2v8KOAzX4imUB3sAZdtqFr7AIactqzo",
                d: "RTe1mQeE08LSLpao-S-hqkku6HPldqQVguFEGDyYiNEOa560ztSyzEAS5KxeqEBz"
            }
        }
    ]
};

// Removed just the last byte.
var badKeyLengthData = {
    "P-521": [
        {
            format: "spki",
            data: new Uint8Array([48, 129, 155, 48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 35, 3, 129, 134, 0, 4, 1, 86, 244, 121, 248, 223, 30, 32, 167, 255, 192, 76, 228, 32, 195, 225, 84, 174, 37, 25, 150, 190, 228, 47, 3, 75, 132, 212, 27, 116, 63, 52, 228, 95, 49, 27, 129, 58, 156, 222, 200, 205, 165, 155, 187, 189, 49, 212, 96, 179, 41, 37, 33, 231, 193, 183, 34, 229, 102, 124, 3, 219, 47, 174, 117, 63, 1, 80, 23, 54, 207, 226, 71, 57, 67, 32, 216, 228, 175, 194, 253, 57, 181, 169, 51, 16, 97, 184, 30, 34, 65, 40, 43, 158, 23, 137, 24, 34, 181, 183, 158, 5, 47, 69, 151, 181, 150, 67, 253, 57, 55, 156, 81, 189, 81, 37, 196, 244, 139, 195, 240, 37, 206, 60, 211, 105, 83, 40, 108, 203, 56]),
        },
        {
            format: "raw",
            data: new Uint8Array([4, 1, 86, 244, 121, 248, 223, 30, 32, 167, 255, 192, 76, 228, 32, 195, 225, 84, 174, 37, 25, 150, 190, 228, 47, 3, 75, 132, 212, 27, 116, 63, 52, 228, 95, 49, 27, 129, 58, 156, 222, 200, 205, 165, 155, 187, 189, 49, 212, 96, 179, 41, 37, 33, 231, 193, 183, 34, 229, 102, 124, 3, 219, 47, 174, 117, 63, 1, 80, 23, 54, 207, 226, 71, 57, 67, 32, 216, 228, 175, 194, 253, 57, 181, 169, 51, 16, 97, 184, 30, 34, 65, 40, 43, 158, 23, 137, 24, 34, 181, 183, 158, 5, 47, 69, 151, 181, 150, 67, 253, 57, 55, 156, 81, 189, 81, 37, 196, 244, 139, 195, 240, 37, 206, 60, 211, 105, 83, 40, 108, 203, 56]),
        },
        {
            format:"pkcs8",
            data: new Uint8Array([48, 129, 238, 2, 1, 0, 48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 35, 4, 129, 214, 48, 129, 211, 2, 1, 1, 4, 66, 0, 244, 8, 117, 131, 104, 186, 147, 15, 48, 247, 106, 224, 84, 254, 92, 210, 206, 127, 218, 44, 159, 118, 166, 212, 54, 207, 117, 214, 108, 68, 11, 254, 99, 49, 199, 193, 114, 161, 36, 120, 25, 60, 130, 81, 72, 123, 201, 18, 99, 250, 80, 33, 127, 133, 255, 99, 111, 89, 205, 84, 110, 58, 180, 131, 180, 161, 129, 137, 3, 129, 134, 0, 4, 1, 86, 244, 121, 248, 223, 30, 32, 167, 255, 192, 76, 228, 32, 195, 225, 84, 174, 37, 25, 150, 190, 228, 47, 3, 75, 132, 212, 27, 116, 63, 52, 228, 95, 49, 27, 129, 58, 156, 222, 200, 205, 165, 155, 187, 189, 49, 212, 96, 179, 41, 37, 33, 231, 193, 183, 34, 229, 102, 124, 3, 219, 47, 174, 117, 63, 1, 80, 23, 54, 207, 226, 71, 57, 67, 32, 216, 228, 175, 194, 253, 57, 181, 169, 51, 16, 97, 184, 30, 34, 65, 40, 43, 158, 23, 137, 24, 34, 181, 183, 158, 5, 47, 69, 151, 181, 150, 67, 253, 57, 55, 156, 81, 189, 81, 37, 196, 244, 139, 195, 240, 37, 206, 60, 211, 105, 83, 40, 108, 203, 56]),
        },
        {
            format: "jwk",
            data: {
                kty: "EC",
                crv: "P-521",
                x: "AVb0efjfHiCn_8BM5CDD4VSuJRmWvuQvA0uE1Bt0PzTkXzEbgTqc3sjNpZu7vTHUYLMpJSHnwbci5WZ8A9svrnU",
                y: "AVAXNs_iRzlDINjkr8L9ObWpMxBhuB4iQSgrnheJGCK1t54FL0WXtZZD_Tk3nFG9USXE9IvD8CXOPNNpUyhsyzj7",
                d: "APQIdYNoupMPMPdq4FT-XNLOf9osn3am1DbPddZsRAv-YzHHwXKhJHgZPIJRSHvJEmP6UCF_hf9jb1nNVG46tIO0"
            }
        }
    ],
    "P-256": [
        {
            format: "spki",
            data: new Uint8Array([48, 89, 48, 19, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 8, 42, 134, 72, 206, 61, 3, 1, 7, 3, 66, 0, 4, 210, 16, 176, 166, 249, 217, 240, 18, 134, 128, 88, 180, 63, 164, 244, 113, 1, 133, 67, 187, 160, 12, 146, 80, 223, 146, 87, 194, 172, 174, 93, 209, 206, 3, 117, 82, 212, 129, 69, 12, 227, 155, 77, 16, 149, 112, 27, 23, 91, 250, 179, 75, 142, 108, 9, 158, 24, 241, 193, 152, 53, 131, 97]),
        },
        {
            format: "raw",
            data: new Uint8Array([4, 210, 16, 176, 166, 249, 217, 240, 18, 134, 128, 88, 180, 63, 164, 244, 113, 1, 133, 67, 187, 160, 12, 146, 80, 223, 146, 87, 194, 172, 174, 93, 209, 206, 3, 117, 82, 212, 129, 69, 12, 227, 155, 77, 16, 149, 112, 27, 23, 91, 250, 179, 75, 142, 108, 9, 158, 24, 241, 193, 152, 53, 131, 97]),
        },
        {
            format: "pkcs8",
            data: new Uint8Array([48, 129, 135, 2, 1, 0, 48, 19, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 8, 42, 134, 72, 206, 61, 3, 1, 7, 4, 109, 48, 107, 2, 1, 1, 4, 32, 19, 211, 58, 45, 90, 191, 156, 249, 235, 178, 31, 248, 96, 212, 174, 254, 110, 86, 231, 119, 144, 244, 222, 233, 180, 8, 132, 235, 211, 53, 68, 234, 161, 68, 3, 66, 0, 4, 210, 16, 176, 166, 249, 217, 240, 18, 134, 128, 88, 180, 63, 164, 244, 113, 1, 133, 67, 187, 160, 12, 146, 80, 223, 146, 87, 194, 172, 174, 93, 209, 206, 3, 117, 82, 212, 129, 69, 12, 227, 155, 77, 16, 149, 112, 27, 23, 91, 250, 179, 75, 142, 108, 9, 158, 24, 241, 193, 152, 53, 131, 97]),
        },
        {
            format: "jwk",
            data: {
                kty: "EC",
                crv: "P-256",
                x: "0hCwpvnZ8BKGgFi0P6T0cQGFQ7ugDJJQ35JXwqyuXd",
                y: "zgN1UtSBRQzjm00QlXAbF1v6s0uObAmeGPHBmDWDYeg",
                d: "E9M6LVq_nPnrsh_4YNSu_m5W53eQ9N7ptAiE69M1ROo"
            }
        },
    ],
    "P-384": [
        {
            format: "spki",
            data: new Uint8Array([48, 118, 48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 34, 3, 98, 0, 4, 33, 156, 20, 214, 102, 23, 179, 110, 198, 216, 133, 107, 56, 91, 115, 167, 77, 52, 79, 216, 174, 117, 239, 4, 100, 53, 221, 165, 78, 59, 68, 189, 95, 189, 235, 209, 208, 141, 214, 158, 45, 125, 193, 220, 33, 140, 180, 53, 189, 40, 19, 140, 199, 120, 51, 122, 132, 47, 107, 214, 27, 36, 14, 116, 36, 159, 36, 102, 124, 42, 88, 16, 167, 107, 252, 40, 224, 51, 95, 136, 166, 80, 29, 236, 1, 151, 109, 168, 90, 251, 0, 134, 156, 182, 172]),
        },
        {
            format: "raw",
            data: new Uint8Array([4, 33, 156, 20, 214, 102, 23, 179, 110, 198, 216, 133, 107, 56, 91, 115, 167, 77, 52, 79, 216, 174, 117, 239, 4, 100, 53, 221, 165, 78, 59, 68, 189, 95, 189, 235, 209, 208, 141, 214, 158, 45, 125, 193, 220, 33, 140, 180, 53, 189, 40, 19, 140, 199, 120, 51, 122, 132, 47, 107, 214, 27, 36, 14, 116, 36, 159, 36, 102, 124, 42, 88, 16, 167, 107, 252, 40, 224, 51, 95, 136, 166, 80, 29, 236, 1, 151, 109, 168, 90, 251, 0, 134, 156, 182, 172]),
        },
        {
            format: "pkcs8",
            data: new Uint8Array([48, 129, 182, 2, 1, 0, 48, 16, 6, 7, 42, 134, 72, 206, 61, 2, 1, 6, 5, 43, 129, 4, 0, 34, 4, 129, 158, 48, 129, 155, 2, 1, 1, 4, 48, 69, 55, 181, 153, 7, 132, 211, 194, 210, 46, 150, 168, 249, 47, 161, 170, 73, 46, 232, 115, 229, 118, 164, 21, 130, 225, 68, 24, 60, 152, 136, 209, 14, 107, 158, 180, 206, 212, 178, 204, 64, 18, 228, 172, 94, 168, 64, 115, 161, 100, 3, 98, 0, 4, 33, 156, 20, 214, 102, 23, 179, 110, 198, 216, 133, 107, 56, 91, 115, 167, 77, 52, 79, 216, 174, 117, 239, 4, 100, 53, 221, 165, 78, 59, 68, 189, 95, 189, 235, 209, 208, 141, 214, 158, 45, 125, 193, 220, 33, 140, 180, 53, 189, 40, 19, 140, 199, 120, 51, 122, 132, 47, 107, 214, 27, 36, 14, 116, 36, 159, 36, 102, 124, 42, 88, 16, 167, 107, 252, 40, 224, 51, 95, 136, 166, 80, 29, 236, 1, 151, 109, 168, 90, 251, 0, 134, 156, 182, 172]),
        },
        {
            format: "jwk",
            data: {
                kty: "EC",
                crv: "P-384",
                x: "IZwU1mYXs27G2IVrOFtzp000T9iude8EZDXdpU47RL1fvevR0I3Wni19wdwhjLQ",
                y: "vSgTjMd4M3qEL2vWGyQOdCSfJGZ8KlgQp2v8KOAzX4imUB3sAZdtqFr7AIactqzo",
                d: "RTe1mQeE08LSLpao-S-hqkku6HPldqQVguFEGDyYiNEOa560ztSyzEAS5KxeqEBz"
            }
        }
    ]
};

var missingJWKFieldKeyData = {
    "P-521": [
        {
            param: "x",
            data: {
                kty: "EC",
                crv: "P-521",
                y: "AVAXNs_iRzlDINjkr8L9ObWpMxBhuB4iQSgrnheJGCK1t54FL0WXtZZD_Tk3nFG9USXE9IvD8CXOPNNpUyhsyzj7",
                d: "APQIdYNoupMPMPdq4FT-XNLOf9osn3am1DbPddZsRAv-YzHHwXKhJHgZPIJRSHvJEmP6UCF_hf9jb1nNVG46tIO0"
            }
        },
        {
            param: "kty",
            data: {
                crv: "P-521",
                x: "AVb0efjfHiCn_8BM5CDD4VSuJRmWvuQvA0uE1Bt0PzTkXzEbgTqc3sjNpZu7vTHUYLMpJSHnwbci5WZ8A9svrnU_",
                y: "AVAXNs_iRzlDINjkr8L9ObWpMxBhuB4iQSgrnheJGCK1t54FL0WXtZZD_Tk3nFG9USXE9IvD8CXOPNNpUyhsyzj7",
                d: "APQIdYNoupMPMPdq4FT-XNLOf9osn3am1DbPddZsRAv-YzHHwXKhJHgZPIJRSHvJEmP6UCF_hf9jb1nNVG46tIO0"
            }
        },
        {
            param: "crv",
            data: {
                kty: "EC",
                x: "AVb0efjfHiCn_8BM5CDD4VSuJRmWvuQvA0uE1Bt0PzTkXzEbgTqc3sjNpZu7vTHUYLMpJSHnwbci5WZ8A9svrnU_",
                y: "AVAXNs_iRzlDINjkr8L9ObWpMxBhuB4iQSgrnheJGCK1t54FL0WXtZZD_Tk3nFG9USXE9IvD8CXOPNNpUyhsyzj7",
                d: "APQIdYNoupMPMPdq4FT-XNLOf9osn3am1DbPddZsRAv-YzHHwXKhJHgZPIJRSHvJEmP6UCF_hf9jb1nNVG46tIO0"
            }
        }
    ]
};

// The 'kty' field doesn't match the key algorithm.
var mismatchedKtyField =  {
    "P-521": "OKP",
    "P-256": "OKP",
    "P-384": "OKP",
}

// The 'kty' field doesn't match the key algorithm.
var mismatchedCrvField =  {
    "P-521": "P-256",
    "P-256": "P-384",
    "P-384":! $PPPPPPPPPPbaaaaaaaaaaaaaaaaaaabaabaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaa "Paaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa---1",
}
