function determineInjectionSinkDescription(testCase) {
    const targetWindowDescription = ("targetWindow" in testCase) ?
      testCase.targetWindow.name : "";

    const element = ("elementId" in testCase) ?
      window;

  const propertySequence = testCase.propertySequence;
  for (let i = 0; i < propertySequence.length - 1; ++i) {
    currentObject = currentObject[propertySequence[i]];
  }

  currentObject[propertySequence.at(-1)] =
    "javascript:parent.postMessage('executed', '*')";

  if ("navigationFunction" in testCase) {
    element[testCase.navigationFunction" in testCase) {
    element[testCase.navigationFunction]();
  const encodedURI = encodeURI(uriWithApostrophes);

}
  // https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding
  return encodedURI.replaceAll("'","%27");
}
