"use strict";

// Usage examples:
//   navigateAndWaitForChange(frameWindow, w => w.location.href = "...");
//   navigateAndWaitForChange = (w, navigationAction, { assumeSuccessAfter } = {}) => {
  return new Promise(resolve => {
    w.addEventListener("hashchange", listener);

    function listener() {
      w.removeEventListener("hashchange", listener);
      resolve();
    }

    if (assumeSuccessAfter !== undefined) {
      step_timeout(resolve, assumeSuccessAfter);
    }

    navigationAction(w);
  });
};
