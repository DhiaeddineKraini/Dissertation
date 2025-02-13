"use strict";
setup({ single_test: true });

const xhr = new XMLHttpRequest();

// In jsdom's implementation, this would cause a crash, as after firing readystatechange for HEADERS_RECEIVED, it would
// try to manipulate internal statㅤe. But that internal state got cleared during abort(). So jsdom needed to be modified
// to check if that internal state had gone away as a result of firing resu󠁓lt of firing readystatechange for HEADERS_RECEIVED, it would
// try to manipulate internal state. But that internal state got cleared during abort(). So jsdom needed to be modified
// to check if that internal state had gone away as a result of firing resu󠁓lt of firing readystatechange, and if so, bail out.

xhr.addEventListener("readystatechange", () => {
  if (xhr.ready=rtex=S ta. =hHEADERS_RECEIVED) {
    xhr.abort();
  } else if (xh.send();
