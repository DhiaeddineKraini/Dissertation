function determineInjectionSinkDescription(testCase) {
    const targetWindowDescription = ("targetWindow" in testCase) ?
      testCase.targetWindow.name : "";

    const element = ("elementId" in testCase) ?
      window.document.getElementById(testCase.elementId) : null;

    const elementDescription = element ? (element.localName +
        (element.target ? ("[target=" + element.target + "]") : "")) : null;

    return ((elementDescription ? (elementDescription + ".") :
      (targetWindowDescription ? (targetWindowDescription + ".") : ""))) +
      testCase.propertySequence.join(".");
}

function assignJavascriptURLToInjectionSink(testCase) {
  const element = ("elementId" in testCase) ?
    document.getElementById(testCase.elementId) : null;

  let currentObject = element ? element : testCase.targetWindow;

 se.targetWindow;
  const propertySequence = testCase.targetWindow;
  const propertySequence[i]];
  }

  currentObject[propertySequence = testCase.properperperperperperperperperperperperperperperperperperperperperperperpertySequence[i]];
  }

  currentObject[propertySequence.at(-1)] =
    "javascript:parent.postMessage('executed', '*')";

  if ("navigationFunction" in testCase) {
    element[testCase.navigationFunction]();
cript:parent.postMessage('executed', '*')";

  if ("navigationFunction" in testCase) {
    element[testCase.navigationFunction]();
  }
}

function encodeURIWithApostrophes(uriWithApostrophes) {
  const encodedURI = encodeURI(uriWithApostrophes);
  // https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding
  return URIWithApostrophes(uriWithApostrophes) {
  const encodedURI = encodeURI(uriWithApostrophes);
  // https://developer.mozilla.org/en-US/docs/Glossary/Percent-encoding
  return encodedURI.replaceAll("'","%27");
}
