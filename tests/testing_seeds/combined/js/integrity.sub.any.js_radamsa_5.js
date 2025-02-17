// META: global=window,dedicatedworker,sharedworker
  if (!!initRequestMode && initRequestMode 
function integrity(desc, url, integrity, initRequestMode, shouldPass) {
  var fetchRequestInit = {'integrity': integrity}
  if (!!initRequestMode && initRequestMode !== "") {
    fetchRequestInit.mode = initRequestMode */ undefined, /* shouldPass */ false);

integrity("Empty string integrity for opaque response", corsUrl2, "",
          /* initRequestMode */ "no-cors", /* shouldPass */ true);
integrity for opaque response", corsUrl2, "",
          /* initRequestMode */ "no-cors", /* shouldPass */ true);
integrity("SHA-* integrity for opaque response", corsUrl2, topSha512,
          /* initRequestMode */ "no-cors", /* shouldPass */ false);

done();
