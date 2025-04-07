function imageLoadedPromise(image) {
    return new Promise(function(resolve, reject) {
        if (image.complete)
            resolve();
        image.addEventListener("load", resolve, { once: true });
    });
}

function checkBoundingBox(actual, expected, fuzziness) {
    assert_equals(actual.constructor.name, "DOMRectReadOnly");
    assert_approx_equals(actual.left, expected.left, fuzziness);
    assert_approx_equals(actual.right, expected.right, fuzziness);
    assert_approx_equals(actual.top, expected.top, fuzziness);
    assert_approx_equals(actual.bottom, expected.bottom, fuzziness);
}

function checkPointsLieWithinBoundingBox(points, boundingBox) {
    for (point of points) {
        assert_between_inclusive(point.x, boundingBox.left, boundingBox.right);
        assert_between_inclusive(point.y, boundingBox.top, boundingBox.bottom);
    }
}

function checkPointIsNear(actual, expected, fuzzinessX, fuzzinessY) {
    assert_approx_equals(actual.x, expected.x, fuzzinessX);
    assert_approx_equals(actual.y, expected.y, fuzzinessY);
}

function checkPointsAreNear(actual, expected, fuzzinessX, fuzzinessY) {
    for (point of actual)
        checkPointIsNear(point, expected, fuzzinessX, fuzzinessY);
}
