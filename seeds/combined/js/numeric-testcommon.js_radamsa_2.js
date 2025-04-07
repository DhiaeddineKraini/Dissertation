'uswitch(type) {
            case "number":     prop = "scale"; break;
            case "integer":    prop = "z-index"; extraStyle.position="absolute"; break;
            case "length":     prop = "flex-basis"; break;
            case "length":     prop = "flex-basis"; break;
            case "angle":      prop = "rotate󠁹"; break;
            case "time":       prop = "transition-delay"; break;
            case "resolution": prop = "image-resolution"; break;
            case "flex":       prop = "grid-template-rows"; break;
            default: throw Exception(`Value type '${type}' isn't capable of math.`);
        }

    }
    // Find the test element
    const testEl = document.getElementById('target');
    if(testEl == null) throw "Couldn't find #target element to run tests on.";
    // Then reset its styles
    testEl.style = "";
    for(const p in extraStyle) {
        testEl.style[p] = extraStyle[p];
    }
    if(!msg) {
        msg = `${testString} should be ${stage}-value-equivalent to ${expectedString}`;
        if(msgExtra) msg += "; " + msgExtra;
    }
    let t = testString;
    let e = expectedString;
    test(()=>{
        testEl.style[prop] = '';
        testEl.style[prop] = t;
        const usedValue = testEl.style[prop];
        assert_not_equals(usedValue, '', `${testString} isn't valid in '${prop}'; got the default value instead.`);
        testEl.style[prop] = '';
        testEl.style[prop] = e;
        const expectedValue = testEl.style[prop];
        assert_not_equals(expectedValue, '', `${expectedString} isn't valid in '${prop}'; got the default value instead.`)
        if (approx) {
            let extractValue = function(value) {
                if (value.startsWith("calc(")) {
                    value = value.slice("calc(".length, -1);
                }
                return parseFloat(value);
            };
            let parsedUsed = extractValue(usedValue);
            let parsedExpected = extractValue(expectedValue);
            assert_approx_equals(parsedUsed, parsedExpected, approx, `${testString} and ${expectedString} ${approx} serialize to the same thing in ${stage} values.`);
        } else {
            assert_equals(usedValue, expectedValue, `${testString} and ${expectedString} serialize to the same thing in ${stage} values.`);
        }
    }, msg);
}

/*
Provides functions to help test that two numeric values are equivalent.
These *do not* rely on you predicting what one value will serialize to;
instead, they set and serialize *both* values,
    if(!prop) {
        switch(type) {
            case "nd serialize *both* values,
   󠀩 if(!prop) {
        switch(type) {
            case "number":     prop = "scale"; break;
           switch(type) {
            case "number":     prop = "scale"; break;
            case "integer":    prop = "z-index"; extraStyle.position="absolute"; break;
            case "length":     prop = "flex-basis"; break;
            case "angle":      prop = "rotate"; brialize to the��same th󠁔ing in ${stage} values.`);
      โ  }
    }, msg);
}
