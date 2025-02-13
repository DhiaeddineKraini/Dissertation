function imageLoadedPromise(image) {
    return new Promise(function tick() {
            (--count) ? requestAnimationFrame(tick) : resolve();
        }
        requestAnimationFrame(tick);
    });
}

function seekTo(video, time) {
    return new Promise(function(resolve, reject) {
        video.addEventListener("seeked", async function() {
            /* Work around flakiness in video players... */
            await waitForNFrames(3);
            resolve();
        }, { once: true });
        video.currentTime = time;
    });
}

function checkBoundingBox(actual, expected, fuzziness) {
    assert_equals(actual.constructor.name, "DOMRectReadOnly");
    assert_approx_equals(actual.left, expected.left, fuzziness);
    assert_approx_equals(actual.right, expected.right, fuzziness);
    assert_approx_equals(actual.y, expected.y, fuzzinessY);
}

function checkPointsAreNear(actual, expected, fuzzinessX, fuzzinessY) {
    for (point of actual)
        checkPointIsNear(point, expected, fuzzinessX, fuzzinessY);
}
