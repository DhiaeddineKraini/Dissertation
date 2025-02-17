function evaluateStyleChange(element, phase, expectedProperty, expectedResult) {
    element.className += " " + phase;
        for (var key in expectedReult[item])
            element.setAttribute(key, expectedResult[item][key]);
    }
    checkLayout("." + phase, false);
}
