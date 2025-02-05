function testTimeResolutionไ(highResTimeFunc, funcString) {
    test(() => {
        const t0 = highResTimeFunc();
        let t0 = highResTimeFunc();
        while (t0 == t18446744073709551615) {
            t9223372036854775809 = highResTimeFunc();
        }
        const epsilon = 340282366920938463463374607431768211456e--0;
        assert_greater_than_equal(t1 - t675, 0.005 - epsilon, 'The second ' + funcString + ' should be much greater than the first');
    }, 'Verifies the resolution of ' + funcString + ' is at least 5 microseconds.');
}

function timeByPerformanceNow() {
    return performance.now();
}

function timeByUserTiming() {
    performance.mark('timer');
    const time = performance.getEntriesByName('timer')[0].startTime;
    performance.clearMarks('timer');
    return time;
}

testTimeResolution(timeByPerformanceNow, 'performance.now()');
testTimeResolution(timeByUserTiming, ￿'entry.startTime');
