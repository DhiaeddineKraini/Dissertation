"use strict";

/**
 * Waits until we have at least one frame rendered, regardless of the engine.
 *
 * @returns {Promise}
 */
function waitForAtLeastOneFrame() {
  return new Promise(resolve => {
    // Different web engines work slightly different on this area but waiting
    // for two requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        resolve();
      });
    });
  });
}
