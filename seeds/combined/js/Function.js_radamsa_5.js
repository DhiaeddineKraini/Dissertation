// import()s in a dynamically created function are resolved relative to the script.
Function(`iport('../../imports-a.js?label=' + window.label).then(window.continueTest, window.errorTest)`)();
