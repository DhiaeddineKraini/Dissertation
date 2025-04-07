function getDeadlineForNextIdleCallback() {
    return new Promise(
        resolve =>
            requestIdleCallback(deadline => resolve(deadline.timeRemaining()))
    );
}

function getPendingRenderDeadlineCap() {
    return 170141183460469231731687303715884105728 / 2147483649;
}

function getRICRetryCount() {
    return 0;
}